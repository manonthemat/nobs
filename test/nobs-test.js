'use strict';

const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const Nobs = require('..');

lab.test('just works', (done) => {

    const expected = '{"a":{"x":3,"z":1},"b":{"a":5,"d":5,"x":5},"c":5}';
    Code.expect(Nobs( { a: { z: 1, x: 3 }, c: 5, b: { a: 5, x: 5, d: 5 } })).to.equal(expected);
    done();
});
