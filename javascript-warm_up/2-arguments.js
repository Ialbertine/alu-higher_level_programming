#!/usr/bin/node
const args = process.argv.slice(2);
const num_Args = args.length;

if (num_Args === 0) {
  console.log('No argument');
} else if (num_Args === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
