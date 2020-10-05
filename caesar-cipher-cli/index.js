require('./define-required-arguments');
const action = require('./define-action');
const shift = require('./define-shift');
const fs = require('fs');
const inputPath = require('./define-input-path');
const outputPath = require('./define-output-path');

if (inputPath === '' && outputPath === '') {
  process.stdin.setEncoding('utf-8').on('data', data => {
    process.stdout.write(action(data, shift));
  });
}
if (inputPath !== '' && outputPath !== '') {
  fs.createReadStream(inputPath)
    .setEncoding('utf-8')
    .on('data', chunk => {
      fs.createWriteStream(outputPath, { flags: 'a+' }).write(
        action(chunk, shift)
      );
    });
}

if (inputPath === '' && outputPath !== '') {
  process.stdin.setEncoding('utf-8').on('data', data => {
    fs.createWriteStream(outputPath, { flags: 'a+' }).write(
      action(data, shift)
    );
  });
}

if (outputPath === '' && inputPath !== '') {
  fs.createReadStream(inputPath)
    .setEncoding('utf-8')
    .on('data', chunk => {
      process.stdout.write(action(chunk, shift));
    });
}
