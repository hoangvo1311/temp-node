const { log } = require('console');
const { readFileSync, writeFileSync } = require('fs');

log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync(
  './content/result-sync.txt',
  `Here is the result: ${first}, ${second} \n`,
  { flag: 'a' }
);
log('done with this task');
log('starting the next one');
