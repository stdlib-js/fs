/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
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

var resolve = require( 'path' ).resolve;
var isStringArray = require( '@stdlib/assert/is-string-array' ).primitives;
var isArrayLikeObject = require( '@stdlib/assert/is-array-like-object' );
var isFunction = require( '@stdlib/assert/is-function' );
var cwd = require( '@stdlib/process/cwd' );
var exists = require( './../../exists' );
var nulls = require( '@stdlib/array/base/nulls' );
var format = require( '@stdlib/string/format' );
var validate = require( './validate.js' );


// VARIABLES //

var MODES = {
	'first': first,
	'some': some,
	'all': all,
	'each': each
};


// FUNCTIONS //

/**
* Asynchronously resolves the first path match from a set of paths by walking parent directories.
*
* @private
* @param {Array<string>} paths - paths to resolve
* @param {string} dir - base directory
* @param {Callback} done - callback to invoke after resolving paths
* @returns {void}
*/
function first( paths, dir, done ) {
	var child;
	var spath;
	var idx;
	var out;

	out = [];

	// Start at a base directory and continue moving up through each parent directory...
	spath = resolve( dir, paths[ 0 ] );

	idx = 1; // index of next path
	exists( spath, onExists );

	/**
	* Callback invoked after checking for path existence.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {boolean} bool - boolean indicating if a path exists
	* @returns {void}
	*/
	function onExists( error, bool ) { // eslint-disable-line node/handle-callback-err
		if ( bool ) {
			out.push( spath );
			return done( null, out );
		}
		// If we have traversed all paths at the current directory level, resolve parent directory...
		if ( idx === paths.length ) {
			// Resolve a parent directory:
			child = dir;
			dir = resolve( dir, '..' );

			// If we have already reached root, we cannot resolve any higher directories...
			if ( child === dir ) {
				return done( null, out );
			}
			idx = 0;
		}
		spath = resolve( dir, paths[ idx ] );
		idx += 1;
		exists( spath, onExists );
	}
}

/**
* Asynchronously resolves one or more paths from a set of paths at a directory level by walking parent directories.
*
* @private
* @param {Array<string>} paths - paths to resolve
* @param {string} dir - base directory
* @param {Callback} done - callback to invoke after resolving paths
* @returns {void}
*/
function some( paths, dir, done ) {
	var child;
	var spath;
	var FLG;
	var out;

	FLG = 0; // initialize flag to track if we are done traversing a directory level
	out = [];

	// Start at a base directory and continue moving up through each parent directory...
	return next( dir );

	/**
	* Resolves paths within a directory.
	*
	* @private
	* @param {string} dir - directory to search
	*/
	function next( dir ) {
		var i;
		for ( i = 0; i < paths.length; i++ ) {
			spath = resolve( dir, paths[ i ] );
			exists( spath, getCallback( spath ) );
		}
	}

	/**
	* Returns a callback to be invoked upon checking for path existence.
	*
	* @private
	* @param {string} spath - resolved path
	* @returns {Callback} callback
	*/
	function getCallback( spath ) {
		return onExists;

		/**
		* Callback invoked after checking for path existence.
		*
		* @private
		* @param {(Error|null)} error - error object
		* @param {boolean} bool - boolean indicating if a path exists
		* @returns {void}
		*/
		function onExists( error, bool ) { // eslint-disable-line node/handle-callback-err
			if ( bool ) {
				out.push( spath );
			}
			FLG += 1;
			if ( FLG === paths.length ) {
				// Check if we have resolved any paths...
				if ( out.length > 0 ) {
					return done( null, out );
				}
				// Resolve a parent directory:
				child = dir;
				dir = resolve( dir, '..' );

				// Reset flag:
				FLG = 0;

				// If we have already reached root, we cannot resolve any higher directories...
				if ( child === dir ) {
					return done( null, out );
				}
				// Resolve paths at next directory level:
				return next( dir );
			}
		}
	}
}

/**
* Asynchronously resolves all paths from a set of paths at a directory level by walking parent directories.
*
* @private
* @param {Array<string>} paths - paths to resolve
* @param {string} dir - base directory
* @param {Callback} done - callback to invoke after resolving paths
* @returns {void}
*/
function all( paths, dir, done ) {
	var count;
	var child;
	var spath;
	var FLG;
	var out;

	count = 0; // initialize counter to track if we are done resolving all paths
	FLG = 0; // initialize flag to track if we are done traversing a directory level
	out = nulls( paths.length );

	// Start at a base directory and continue moving up through each parent directory...
	return next( dir );

	/**
	* Resolves paths within a directory.
	*
	* @private
	* @param {string} dir - directory to search
	*/
	function next( dir ) {
		var i;
		for ( i = 0; i < paths.length; i++ ) {
			spath = resolve( dir, paths[ i ] );
			exists( spath, getCallback( i, spath ) );
		}
	}

	/**
	* Returns a callback to be invoked upon checking for path existence.
	*
	* @private
	* @param {NonNegativeInteger} idx - index
	* @param {string} spath - resolved path
	* @returns {Callback} callback
	*/
	function getCallback( idx, spath ) {
		return onExists;

		/**
		* Callback invoked after checking for path existence.
		*
		* @private
		* @param {(Error|null)} error - error object
		* @param {boolean} bool - boolean indicating if a path exists
		* @returns {void}
		*/
		function onExists( error, bool ) { // eslint-disable-line node/handle-callback-err
			if ( bool ) {
				out[ idx ] = spath;
				count += 1;
			}
			FLG += 1;
			if ( FLG === paths.length ) {
				// Check if we have resolved any path...
				if ( count === paths.length ) {
					return done( null, out );
				}
				// Resolve a parent directory:
				child = dir;
				dir = resolve( dir, '..' );

				// Reset flag and buffers:
				FLG = 0;
				out = [];
				count = 0;

				// If we have already reached root, we cannot resolve any higher directories...
				if ( child === dir ) {
					return done( null, out );
				}
				// Resolve paths at next directory level:
				return next( dir );
			}
		}
	}
}

/**
* Asynchronously resolves each path from a set of paths by walking parent directories.
*
* @private
* @param {Array<string>} paths - paths to resolve
* @param {string} dir - base directory
* @param {Callback} done - callback to invoke after resolving paths
* @returns {void}
*/
function each( paths, dir, done ) {
	var count;
	var child;
	var spath;
	var out;
	var i;

	count = 0; // initialize counter to track if we are done resolving all paths
	out = nulls( paths.length );

	// Start at a base directory and continue moving up through each parent directory...
	for ( i = 0; i < paths.length; i++ ) {
		spath = resolve( dir, paths[ i ] );
		exists( spath, getCallback( i, spath, dir ) );
	}

	/**
	* Determines whether all paths have been resolved.
	*
	* @private
	* @returns {void}
	*/
	function next() {
		count += 1;
		if ( count === paths.length ) {
			return done( null, out );
		}
	}

	/**
	* Returns a callback to be invoked upon checking for path existence.
	*
	* @private
	* @param {NonNegativeInteger} idx - index
	* @param {string} spath - resolved path
	* @param {string} dir - base directory
	* @returns {Callback} callback
	*/
	function getCallback( idx, spath, dir ) {
		return onExists;

		/**
		* Callback invoked after checking for path existence.
		*
		* @private
		* @param {(Error|null)} error - error object
		* @param {boolean} bool - boolean indicating if a path exists
		* @returns {void}
		*/
		function onExists( error, bool ) { // eslint-disable-line node/handle-callback-err
			if ( bool ) {
				out[ idx ] = spath;
				return next();
			}
			// Resolve a parent directory:
			child = dir;
			dir = resolve( dir, '..' );

			// If we have already reached root, we cannot resolve any higher directories...
			if ( child === dir ) {
				out[ idx ] = null;
				return next();
			}
			// Resolve path at next directory level:
			spath = resolve( dir, paths[ idx ] );
			exists( spath, getCallback( idx, spath, dir ) );
		}
	}
}


// MAIN //

/**
* Asynchronously resolves paths from a set of paths by walking parent directories.
*
* @param {Array<string>} paths - paths to resolve
* @param {Options} [options] - function options
* @param {string} [options.dir] - base directory
* @param {string} [options.mode] - mode of operation
* @param {Callback} clbk - callback to invoke after resolving paths
* @throws {TypeError} first argument must be an array of strings
* @throws {TypeError} callback argument must be a function
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {void}
*
* @example
* resolveParentPaths( [ 'package.json', 'package-lock.json' ], onPaths );
*
* function onPaths( error, paths ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( paths );
* }
*/
function resolveParentPaths( paths, options, clbk ) {
	var opts;
	var done;
	var mode;
	var dir;
	var fcn;
	var err;

	if ( !isStringArray( paths ) ) {
		if ( isArrayLikeObject( paths ) && paths.length === 0 ) {
			return [];
		}
		throw new TypeError( format( 'invalid argument. First argument must be an array of strings. Value: `%s`.', paths ) );
	}
	opts = {};
	if ( arguments.length > 2 ) {
		done = clbk;
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	} else {
		done = options;
	}
	if ( !isFunction( done ) ) {
		throw new TypeError( format( 'invalid argument. Callback argument must be a function. Value: `%s`.', done ) );
	}
	if ( opts.dir ) {
		dir = resolve( cwd(), opts.dir );
	} else {
		dir = cwd();
	}
	mode = opts.mode || 'all';

	fcn = MODES[ mode ];
	fcn( paths, dir, done );
}


// EXPORTS //

module.exports = resolveParentPaths;
