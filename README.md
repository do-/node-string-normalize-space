![workflow](https://github.com/do-/node-string-normalize-space/actions/workflows/main.yml/badge.svg)
![Jest coverage](./badges/coverage-jest%20coverage.svg)

`string-normalize-space` is a node.js module implementing one single function, `normalizeSpace`, following the [definition](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-normalize-space) from XPath 1.0.

So it's basically like [String.prototype.trim()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim), but also works inside the string.

The [`winston`](https://github.com/winstonjs/winston) compatible log formatter is provided.

# Installation

```
npm install string-normalize-space
```

# Usage
## General purpose

```js
const {normalizeSpace} = require ('string-normalize-space')

const ab = normalizeSpace (' A\r\n\t B ') // will be 'A B'
```

## As a `winston` log formatter

```js
const {createLogger, format: {combine, printf}, transports} = require ('winston')

const normalizeSpaceLogFormat = require ('string-normalize-space').logform

const logger = createLogger ({
  transports: [
    new transports.Console (),
  ],
  format: combine (
    printf (info => `${info.message} ${info.meta} ${info.stack}`), // may be lots of \n
    normalizeSpaceLogFormat ()                                     // exactly one line
  ),
})
```

# Notes

Unlike numerous similar modules, this one doesn't rely on any regular expressions.

As mentioned before, the XPath 1.0 specification is followed, so only [4 characters](https://www.w3.org/TR/REC-xml/#NT-S) are considered "space". No effort is made to support extended Unicode space characters.
