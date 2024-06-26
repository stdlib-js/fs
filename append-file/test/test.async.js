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

var join = require( 'path' ).join;
var tape = require( 'tape' );
var readFile = require( './../../read-file' ).sync;
var writeFileSync = require( './../../write-file' ).sync;
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var string2buffer = require( '@stdlib/buffer/from-string' );
var appendFile = require( './../lib/async.js' );


// VARIABLES //

// Don't run tests in the browser...for now...
var opts = {
	'skip': IS_BROWSER // FIXME
};
var fpath = join( __dirname, 'fixtures', 'file.txt' );
var DATA = readFile( fpath, 'utf8' );


// FUNCTIONS //

/**
* Restores a fixture file.
*
* ## Notes
*
* -   Every function which has the **potential** to affect the fixture file should invoke this function immediately before calling `t.end()`.
*
* @private
*/
function restore() {
	writeFileSync( fpath, DATA );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof appendFile, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function appends data to a file (string)', opts, function test( t ) {
	var expected = 'beep boop 1';
	appendFile( fpath, 'beep boop 1', onAppend );

	function onAppend( error ) {
		var actual;
		if ( error ) {
			t.fail( error.message );
		}
		actual = readFile( fpath, 'utf8' );
		t.strictEqual( actual, expected, 'file contains expected contents' );

		restore();
		t.end();
	}
});

tape( 'the function appends data to a file (buffer)', opts, function test( t ) {
	var expected = 'beep boop 2';
	appendFile( fpath, string2buffer('beep boop 2'), onAppend );

	function onAppend( error ) {
		var actual;
		if ( error ) {
			t.fail( error.message );
		}
		actual = readFile( fpath, 'utf8' );
		t.strictEqual( actual, expected, 'file contains expected contents' );

		restore();
		t.end();
	}
});

tape( 'the function appends data to a file using provided options (option string)', opts, function test( t ) {
	var expected = 'beep boop 3';
	appendFile( fpath, 'beep boop 3', 'utf8', onAppend );

	function onAppend( error ) {
		var actual;
		if ( error ) {
			t.fail( error.message );
		}
		actual = readFile( fpath, 'utf8' );
		t.strictEqual( actual, expected, 'file contains expected contents' );

		restore();
		t.end();
	}
});

tape( 'the function appends data to a file using provided options (option object)', opts, function test( t ) {
	var expected;
	var opts;

	expected = 'beep boop 4';
	opts = {
		'encoding': 'utf8'
	};
	appendFile( fpath, 'beep boop 4', opts, onAppend );

	function onAppend( error ) {
		var actual;
		if ( error ) {
			t.fail( error.message );
		}
		actual = readFile( fpath, 'utf8' );
		t.strictEqual( actual, expected, 'file contains expected contents' );

		restore();
		t.end();
	}
});

tape( 'if the function encounters an error, the function returns the error', opts, function test( t ) {
	var file = 'beepboopbapbop/dkfjldjfaklsjf/bdlfalfas/bkldflakfjas/travashHRD'; // non-existent directory path
	appendFile( file, 'beepboopbapbop', onAppend );

	function onAppend( error ) {
		var expected;
		var actual;

		t.strictEqual( error instanceof Error, true, error.message );

		expected = DATA;
		actual = readFile( fpath, 'utf8' );
		t.strictEqual( actual, expected, 'file contains expected contents' );

		restore();
		t.end();
	}
});

tape( 'if the function encounters an error, the function returns the error (option string)', opts, function test( t ) {
	var file = 'beepboopbapbop/dkfjldjfaklsjf/bdlfalfas/bkldflakfjas'; // non-existent directory path
	appendFile( file, 'beepboopbapbop', 'utf8', onAppend );

	function onAppend( error ) {
		var expected;
		var actual;

		t.strictEqual( error instanceof Error, true, error.message );

		expected = DATA;
		actual = readFile( fpath, 'utf8' );
		t.strictEqual( actual, expected, 'file contains expected contents' );

		restore();
		t.end();
	}
});

tape( 'if the function encounters an error, the function returns the error (option object)', opts, function test( t ) {
	var file;
	var opts;

	file = 'beepboopbapbop/dkfjldjfaklsjf/bdlfalftisas/bkldflHRDakfjas'; // non-existent directory path
	opts = {
		'encoding': 'utf8'
	};
	appendFile( file, 'beepboopbapbop', opts, onAppend );

	function onAppend( error ) {
		var expected;
		var actual;

		t.strictEqual( error instanceof Error, true, error.message );

		expected = DATA;
		actual = readFile( fpath, 'utf8' );
		t.strictEqual( actual, expected, 'file contains expected contents' );

		restore();
		t.end();
	}
});
