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

# Unlink

> Remove a directory entry.

<section class="usage">

## Usage

```javascript
var unlink = require( '@stdlib/fs/unlink' );
```

#### unlink( path, clbk )

Asynchronously removes a directory entry specified by `path`.

<!-- run-disable -->

```javascript
var join = require( 'path' ).join;
var fpath = join( __dirname, 'examples', 'fixtures', 'file.txt' );

unlink( fpath, done );

function done( error ) {
    if ( error ) {
        throw error;
    }
}
```

#### unlink.sync( path )

Synchronously removes a directory entry specified by `path`.

<!-- run-disable -->

```javascript
var join = require( 'path' ).join;
var fpath = join( __dirname, 'examples', 'fixtures', 'file.txt' );

var err = unlink.sync( fpath );
if ( err instanceof Error ) {
    throw err;
}
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If a provided `path` is a symbolic link, the function removes the symbolic link named by the `path` and does not affect any file or directory named by the contents of the symbolic link. Otherwise, the function removes the link named by the provided `path` and decrements the link count of the file referenced by the link. 

    When a file's link count becomes `0` and no process has the file open, the space occupied by the file is freed and the file is no longer accessible. If one or more processes have the file open when the last link is removed, the link is removed before the function returns; however, the removal of file contents is postponed until all references to the file are closed.

    If the `path` refers to a socket, FIFO, or device, processes which have the object open may continue to use it.

-   The path argument should **not** be a directory. To remove a directory, use [`rmdir()`][@stdlib/fs/rmdir].

-   The difference between `unlink.sync` and [`fs.unlinkSync()`][node-fs] is that [`fs.unlinkSync()`][node-fs] will throw if an `error` is encountered (e.g., if given a non-existent path) and this API will return an `error`. Hence, the following anti-pattern

    <!-- run-disable -->

    ```javascript
    var fs = require( 'fs' );

    // Check for path existence to prevent an error being thrown...
    if ( fs.existsSync( '/path/to' ) ) {
        fs.unlinkSync( '/path/to/file.txt' );
    }
    ```

    can be replaced by an approach which addresses existence via `error` handling.

    <!-- run-disable -->

    ```javascript
    var unlink = require( '@stdlib/fs/unlink' );

    // Explicitly handle the error...
    var err = unlink.sync( '/path/to/file.txt' );
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
var readFile = require( '@stdlib/fs/read-file' ).sync;
var writeFile = require( '@stdlib/fs/write-file' ).sync;
var exists = require( '@stdlib/fs/exists' ).sync;
var unlink = require( '@stdlib/fs/unlink' ).sync;

var src = join( __dirname, 'examples', 'fixtures', 'file.txt' );
var dest = join( __dirname, 'examples', 'tmp.txt' );

// Create a temporary file:
writeFile( dest, readFile( src ) );

// Confirm that the temporary file exists:
console.log( exists( dest ) );
// => true

// Delete the temporary file:
unlink( dest );

// Confirm that the temporary file no longer exists:
console.log( exists( dest ) );
// => false
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="usage">

### Usage

```text
Usage: unlink [options] <path>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```

</section>

<!-- /.usage -->

<section class="notes">

### Notes

-   Relative paths are resolved relative to the current working directory.
-   Errors are written to `stderr`.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

<!-- run-disable -->

```bash
$ unlink ./examples/fixtures/file.txt
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

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[node-fs]: https://nodejs.org/api/fs.html

[@stdlib/fs/rmdir]: https://github.com/stdlib-js/fs/tree/main/rmdir

<!-- <related-links> -->

[@stdlib/fs/exists]: https://github.com/stdlib-js/fs/tree/main/exists

<!-- </related-links> -->

</section>

<!-- /.links -->
