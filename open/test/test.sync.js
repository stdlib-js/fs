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

// MODULES //

var tape = require( 'tape' );
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var isNonNegativeInteger = require( '@stdlib/assert/is-nonnegative-integer' ).isPrimitive;
var closeSync = require( './../../close' ).sync;
var open = require( './../lib/sync.js' ); // eslint-disable-line stdlib/no-redeclare


// VARIABLES //

// Don't run tests in the browser...for now...
var opts = {
	'skip': IS_BROWSER // FIXME
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof open, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function opens a file', opts, function test( t ) {
	var fd = open( __filename );
	t.strictEqual( isNonNegativeInteger( fd ), true, 'returns a file descriptor' );
	closeSync( fd );
	t.end();
});

tape( 'the function opens a file (flags)', opts, function test( t ) {
	var fd = open( __filename, 'r+' );
	t.strictEqual( isNonNegativeInteger( fd ), true, 'returns a file descriptor' );
	closeSync( fd );
	t.end();
});

tape( 'the function opens a file (flags+mode)', opts, function test( t ) {
	var fd = open( __filename, 'r+', 438 );
	t.strictEqual( isNonNegativeInteger( fd ), true, 'returns a file descriptor' );
	closeSync( fd );
	t.end();
});

tape( 'if the function encounters an error, the function returns the error', opts, function test( t ) {
	var fd = open( 'beepboopbapbop' );
	t.strictEqual( fd instanceof Error, true, 'returns expected value' );
	t.end();
});

tape( 'if the function encounters an error, the function returns the error (flags)', opts, function test( t ) {
	var fd = open( 'beepboopbapbop', 'r+' );
	t.strictEqual( fd instanceof Error, true, 'returns expected value' );
	t.end();
});

tape( 'if the function encounters an error, the function returns the error (flags+mode)', opts, function test( t ) {
	var fd = open( 'beepboopbapbop', 'r+', 438 );
	t.strictEqual( fd instanceof Error, true, 'returns expected value' );
	t.end();
});
