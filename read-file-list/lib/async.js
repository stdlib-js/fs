/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var logger = require( 'debug' );
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;
var isString = require( '@stdlib/assert/is-string' ).isPrimitive;
var isFunction = require( '@stdlib/assert/is-function' );
var assign = require( '@stdlib/object/assign' );
var readFile = require( './../../read-file' );
var format = require( '@stdlib/string/format' );
var config = require( './config.json' );
var delay = require( './delay.js' );
var clearPending = require( './clear_pending.js' );


// VARIABLES //

var debug = logger( 'read-file-list:async' );
var MAX_RETRIES = config.max_retries;
var MAX_DELAY = config.max_delay;


// MAIN //

/**
* Asynchronously reads the entire contents of each file in a file list.
*
* @param {StringArray} list - list of file paths
* @param {(Object|string)} [options] - options
* @param {(string|null)} [options.encoding] - file encoding
* @param {string} [options.flag] - file status flag
* @param {Function} clbk - callback to invoke after reading file contents
* @throws {TypeError} first argument must be an array of strings
* @throws {TypeError} callback argument must be a function
*
* @example
* var list = [ __filename ];
*
* readFileList( list, onFiles );
*
* function onFiles( error, files ) {
*     if ( error ) {
*         throw error;
*     }
*     console.dir( files );
* }
*/
function readFileList( list, options, clbk ) {
	var pending;
	var results;
	var errFLG;
	var count;
	var opts;
	var len;
	var cb;
	var i;

	if ( !isStringArray( list ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an array of strings. Value: `%s`.', list ) );
	}
	if ( arguments.length < 3 ) {
		opts = {};
		cb = options;
	} else {
		if ( isString( options ) ) {
			opts = options;
		} else {
			opts = assign( {}, options );
		}
		cb = clbk;
	}
	if ( !isFunction( cb ) ) {
		throw new TypeError( format( 'invalid argument. Callback argument must be a function. Value: `%s`.', cb ) );
	}
	len = list.length;

	results = new Array( len );
	pending = {};
	count = 0;

	debug( 'Reading %d files...', len );
	for ( i = 0; i < len; i++ ) {
		debug( 'Reading file: %s (%d of %d).', list[ i ], i+1, len );
		readFile( list[ i ], opts, getCallback( i ) );
	}

	/**
	* Returns a callback to be invoked upon reading a file.
	*
	* @private
	* @param {NonNegativeInteger} idx - index
	* @returns {Callback} callback
	*/
	function getCallback( idx ) {
		var retries;
		var file;
		var k;

		file = list[ idx ];
		k = idx + 1;
		retries = 0;

		/**
		* Retries reading a file.
		*
		* @private
		*/
		function retry() {
			delete pending[ idx ];
			debug( 'Reading file: %s (%d of %d). Retry: %d of %d.', file, k, len, retries, MAX_RETRIES );
			readFile( file, opts, onRead );
		}

		/**
		* Callback to be invoked upon reading a file.
		*
		* @private
		* @param {(Error|null)} error - error object
		* @param {(Buffer|string)} data - file data
		* @returns {void}
		*/
		function onRead( error, data ) {
			var d;
			if ( errFLG ) {
				debug( 'An error has already been returned. Discarding data for file: %s (%d of %d).', file, k, len );
				return; // prevents `done()` from being called more than once
			}
			if ( error ) {
				debug( 'Encountered an error when reading %s (%d of %d). Error: %s', file, k, len, error.message );
				if (
					error.code === 'EMFILE' || // current process
					error.code === 'ENFILE'    // across entire system
				) {
					retries += 1;
					if ( retries > MAX_RETRIES ) {
						debug( 'Maximum number of retries exceeded. Too many open files.' );
						error = new Error( 'unexpected error. Max retries exceeded. Too many open files.' );
						return done( error );
					}
					d = delay( retries, MAX_DELAY );
					debug( 'Too many open files. Will retry reading file %d of %d in %s seconds.', k, len, d/1000 );
					pending[ idx ] = setTimeout( retry, d );
					return;
				}
				return done( error );
			}
			debug( 'Successfully read file: %s (%d of %d).', file, k, len );
			results[ idx ] = {
				'file': file,
				'data': data
			};
			count += 1;
			debug( 'Read %d of %d files.', count, len );
			if ( count === len ) {
				return done();
			}
		}

		return onRead;
	}

	/**
	* Callback invoked upon completion.
	*
	* @private
	* @param {Error} [error] - error object
	* @returns {void}
	*/
	function done( error ) {
		clearPending( pending );
		if ( error ) {
			errFLG = true;
			return cb( error );
		}
		debug( 'Successfully read all files.' );
		cb( null, results );
	}
}


// EXPORTS //

module.exports = readFileList;
