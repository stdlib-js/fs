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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Filesystem

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Filesystem APIs.



<section class="usage">

## Usage

```javascript
import fs from 'https://cdn.jsdelivr.net/gh/stdlib-js/fs@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { close, exists, open, readDir, readFile, readFileList, readJSON, readWASM, rename, resolveParentPath, resolveParentPathBy, unlink, writeFile } from 'https://cdn.jsdelivr.net/gh/stdlib-js/fs@esm/index.mjs';
```

#### fs

Namespace for filesystem APIs.

```javascript
var f = fs;
// returns {...}
```

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`close( fd, clbk )`][@stdlib/fs/close]</span><span class="delimiter">: </span><span class="description">close a file descriptor.</span>
-   <span class="signature">[`exists( path, clbk )`][@stdlib/fs/exists]</span><span class="delimiter">: </span><span class="description">test whether a path exists on the filesystem.</span>
-   <span class="signature">[`open( path[, flags[, mode]], clbk )`][@stdlib/fs/open]</span><span class="delimiter">: </span><span class="description">open a file.</span>
-   <span class="signature">[`readDir( path, clbk )`][@stdlib/fs/read-dir]</span><span class="delimiter">: </span><span class="description">read the contents of a directory.</span>
-   <span class="signature">[`readFileList( filepaths[, options], clbk )`][@stdlib/fs/read-file-list]</span><span class="delimiter">: </span><span class="description">read the entire contents of each file in a file list.</span>
-   <span class="signature">[`readFile( file[, options], clbk )`][@stdlib/fs/read-file]</span><span class="delimiter">: </span><span class="description">read the entire contents of a file.</span>
-   <span class="signature">[`readJSON( file[, options], clbk )`][@stdlib/fs/read-json]</span><span class="delimiter">: </span><span class="description">read a file as JSON.</span>
-   <span class="signature">[`readWASM( file[, options], clbk )`][@stdlib/fs/read-wasm]</span><span class="delimiter">: </span><span class="description">read a file as WebAssembly.</span>
-   <span class="signature">[`rename( oldPath, newPath, clbk )`][@stdlib/fs/rename]</span><span class="delimiter">: </span><span class="description">rename a file.</span>
-   <span class="signature">[`resolveParentPathBy( path[, options], predicate, clbk )`][@stdlib/fs/resolve-parent-path-by]</span><span class="delimiter">: </span><span class="description">resolve a path according to a predicate function by walking parent directories.</span>
-   <span class="signature">[`resolveParentPath( path[, options], clbk )`][@stdlib/fs/resolve-parent-path]</span><span class="delimiter">: </span><span class="description">resolve a path by walking parent directories.</span>
-   <span class="signature">[`unlink( path, clbk )`][@stdlib/fs/unlink]</span><span class="delimiter">: </span><span class="description">remove a directory entry.</span>
-   <span class="signature">[`writeFile( file, data[, options], clbk )`][@stdlib/fs/write-file]</span><span class="delimiter">: </span><span class="description">write data to a file.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils/keys@esm/index.mjs';
import fs from 'https://cdn.jsdelivr.net/gh/stdlib-js/fs@esm/index.mjs';

console.log( objectKeys( fs ) );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/fs.svg
[npm-url]: https://npmjs.org/package/@stdlib/fs

[test-image]: https://github.com/stdlib-js/fs/actions/workflows/test.yml/badge.svg?branch=v0.3.3
[test-url]: https://github.com/stdlib-js/fs/actions/workflows/test.yml?query=branch:v0.3.3

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/fs/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/fs?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/fs.svg
[dependencies-url]: https://david-dm.org/stdlib-js/fs/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/fs/tree/deno
[deno-readme]: https://github.com/stdlib-js/fs/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/fs/tree/umd
[umd-readme]: https://github.com/stdlib-js/fs/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/fs/tree/esm
[esm-readme]: https://github.com/stdlib-js/fs/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/fs/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/fs/main/LICENSE

<!-- <toc-links> -->

[@stdlib/fs/close]: https://github.com/stdlib-js/fs/tree/main/close

[@stdlib/fs/exists]: https://github.com/stdlib-js/fs/tree/main/exists

[@stdlib/fs/open]: https://github.com/stdlib-js/fs/tree/main/open

[@stdlib/fs/read-dir]: https://github.com/stdlib-js/fs/tree/main/read-dir

[@stdlib/fs/read-file-list]: https://github.com/stdlib-js/fs/tree/main/read-file-list

[@stdlib/fs/read-file]: https://github.com/stdlib-js/fs/tree/main/read-file

[@stdlib/fs/read-json]: https://github.com/stdlib-js/fs/tree/main/read-json

[@stdlib/fs/read-wasm]: https://github.com/stdlib-js/fs/tree/main/read-wasm

[@stdlib/fs/rename]: https://github.com/stdlib-js/fs/tree/main/rename

[@stdlib/fs/resolve-parent-path-by]: https://github.com/stdlib-js/fs/tree/main/resolve-parent-path-by

[@stdlib/fs/resolve-parent-path]: https://github.com/stdlib-js/fs/tree/main/resolve-parent-path

[@stdlib/fs/unlink]: https://github.com/stdlib-js/fs/tree/main/unlink

[@stdlib/fs/write-file]: https://github.com/stdlib-js/fs/tree/main/write-file

<!-- </toc-links> -->

</section>

<!-- /.links -->
