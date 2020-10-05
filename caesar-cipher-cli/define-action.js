const argv = require('minimist')(process.argv.slice(2));
const encode = require('./encode');
const decode = require('./decode');

let action = '';

if (argv.a === 'encode' || argv.action === 'encode') {
  action = encode;
}
if (argv.a === 'decode' || argv.action === 'decode') {
  action = decode;
}

if (typeof action !== 'function' || action === '') {
  process.stderr.write('Possible case action "encode" or "decode"');
  process.exit(1);
}

module.exports = action;
