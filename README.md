[![npm version][npm-image]][npm-url]
[![downloads][downloads-image]][npm-url]
[![build status][build-image]][build-url]
[![coverage status][coverage-image]][coverage-url]
[![Language grade: JavaScript][lgtm-image]][lgtm-url]


# awesome-code-frame

## What is this?

This is a fork of [@babel/code-frame](https://www.npmjs.com/package/@babel/code-frame) with the latest dependencies (e.g of [chalk](https://www.npmjs.com/package/chalk)) and exported as a [pure ESM][pure-esm] package.


# Usage

The package exports a function `codeFrameColumns()` which works just like `@babel/code-frame` although all dependent types are exported too.

```ts
codeFrameColumns( rawLines: string, loc: NodeLocation, opts?: Options ): string;
```

where `NodeLocation` is defined as:

```ts
interface NodeLocation {
    start: Location;
    end?: Location;
}
```

`Location` as:

```ts
interface Location {
    column: number;
    line: number;
};
```

and `Options` as:

```ts
export interface Options {
  /**
   * Syntax highlight the code as JavaScript for terminals. default: false
   * */
  highlightCode?: boolean;
  /**
   * The number of lines to show above the error. default: 2
   * */
  linesAbove?: number;
  /**
   * The number of lines to show below the error. default: 3
   * */
  linesBelow?: number;
  /**
   * Forcibly syntax highlight the code as JavaScript (for non-terminals);
   * overrides highlightCode.
   * default: false
   */
  forceColor?: boolean;
  /**
   * Pass in a string to be displayed inline (if possible) next to the
   * highlighted location in the code. If it can't be positioned inline,
   * it will be placed above the code frame.
   * default: nothing
   */
  message?: string;
}
```



[npm-image]: https://img.shields.io/npm/v/awesome-code-frame.svg
[npm-url]: https://npmjs.org/package/awesome-code-frame
[downloads-image]: https://img.shields.io/npm/dm/awesome-code-frame.svg
[build-image]: https://img.shields.io/github/workflow/status/grantila/awesome-code-frame/Master.svg
[build-url]: https://github.com/grantila/awesome-code-frame/actions?query=workflow%3AMaster
[coverage-image]: https://coveralls.io/repos/github/grantila/awesome-code-frame/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/grantila/awesome-code-frame?branch=master
[lgtm-image]: https://img.shields.io/lgtm/grade/javascript/g/grantila/awesome-code-frame.svg?logo=lgtm&logoWidth=18
[lgtm-url]: https://lgtm.com/projects/g/grantila/awesome-code-frame/context:javascript
[pure-esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c