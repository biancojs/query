# bianco.query

[![Build Status][travis-image]][travis-url]
[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]

Modern DOM query selectors helpers written in es2015

## Usage

```js
import $ from 'bianco.query'

const footer = document.querySelector('.main-footer')
const header = document.querySelector('.main-header')

// convert DOM nodes to arrays
$(footer)
  .concat($(header))
  .forEach(el => el.classList.add('fade-in'))

// handle DOM queries
$('h1', 'main').forEach(h1 => h1.classList.add('main-title'))
```

[travis-image]: https://img.shields.io/travis/biancojs/query.svg?style=flat-square

[travis-url]: https://travis-ci.org/biancojs/query

[license-image]: http://img.shields.io/badge/license-MIT-000000.svg?style=flat-square

[license-url]: LICENSE.txt

[npm-version-image]: http://img.shields.io/npm/v/bianco.query.svg?style=flat-square

[npm-downloads-image]: http://img.shields.io/npm/dm/bianco.query.svg?style=flat-square

[npm-url]: https://npmjs.org/package/bianco.query

## API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

*   [$](#)
    *   [Parameters](#parameters)

### $

Simple helper to find DOM nodes returning them as array like loopable object

#### Parameters

*   `selector` **([string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | DOMNodeList)** either the query or the DOM nodes to arraify
*   `scope` **[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)** context defining where the query will search for the DOM nodes

Returns **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** DOM nodes found as array
