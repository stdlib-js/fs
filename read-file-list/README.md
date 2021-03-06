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

# Read File List

> Read the entire contents of each file in a file list.

<section class="usage">

## Usage

```javascript
var readFileList = require( '@stdlib/fs/read-file-list' );
```

#### readFileList( filepaths\[, options], clbk )

Asynchronously reads the entire contents of each file in a file list.

```javascript
readFileList( [ __filename ], onFiles );

function onFiles( error, files ) {
    if ( error ) {
        throw error;
    }
    console.dir( files );
    // => [{...}]
}
```

Each file is represented by an `object` with the following fields:

-   **file**: file path.
-   **data**: file contents as either a [`Buffer`][node-buffer] or `string`.

The function accepts the same options as [`readFile()`][@stdlib/fs/read-file].

#### readFileList.sync( filepaths\[, options] )

Synchronously reads the entire contents of each file in a file list.

```javascript
var out = readFileList.sync( [ __filename ] );
if ( out instanceof Error ) {
    throw out;
}
console.dir( out );
// => [{...}]
```

The function accepts the same options as [`readFile.sync()`][@stdlib/fs/read-file].

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var readFileList = require( '@stdlib/fs/read-file-list' );

/* Sync */

var files = readFileList.sync( [ __filename ], 'utf8' );
// returns <ObjectArray>

console.log( files instanceof Error );
// => false

files = readFileList.sync( [ 'beepboop' ], {
    'encoding': 'utf8'
});
// returns <Error>

console.log( files instanceof Error );
// => true

/* Async */

readFileList( [ __filename ], onFiles );
readFileList( [ 'beepboop' ], onFiles );

function onFiles( error, files ) {
    if ( error ) {
        if ( error.code === 'ENOENT' ) {
            console.error( 'A file does not exist.' );
        } else {
            throw error;
        }
    } else {
        console.dir( files );
    }
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
Usage: read-file-list [options] <filepath1> <filepath2> ...

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
  --enc, --encoding encoding   Encoding.
         --flag flag           Flag. Default: 'r'.
```

</section>

<!-- /.usage -->

<section class="notes">

### Notes

-   Relative file paths are resolved relative to the current working directory.
-   Errors are written to `stderr`.
-   File contents are written to `stdout` as newline-delimited JSON ([NDJSON][ndjson]).

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ read-file-list ./README.md ./package.json
{"file":"...","data":"..."}
{"file":"...","data":"..."}
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

[@stdlib/fs/read-file]: https://github.com/stdlib-js/fs/tree/main/read-file

[node-buffer]: https://nodejs.org/api/buffer.html

[ndjson]: http://ndjson.org/

</section>

<!-- /.links -->
