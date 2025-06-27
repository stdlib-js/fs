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
var IS_BROWSER = require( '@stdlib/assert/is-browser' );
var instanceOf = require( '@stdlib/assert/instance-of' );
var parseJSON = require( '@stdlib/utils/parse-json' );
var trim = require( '@stdlib/string/trim' );
var naryFunction = require( '@stdlib/utils/nary-function' );
var readNDJSON = require( './../lib/sync.js' );


// VARIABLES //

// Don't run tests in the browser...for now...
var opts = {
	'skip': IS_BROWSER // FIXME
};


// FIXTURES //

var goodJSON = join( __dirname, 'fixtures', 'good.ndjson' );
var badJSON = join( __dirname, 'fixtures', 'bad.ndjson.txt' );
var bomJSON = join( __dirname, 'fixtures', 'bom.ndjson.txt' );


// FUNCTIONS //

/**
* Loads a newline-delimited JSON file.
*
* @param {string} file - file path
* @returns {Array<Object>} results
*/
function loadFile( file ) {
	return trim( readFile( file, 'utf8' ) ).split( '\n' ).map( naryFunction( parseJSON, 1 ) );
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof readNDJSON, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an options argument which is neither a string nor object', function test( t ) {
	var values;
	var i;

	values = [
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			readNDJSON( goodJSON, value );
		};
	}
});

tape( 'if the function encounters an error when attempting to read a file, the function returns the error', opts, function test( t ) {
	var out = readNDJSON( 'beepboopbapbop' );
	t.strictEqual( instanceOf( out, Error ), true, 'returns expected value' );
	t.end();
});

tape( 'if the function encounters an error when attempting to read a file, the function returns the error (options)', opts, function test( t ) {
	var out;

	out = readNDJSON( 'beepboopbapbop', 'utf8' );
	t.strictEqual( instanceOf( out, Error ), true, 'returns expected value' );

	out = readNDJSON( 'beepboopbapbop', {
		'encoding': 'utf8'
	});
	t.strictEqual( instanceOf( out, Error ), true, 'returns expected value' );

	t.end();
});

tape( 'if the function encounters an error when attempting to parse file contents as newline-delimited JSON, the function returns the error', opts, function test( t ) {
	var out = readNDJSON( badJSON );
	t.strictEqual( instanceOf( out, Error ), true, 'returns expected value' );
	t.end();
});

tape( 'if the function encounters an error when attempting to parse file contents as newline-delimited JSON, the function returns the error (options)', opts, function test( t ) {
	var out;

	out = readNDJSON( badJSON, 'utf8' );
	t.strictEqual( instanceOf( out, Error ), true, 'returns expected value' );

	out = readNDJSON( badJSON, {
		'encoding': 'utf8'
	});
	t.strictEqual( instanceOf( out, Error ), true, 'returns expected value' );

	t.end();
});

tape( 'the function reads a file as newline-delimited JSON', opts, function test( t ) {
	var expected;
	var actual;

	expected = loadFile( goodJSON );
	actual = readNDJSON( goodJSON );

	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function reads a file as newline-delimited JSON using provided options', opts, function test( t ) {
	var expected;
	var actual;

	// String options:
	expected = loadFile( goodJSON );
	actual = readNDJSON( goodJSON, 'utf8' );

	t.deepEqual( expected, actual, 'returns expected value' );

	// Object options:
	actual = readNDJSON( goodJSON, {
		'encoding': 'utf8'
	});

	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports reading a UTF-8 encoded file having a byte order mark (BOM) as newline-delimited JSON', opts, function test( t ) {
	var expected;
	var actual;

	expected = loadFile( goodJSON );
	actual = readNDJSON( bomJSON, {
		'encoding': 'utf8'
	});

	t.deepEqual( actual, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports providing a JSON reviver', opts, function test( t ) {
	var expected;
	var actual;

	expected = [
		{
			'beep': 'boop'
		},
		{
			'bop': [ 1, 2, 3 ]
		},
		{
			'bool': true
		},
		{
			'bap': 'woot'
		}
	];
	actual = readNDJSON( goodJSON, {
		'reviver': reviver
	});

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function reviver( key, value ) {
		if ( key === 'bap' ) {
			return 'woot';
		}
		return value;
	}
});
