#!/usr/bin/node
const agrs = process.argv.slice(2);
const num_Args = agrs.length;

if (num_Args === 0){
	console.log('No argument');
} else if (num_Args == 1) {
	console.log('Argument found');
} else {
	console.log('Arguments found');
}

