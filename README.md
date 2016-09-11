# next-events
Modern DOM events helpers written in es2015

This script will not be transpiled and it is only thought to be part of your build chain.

## Usage

```js
import $ from 'next-query'

$('h1').forEach((h1) => console.log(h1.innerHTML))
```

## API

- `$(selector|NodeList, context)` returns always an array of the elements found
