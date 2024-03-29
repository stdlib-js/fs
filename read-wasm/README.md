<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Read WebAssembly

> Read a file as [WebAssembly][webassembly].

<section class="usage">

## Usage

```javascript
var readWASM = require( '@stdlib/fs/read-wasm' );
```

<a name="read-wasm"></a>

#### readWASM( file\[, options], clbk )

Asynchronously reads a file as [WebAssembly][webassembly].

```javascript
var join = require( 'path' ).join;

var fpath = join( __dirname, 'examples', 'fixtures', 'file.wasm' );
readWASM( fpath, onRead );

function onRead( error, buf ) {
    if ( error ) {
        throw error;
    }
    console.log( buf );
}
```

The function accepts the following `options`:

-   **flag**: file status flag.

#### readWASM.sync( file\[, options] )

Synchronously reads a file as [WebAssembly][webassembly].

```javascript
var join = require( 'path' ).join;
var instanceOf = require( '@stdlib/assert/instance-of' );

var fpath = join( __dirname, 'examples', 'fixtures', 'file.wasm' );
var out = readWASM.sync( fpath );
if ( instanceOf( out, Error ) ) {
    throw out;
}
console.log( out );
```

The function accepts the same `options` as [`readWASM()`](#read-wasm) above.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In contrast to [`readFile()`][@stdlib/fs/read-file], neither function accepts an `encoding` option. As [WebAssembly][webassembly] is a binary file format, if provided an `encoding` option, the function **overrides** the option, setting the option value to `null`.
-   Both functions return [WebAssembly][webassembly] file content as a [`Uint8Array`][@stdlib/array/uint8].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable no-undef -->

<!-- eslint no-undef: "error" -->

```javascript
var join = require( 'path' ).join;
var hasWebAssemblySupport = require( '@stdlib/assert/has-wasm-support' );
var readWASM = require( '@stdlib/fs/read-wasm' );

var fpath = join( __dirname, 'examples', 'fixtures', 'file.wasm' );
readWASM( fpath, onRead );

function onRead( error, wasm ) {
    var bool;
    if ( error ) {
        throw error;
    }
    bool = hasWebAssemblySupport();

    // If WebAssembly is supported, create a WebAssembly module instance...
    if ( bool ) {
        wasm = new WebAssembly.Module( wasm );
        wasm = new WebAssembly.Instance( wasm, {} );
        console.log( wasm.exports.stdlib_hypot( 5.0, 12.0 ) );
    } else {
        console.log( wasm );
    }
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/fs/read-file`][@stdlib/fs/read-file]</span><span class="delimiter">: </span><span class="description">read the entire contents of a file.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[webassembly]: https://webassembly.org/

[@stdlib/fs/read-file]: https://github.com/stdlib-js/fs/tree/main/read-file

[@stdlib/array/uint8]: https://github.com/stdlib-js/array-uint8

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
