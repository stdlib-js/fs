/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import close = require( './../../close' );
import exists = require( './../../exists' );
import open = require( './../../open' );
import readDir = require( './../../read-dir' );
import readFile = require( './../../read-file' );
import readFileList = require( './../../read-file-list' );
import readJSON = require( './../../read-json' );
import readWASM = require( './../../read-wasm' );
import rename = require( './../../rename' );
import resolveParentPath = require( './../../resolve-parent-path' );
import resolveParentPathBy = require( './../../resolve-parent-path-by' );
import unlink = require( './../../unlink' );
import writeFile = require( './../../write-file' );

/**
* Interface describing the `fs` namespace.
*/
interface Namespace {
	/**
	* Asynchronously closes a file descriptor.
	*
	* @param fd - file descriptor
	* @param clbk - callback to invoke after closing a file descriptor
	* @throws first argument must be a valid file descriptor (nonnegative integer)
	*
	* @example
	* var openSync = require( './../../open' ).sync;
	*
	* function done( error ) {
	*     if ( error ) {
	*         throw error;
	*     }
	* }
	*
	* var fd = openSync( __filename, 'r+' );
	* if ( fd instanceof Error ) {
	*     throw fd;
	* }
	*
	* ns.close( fd, done );
	*
	* @example
	* var openSync = require( './../../open' ).sync;
	*
	* var fd = openSync( __filename, 'r+' );
	*
	* if ( fd instanceof Error ) {
	*     throw fd;
	* }
	*
	* var err = ns.close.sync( fd );
	* if ( err instanceof Error ) {
	*     throw err;
	* }
	*/
	close: typeof close;

	/**
	* Tests whether a path exists on the filesystem.
	*
	* @param path - path to test
	* @param clbk - callback to invoke after testing path existence
	*
	* @example
	* ns.exists( __dirname, done );
	*
	* function done( error, bool ) {
	*     if ( error ) {
	*         console.error( error );
	*     }
	*     if ( bool ) {
	*         console.log( '...path ns.exists.' );
	*     } else {
	*         console.log( '...path does not exist.' );
	*     }
	* }
	*
	* @example
	* var bool = ns.exists.sync( __dirname );
	* // returns <boolean>
	*/
	exists: typeof exists;

	/**
	* Asynchronously opens a file.
	*
	* @param path - file path
	* @param flags - file system flags (default: 'r')
	* @param mode - file mode (default: 0o666)
	* @param clbk - callback to invoke after opening a file
	*
	* @example
	* var closeSync = require( './../../close' ).sync;
	*
	* function onOpen( error, fd ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     closeSync( fd );
	* }
	* ns.open( __filename, onOpen );
	*
	* @example
	* var closeSync = require( './../../close' ).sync;
	*
	* var fd = ns.open.sync( __filename );
	* if ( fd instanceof Error ) {
	*     throw fd;
	* }
	* closeSync( fd );
	*/
	open: typeof open;

	/**
	* Asynchronously reads the contents of a directory.
	*
	* @param path - directory path
	* @param clbk - callback to invoke after reading directory contents
	*
	* @example
	* function onRead( error, data ) {
	*     if ( error ) {
	*         console.error( error );
	*     } else {
	*         console.log( data );
	*     }
	* }
	* ns.readDir( __dirname, onRead );
	*
	* @example
	* var out = ns.readDir.sync( __dirname );
	* if ( out instanceof Error ) {
	*     throw out;
	* }
	* console.log( out );
	*/
	readDir: typeof readDir;

	/**
	* Asynchronously reads the entire contents of a file.
	*
	* @param file - file path or file descriptor
	* @param options - options
	* @param options.encoding - file encoding
	* @param options.flag - file status flag
	* @param clbk - callback to invoke after reading file contents
	*
	* @example
	* function onFile( error, data ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( data );
	* }
	* ns.readFile( __filename, onFile );
	*
	* @example
	* var out = ns.readFile.sync( __filename );
	* if ( out instanceof Error ) {
	*     throw out;
	* }
	* console.log( out );
	*/
	readFile: typeof readFile;

	/**
	* Asynchronously reads the entire contents of each file in a file list.
	*
	* @param list - list of file paths
	* @param options - options
	* @param options.encoding - file encoding
	* @param options.flag - file status flag
	* @param clbk - callback to invoke after reading file contents
	*
	* @example
	* var list = [ __filename ];
	*
	* ns.readFileList( list, onFiles );
	*
	* function onFiles( error, files ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.dir( files );
	* }
	*
	* @example
	* var list = [ __filename ];
	* var files = ns.readFileList.sync( list );
	*
	* if ( files instanceof Error ) {
	*     throw files;
	* }
	* console.dir( files );
	*/
	readFileList: typeof readFileList;

	/**
	* Asynchronously reads a file as JSON.
	*
	* @param file - file path or file descriptor
	* @param options - options
	* @param options.encoding - file encoding
	* @param options.flag - file status flag
	* @param options.reviver - JSON reviver
	* @param clbk - callback
	*
	* @example
	* var resolve = require( 'path' ).resolve;
	*
	* ns.readJSON( resolve( __dirname, '..', 'package.json' ), 'utf-8', onJSON );
	*
	* function onJSON( error, data ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.dir( data );
	* }
	*
	* @example
	* var resolve = require( 'path' ).resolve;
	* var instanceOf = require( '@stdlib/assert/instance-of' );
	*
	* var out = ns.readJSON.sync( resolve( __dirname, '..', 'package.json' ) );
	* if ( instanceOf( out, Error ) ) {
	*     throw out;
	* }
	* console.dir( out );
	*/
	readJSON: typeof readJSON;

	/**
	* Reads the entire contents of a WebAssembly file.
	*
	* @param file - file path or file descriptor
	* @param options - options
	* @param options.flag - file status flag
	* @param clbk - callback to invoke after reading a file
	*
	* @example
	* var join = require( 'path' ).join;
	* var instanceOf = require( '@stdlib/assert/instance-of' );
	*
	* var fpath = join( __dirname, 'foo.wasm' );
	* ns.readWASM( fpath, onRead );
	*
	* function onRead( error, buf ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( buf );
	* }
	*
	* @example
	* var join = require( 'path' ).join;
	* var instanceOf = require( '@stdlib/assert/instance-of' );
	*
	* var fpath = join( __dirname, 'foo.wasm' );
	* var out = ns.readWASM.sync( fpath );
	* if ( instanceOf( out, Error ) ) {
	*     throw out;
	* }
	* console.log( out );
	*/
	readWASM: typeof readWASM;

	/**
	* Asynchronously renames a file.
	*
	* @param oldPath - old path
	* @param newPath - new path
	* @param clbk - callback to invoke after renaming a path
	*
	* @example
	* function done( error ) {
	*     if ( error ) {
	*         throw error;
	*     }
	* }
	*
	* ns.rename( './beep/boop.txt', './beep/foo.txt', done );
	*
	* @example
	* var err = ns.rename.sync( './beep/boop.txt', './beep/foo.txt' );
	* if ( err instanceof Error ) {
	*     throw err;
	* }
	*/
	rename: typeof rename;

	/**
	* Asynchronously resolves a path by walking parent directories.
	*
	* @param path - path to resolve
	* @param options - function options
	* @param options.dir - base directory
	* @param clbk - callback to invoke after resolving a path
	* @throws must provide valid options
	*
	* @example
	* ns.resolveParentPath( 'package.json', onPath );
	*
	* function onPath( error, path ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( path );
	* }
	*
	* @example
	* var path = ns.resolveParentPath.sync( 'package.json' );
	*/
	resolveParentPath: typeof resolveParentPath;

	/**
	* Asynchronously resolves a path according to a predicate function by walking parent directories.
	*
	* @param path - path to resolve
	* @param options - function options
	* @param options.dir - base directory
	* @param predicate - predicate function
	* @param clbk - callback to invoke after resolving a path
	* @throws must provide valid options
	*
	* @example
	* ns.resolveParentPathBy( 'package.json', predicate, onPath );
	*
	* function predicate( path, next ) {
	*     next( null, true );
	* }
	*
	* function onPath( error, path ) {
	*     if ( error ) {
	*         throw error;
	*     }
	*     console.log( path );
	* }
	*
	* @example
	* function predicate() {
	*     return true;
	* }
	*
	* var path = ns.resolveParentPathBy.sync( 'package.json', predicate );
	* // e.g., returns '...'
	*/
	resolveParentPathBy: typeof resolveParentPathBy;

	/**
	* Asynchronously removes a directory entry.
	*
	* @param path - entry path
	* @param clbk - callback to invoke after removing a directory entry
	*
	* @example
	* function done( error ) {
	*     if ( error ) {
	*         throw error;
	*     }
	* }
	* ns.unlink( './beep/boop.txt', done );
	*
	* @example
	* var err = ns.unlink.sync( './beep/boop.txt' );
	* if ( err instanceof Error ) {
	*     throw err;
	* }
	*/
	unlink: typeof unlink;

	/**
	* Asynchronously writes data to a file.
	*
	* @param file - file path or file descriptor
	* @param data - data to write
	* @param options - options; if a string, the value is the encoding
	* @param clbk - callback to invoke after writing data to a file
	*
	* @example
	* function onWrite( error ) {
	*     if ( error ) {
	*         throw error;
	*     }
	* }
	*
	* ns.writeFile( './beep/boop.txt', 'beep boop\n', onWrite );
	*/
	writeFile: typeof writeFile;
}

/**
* Filesystem APIs.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
