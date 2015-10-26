'use strict';

var assert = require('assert');
var forwardedx = require('..');

function createReq(socketAddr, headers) {
  return {
    connection: {
      remoteAddress: socketAddr
    },
    headers: headers || {}
  };
}

describe('forwardedx(req, header)', function () {
  it('should require req', function () {
    assert.throws(forwardedx.bind(null), /argument req.*required/);
  });

  it('should work with X-Forwarded-For header by default', function () {
    var req = createReq('127.0.0.1');
    assert.deepEqual(forwardedx(req), ['127.0.0.1']);
  });

  it('should include entries from X-Forwarded-For by default', function () {
    var req = createReq('127.0.0.1', {
      'x-forwarded-for': '10.0.0.2, 10.0.0.1'
    });
    assert.deepEqual(forwardedx(req), ['127.0.0.1', '10.0.0.1', '10.0.0.2']);
  });

  it('should skip blank entries', function () {
    var req = createReq('127.0.0.1', {
      'x-forwarded-for': '10.0.0.2,, 10.0.0.1'
    });
    assert.deepEqual(forwardedx(req), ['127.0.0.1', '10.0.0.1', '10.0.0.2']);
  });

  it('should include entries of header parameter', function () {
    var req = createReq('127.0.0.1', {
      'x-forwarded-host': '10.0.0.2, 10.0.0.1'
    });
    assert.deepEqual(forwardedx(req, 'x-forwarded-host'), ['127.0.0.1', '10.0.0.1', '10.0.0.2']);
  });
});


