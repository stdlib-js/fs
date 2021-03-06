<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

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

# Open

> Open a file.

<section class="usage">

## Usage

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var open = require( '@stdlib/fs/open' );
```

#### open( path\[, flags\[, mode]], clbk )

Asynchronously opens a file.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var closeSync = require( '@stdlib/fs/close' ).sync;

open( __filename, onOpen );

function onOpen( error, fd ) {
    if ( error ) {
        console.error( error.message );
    } else {
        closeSync( fd );
    }
}
```

The function has the same default parameter values as [`fs.open()`][node-fs].

#### open.sync( file\[, flags\[, mode]] )

Synchronously opens a `file`.

<!-- eslint-disable stdlib/no-redeclare -->

```javascript
var closeSync = require( '@stdlib/fs/close' ).sync;

var fd = open.sync( __filename );
if ( fd instanceof Error ) {
    console.error( fd.message );
} else {
    closeSync( fd );
}
```

The function has the same default parameters as [`fs.openSync()`][node-fs].

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The difference between this API and [`fs.openSync()`][node-fs] is that [`fs.openSync()`][node-fs] will throw if an `error` is encountered (e.g., if given a non-existent `path`) and this API will return an `error`. Hence, the following anti-pattern

    <!-- eslint-disable stdlib/no-redeclare -->

    ```javascript
    var fs = require( 'fs' );

    var fpath = '/path/to/file.js';
    var fd;

    // Check for existence to prevent an error being thrown...
    if ( fs.existsSync( fpath ) ) {
        fd = fs.readFileSync( fpath );
    }
    ```

    can be replaced by an approach which addresses existence via `error` handling.

    <!-- eslint-disable stdlib/no-redeclare -->

    ```javascript
    var open = require( '@stdlib/fs/open' );

    var fpath = '/path/to/file.js';

    // Explicitly handle the error...
    var fd = open.sync( fpath );
    if ( fd instanceof Error ) {
        // You choose what to do...
        console.error( fd.message );
    }
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable stdlib/no-redeclare -->

<!-- eslint no-undef: "error" -->

```javascript
var join = require( 'path' ).join;
var closeSync = require( '@stdlib/fs/close' ).sync;
var open = require( '@stdlib/fs/open' );

/* Sync */

var fd = open.sync( join( __dirname, 'package.json' ), 'r+' );
// returns <number>

if ( fd instanceof Error ) {
    console.error( fd.message );
} else {
    closeSync( fd );
}

fd = open.sync( 'beepboop' );
// returns <Error>

/* Async */

open( join( __dirname, 'package.json' ), onOpen );
open( 'beepboop', onOpen );

function onOpen( error, fd ) {
    if ( error ) {
        if ( error.code === 'ENOENT' ) {
            console.error( 'File does not exist.' );
        } else {
            console.error( error.message );
        }
    } else {
        closeSync( fd );
    }
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/fs/close`][@stdlib/fs/close]</span><span class="delimiter">: </span><span class="description">close a file descriptor.</span>
-   <span class="package-name">[`@stdlib/fs/exists`][@stdlib/fs/exists]</span><span class="delimiter">: </span><span class="description">test whether a path exists on the filesystem.</span>
-   <span class="package-name">[`@stdlib/fs/read-file`][@stdlib/fs/read-file]</span><span class="delimiter">: </span><span class="description">read the entire contents of a file.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[node-fs]: https://nodejs.org/api/fs.html

<!-- <related-links> -->

[@stdlib/fs/close]: https://github.com/stdlib-js/fs/tree/main/close

[@stdlib/fs/exists]: https://github.com/stdlib-js/fs/tree/main/exists

[@stdlib/fs/read-file]: https://github.com/stdlib-js/fs/tree/main/read-file

<!-- </related-links> -->

</section>

<!-- /.links -->
