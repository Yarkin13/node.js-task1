const argv = require('minimist')(process.argv.slice(2));
const path = require('path');
const fs = require('fs');

let outputPath = '';

if (
  (argv.o !== undefined && argv.output !== undefined) ||
  argv.o !== true ||
  argv.output !== true
) {
  if (argv.o === undefined && argv.output !== undefined) {
    if (argv.output === true) {
      process.stderr.write('File not found');
      process.exit(1);
    }
    outputPath = path.join(__dirname, argv.output);
    fs.access(outputPath, err => {
      if (err) {
        process.stderr.write('File not found');
        process.exit(1);
      }
    });
  }
  if (argv.output === undefined && argv.o !== undefined) {
    if (argv.o === true) {
      process.stderr.write('File not found');
      process.exit(1);
    }
    outputPath = path.join(__dirname, argv.o);
    fs.access(outputPath, err => {
      if (err) {
        process.stderr.write('File not found');
        process.exit(1);
      }
    });
  }
}

module.exports = outputPath;
