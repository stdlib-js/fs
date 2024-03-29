/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

var openSync = require( './../../open' ).sync;
var close = require( './../lib' ); // eslint-disable-line stdlib/no-redeclare

var err;

/* Sync */

var fd = openSync( __filename, 'r+' );
// returns <number>

if ( fd instanceof Error ) {
	console.error( fd.message );
} else {
	err = close.sync( fd );
	// returns undefined

	if ( err instanceof Error ) {
		console.error( err.message );
	} else {
		console.log( 'Synchronously closed file descriptor.' );
	}
}

/* Async */

fd = openSync( __filename, 'r+' );
// returns <number>

if ( fd instanceof Error ) {
	console.error( fd.message );
} else {
	close( fd, done );
}

function done( error ) {
	if ( error ) {
		console.error( error.message );
	} else {
		console.log( 'Asynchronously closed file descriptor.' );
	}
}
