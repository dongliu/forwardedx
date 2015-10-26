/*!
 * forwarded
 * Copyright(c) 2014 Douglas Christopher Wilson
 * Copyright(c) 2015 Dong Liu
 * MIT Licensed
 */

'use strict';

/**
 * Get all addresses in the request, using the `X-Forwarded-For` header.
 *
 * @param {object} req
 * @return {array}
 * @public
 */

function forwardedx(req, header) {
  if (!req) {
    throw new TypeError('argument req is required');
  }

  if (!header) {
    header = 'x-forwarded-for';
  }

  // simple header parsing
  var proxyAddrs = (req.headers[header] || '')
    .split(/ *, */)
    .filter(Boolean)
    .reverse();
  var socketAddr = req.connection.remoteAddress;
  var addrs = [socketAddr].concat(proxyAddrs);

  // return all addresses
  return addrs;
}

/**
 * Module exports.
 * @public
 */

module.exports = forwardedx;
