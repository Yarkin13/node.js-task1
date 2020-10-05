const argv = require('minimist')(process.argv.slice(2));

let shift = 0;

if (argv.s !== undefined) {
  shift = argv.s;
}

if (argv.shift !== undefined) {
  shift = argv.shift;
}

if (shift < 0) {
  process.stderr.write('Shift must be positive number');
  process.exit(1);
}

if (typeof shift !== 'number') {
  process.stderr.write('Shift must be positive number');
  process.exit(1);
}

module.exports = shift;
