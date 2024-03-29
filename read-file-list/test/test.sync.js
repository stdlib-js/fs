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

var tape = require( 'tape' );
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var readFile = require( './../../read-file' ).sync;
var readFileList = require( './../lib/sync.js' );


// VARIABLES //

// Don't run tests in the browser...for now...
var opts = {
	'skip': IS_BROWSER // FIXME
};


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof readFileList, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an error if not provided a string array', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		true,
		void 0,
		[],
		[ 'beep', null ],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			readFileList( value );
		};
	}
});

tape( 'the function returns an error if not provided a string array (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		null,
		true,
		void 0,
		[],
		[ 'beep', null ],
		{},
		function noop() {}
	];
	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			readFileList( value, {} );
		};
	}
});

tape( 'the function reads the entire contents of each file in a file list', opts, function test( t ) {
	var expected;
	var actual;

	expected = [
		{
			'file': __filename,
			'data': readFile( __filename )
		},
		{
			'file': __filename,
			'data': readFile( __filename )
		}
	];
	actual = readFileList( [ __filename, __filename ] );

	t.deepEqual( expected, actual, 'returns file contents' );

	t.end();
});

tape( 'the function reads the contents of each file in a file list using provided options', opts, function test( t ) {
	var expected;
	var actual;

	// String options:
	expected = [
		{
			'file': __filename,
			'data': readFile( __filename, 'utf8' )
		}
	];
	actual = readFileList( [ __filename ], 'utf8' );

	t.deepEqual( expected, actual, 'returns file contents' );

	// Object options:
	expected = [
		{
			'file': __filename,
			'data': readFile( __filename, {
				'encoding': 'utf8'
			})
		}
	];
	actual = readFileList( [ __filename ], {
		'encoding': 'utf8'
	});

	t.deepEqual( expected, actual, 'returns file contents' );

	t.end();
});

tape( 'if the function encounters an error, the function returns the error', opts, function test( t ) {
	var out = readFileList( [ 'beepboopbapbop' ] );

	t.equal( out instanceof Error, true, 'returns an error' );

	t.end();
});

tape( 'if the function encounters an error, the function returns the error (options)', opts, function test( t ) {
	var opts;
	var out;

	out = readFileList( [ 'beepboopbapbop' ], 'utf8' );
	t.equal( out instanceof Error, true, 'returns an error' );

	opts = {
		'encoding': 'utf8'
	};
	out = readFileList( [ 'beepboopbapbop' ], opts );
	t.equal( out instanceof Error, true, 'returns an error' );

	t.end();
});
