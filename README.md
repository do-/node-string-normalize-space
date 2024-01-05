![workflow](https://github.com/do-/node-string-normalize-space/actions/workflows/main.yml/badge.svg)
![Jest coverage](./badges/coverage-jest%20coverage.svg)

`string-normalize-space` is a node.js module implementing one single function, `normalizeSpace`, following the [definition](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-normalize-space) from XPath 1.0.

So it's basically like [String.prototype.trim()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim), but works also inside the string.

# Installation

```
npm install string-normalize-space
```

# Usage

```js
const {normalizeSpace} = require ('string-normalize-space')

const ab = normalizeSpace (' A\r\n\t B ') // will be 'A B'
```

# Notes

Unlike numerous similar modules, this one doesn't rely on any regular expressions.

As mentioned before, the XPath 1.0 specification is followed, so only [4 characters](https://www.w3.org/TR/REC-xml/#NT-S) are considered "space". No effort is made to support extended Unicode space characters.
