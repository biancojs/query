# bianco-query

[![Build Status][travis-image]][travis-url]

[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]

Modern DOM query selectors helpers written in es2015

## Usage

```js
import $ from 'bianco-query'

$('h1').forEach((h1) => console.log(h1.innerHTML))
```

## API

- `$(selector|NodeList, context)` returns always an array of the elements found


[travis-image]:https://img.shields.io/travis/GianlucaGuarini/bianco-query.svg?style=flat-square
[travis-url]:https://travis-ci.org/GianlucaGuarini/bianco-query

[license-image]:http://img.shields.io/badge/license-MIT-000000.svg?style=flat-square
[license-url]:LICENSE.txt

[npm-version-image]:http://img.shields.io/npm/v/bianco-query.svg?style=flat-square
[npm-downloads-image]:http://img.shields.io/npm/dm/bianco-query.svg?style=flat-square
[npm-url]:https://npmjs.org/package/bianco-query
