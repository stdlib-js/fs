<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

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

# Append File

> Append data to a file.

<section class="usage">

## Usage

```javascript
var appendFile = require( '@stdlib/fs/append-file' );
```

#### appendFile( file, data\[, options], clbk )

Asynchronously appends `data` to a `file`.

```javascript
var join = require( 'path' ).join;

var fpath = join( __dirname, 'examples', 'fixtures', 'file.txt' );

appendFile( fpath, 'beep boop\n', onAppend );

function onAppend( error ) {
    if ( error ) {
        console.log( error instanceof Error );
        // => false
    }
}
```

The `data` argument may be either a `string` or a [`Buffer`][@stdlib/buffer/ctor].

```javascript
var join = require( 'path' ).join;
var string2buffer = require( '@stdlib/buffer/from-string' );

var fpath = join( __dirname, 'examples', 'fixtures', 'file.txt' );

appendFile( fpath, string2buffer( 'beep boop\n' ), onAppend );

function onAppend( error ) {
    if ( error ) {
        console.log( error instanceof Error );
        // => false
    }
}
```

The function accepts the same `options` and has the same defaults as [`fs.appendFile()`][node-fs].

#### appendFile.sync( file, data\[, options] )

Synchronously appends `data` to a `file`.

```javascript
var join = require( 'path' ).join;

var fpath = join( __dirname, 'examples', 'fixtures', 'file.txt' );

var err = appendFile.sync( fpath, 'beep boop\n' );
if ( err instanceof Error ) {
    throw err;
}
```

The function accepts the same `options` and has the same defaults as [`fs.appendFileSync()`][node-fs].

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The difference between this `appendFile.sync` and [`fs.appendFileSync()`][node-fs] is that [`fs.appendFileSync()`][node-fs] will throw if an `error` is encountered (e.g., if given a non-existent directory path) and this API will return an `error`. Hence, the following anti-pattern

    <!-- eslint-disable node/no-sync -->

    ```javascript
    var fs = require( 'fs' );

    // Check for directory path existence to prevent an error being thrown...
    if ( fs.existsSync( '/path/to' ) ) {
        fs.appendFileSync( '/path/to/file.txt', 'beep boop\n' );
    }
    ```

    can be replaced by an approach which addresses existence via `error` handling.

    <!-- eslint-disable node/no-sync -->

    ```javascript
    var appendFile = require( '@stdlib/fs/append-file' );

    // Explicitly handle the error...
    var err = appendFile.sync( '/path/to/file.txt', 'boop beep\n' );
    if ( err instanceof Error ) {
        // You choose what to do...
        throw err;
    }
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var join = require( 'path' ).join;
var appendFile = require( '@stdlib/fs/append-file' );

var fpath = join( __dirname, 'examples', 'fixtures', 'file.txt' );

// Synchronously append data to a file:

var error = appendFile.sync( fpath, 'beep boop\n', 'utf8' );
// Function successfully executes and returns null

console.log( error instanceof Error );
// => false

// Asynchronously append data to a file:

appendFile( fpath, 'beep boop\n', onAppend );

function onAppend( error ) {
    if ( error ) {
        console.error( 'Error: %s', error.message );
    }
    console.log( 'Success!!!' );
}
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: append-file [options] <filepath>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
  --enc, --encoding encoding   Encoding. Default: 'utf8'.
         --flag flag           Flag. Default: 'a'.
         --mode mode           Mode. Default: 0o666.
```

</section>

<!-- /.usage -->

<section class="notes">

### Notes

-   Relative output file paths are resolved relative to the current working directory.
-   Errors are written to `stderr`.
-   File contents should be provided over `stdin` as part of a [standard stream][standard-stream] pipeline.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ printf 'beep boop\n' | append-file ./examples/fixtures/file.txt
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[node-fs]: https://nodejs.org/api/fs.html

[@stdlib/buffer/ctor]: https://github.com/stdlib-js/buffer-ctor

[standard-stream]: https://en.wikipedia.org/wiki/Pipeline_%28Unix%29

</section>

<!-- /.links -->
