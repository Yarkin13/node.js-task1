const argv = require('minimist')(process.argv.slice(2));

if (
  (argv.a === undefined && argv.action === undefined) ||
  (argv.s === undefined && argv.shift === undefined)
) {
  process.stderr.write('Arguments "action" and "shift" required');
  process.exit(1);
}
