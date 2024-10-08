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

# Write File

> Write data to a file.

<section class="usage">

## Usage

```javascript
var writeFile = require( '@stdlib/fs/write-file' );
```

#### writeFile( file, data\[, options], clbk )

Asynchronously writes `data` to a `file`.

```javascript
var join = require( 'path' ).join;

var fpath = join( __dirname, 'examples', 'fixtures', 'file.txt' );

writeFile( fpath, 'beep boop\n', onWrite );

function onWrite( error ) {
    if ( error ) {
        throw error;
    }
}
```

The `data` argument may be either a `string` or a [`Buffer`][@stdlib/buffer/ctor].

```javascript
var join = require( 'path' ).join;
var string2buffer = require( '@stdlib/buffer/from-string' );

var fpath = join( __dirname, 'examples', 'fixtures', 'file.txt' );

writeFile( fpath, string2buffer( 'beep boop\n' ), onWrite );

function onWrite( error ) {
    if ( error ) {
        throw error;
    }
}
```

The function accepts the same `options` and has the same defaults as [`fs.writeFile()`][node-fs].

#### writeFile.sync( file, data\[, options] )

Synchronously writes `data` to a `file`.

```javascript
var join = require( 'path' ).join;

var fpath = join( __dirname, 'examples', 'fixtures', 'file.txt' );

var err = writeFile.sync( fpath, 'beep boop\n' );
if ( err instanceof Error ) {
    throw err;
}
```

The function accepts the same `options` and has the same defaults as [`fs.writeFileSync()`][node-fs].

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The difference between this `writeFile.sync` and [`fs.writeFileSync()`][node-fs] is that [`fs.writeFileSync()`][node-fs] will throw if an `error` is encountered (e.g., if given a non-existent directory path) and this API will return an `error`. Hence, the following anti-pattern

    <!-- run-disable -->

    ```javascript
    var fs = require( 'fs' );

    // Check for directory path existence to prevent an error being thrown...
    if ( fs.existsSync( '/path/to' ) ) {
        fs.writeFileSync( '/path/to/file.txt', 'beep boop\n' );
    }
    ```

    can be replaced by an approach which addresses existence via `error` handling.

    <!-- run-disable -->

    ```javascript
    var writeFile = require( '@stdlib/fs/write-file' );

    // Explicitly handle the error...
    var err = writeFile.sync( '/path/to/file.txt', 'beep boop\n' );
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
var writeFile = require( '@stdlib/fs/write-file' );

var fpath = join( __dirname, 'examples', 'fixtures', 'file.txt' );

// Synchronously write data to a file:
var err = writeFile.sync( fpath, 'beep boop\n', 'utf8' );
// returns null

console.log( err instanceof Error );
// => false

// Asynchronously write data to a file:
writeFile( fpath, 'beep boop\n', onWrite );

function onWrite( error ) {
    if ( error ) {
        console.error( 'Error: %s', error.message );
    }
    console.log( 'Success!' );
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
Usage: write-file [options] <filepath>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
  --enc, --encoding encoding   Encoding. Default: 'utf8'.
         --flag flag           Flag. Default: 'r'.
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
$ printf 'beep boop\n' | write-file ./examples/fixtures/file.txt
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/fs/exists`][@stdlib/fs/exists]</span><span class="delimiter">: </span><span class="description">test whether a path exists on the filesystem.</span>
-   <span class="package-name">[`@stdlib/fs/read-file`][@stdlib/fs/read-file]</span><span class="delimiter">: </span><span class="description">read the entire contents of a file.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[node-fs]: https://nodejs.org/api/fs.html

[@stdlib/buffer/ctor]: https://github.com/stdlib-js/buffer-ctor

[standard-stream]: https://en.wikipedia.org/wiki/Pipeline_%28Unix%29

<!-- <related-links> -->

[@stdlib/fs/exists]: https://github.com/stdlib-js/fs/tree/main/exists

[@stdlib/fs/read-file]: https://github.com/stdlib-js/fs/tree/main/read-file

<!-- </related-links> -->

</section>

<!-- /.links -->
