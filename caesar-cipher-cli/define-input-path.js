const argv = require('minimist')(process.argv.slice(2));
const path = require('path');
const fs = require('fs');

let inputPath = '';

if (
  (argv.i !== undefined && argv.input !== undefined) ||
  argv.i !== true ||
  argv.input !== true
) {
  if (argv.i === undefined && argv.input !== undefined) {
    if (argv.input === true) {
      process.stderr.write('File not found');
      process.exit(1);
    }
    inputPath = path.join(__dirname, argv.input);
    fs.access(inputPath, err => {
      if (err) {
        process.stderr.write('File not found');
        process.exit(1);
      }
    });
  }
  if (argv.input === undefined && argv.i !== undefined) {
    if (argv.i === true) {
      process.stderr.write('File not found');
      process.exit(1);
    }
    inputPath = path.join(__dirname, argv.i);
    fs.access(inputPath, err => {
      if (err) {
        process.stderr.write('File not found');
        process.exit(1);
      }
    });
  }
}

module.exports = inputPath;
