# forwarded

<!-- [![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js Version][node-version-image]][node-version-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]
 -->
Parse HTTP X-Forwarded-* header

<!-- ## Installation

```sh
$ npm install forwarded
``` -->

## API

```js
var forwardedx = require('forwardedx')
```

### forwarded(req)

```js
var addresses = forwarded(req, header)
```

Parse the `X-Forwarded-*` header from the request, and returns an array
of the addresses.

For 'X-Forwarded-For', it returns the socket address for the `req` in reverse
order (i.e. index `0` is the socket address and the last index is the
furthest address, typically the end-user).

For 'X-Forwarded-Host', it returns the host address for the `req` in reverse order (the first is the host running this module, and the last is the furthest reverse proxy host that a full URL should be based on.)

## Testing

```sh
$ npm test
```

## License

[MIT](LICENSE)

<!-- [npm-image]: https://img.shields.io/npm/v/forwarded.svg
[npm-url]: https://npmjs.org/package/forwarded
[node-version-image]: https://img.shields.io/node/v/forwarded.svg
[node-version-url]: http://nodejs.org/download/
[travis-image]: https://img.shields.io/travis/jshttp/forwarded/master.svg
[travis-url]: https://travis-ci.org/jshttp/forwarded
[coveralls-image]: https://img.shields.io/coveralls/jshttp/forwarded/master.svg
[coveralls-url]: https://coveralls.io/r/jshttp/forwarded?branch=master
[downloads-image]: https://img.shields.io/npm/dm/forwarded.svg
[downloads-url]: https://npmjs.org/package/forwarded -->
