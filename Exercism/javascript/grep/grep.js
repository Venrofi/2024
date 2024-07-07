#!/usr/bin/env node

// The above line is a shebang. On Unix-like operating systems, or environments,
// this will allow the script to be run by node, and thus turn this JavaScript
// file into an executable. In other words, to execute this file, you may run
// the following from your terminal:
//
// ./grep.js args
//
// If you don't have a Unix-like operating system or environment, for example
// Windows without WSL, you can use the following inside a window terminal,
// such as cmd.exe:
//
// node grep.js args
//
// Read more about shebangs here: https://en.wikipedia.org/wiki/Shebang_(Unix)

const fs = require("fs");
const path = require("path");

/**
 * Reads the given file and returns lines.
 *
 * This function works regardless of POSIX (LF) or windows (CRLF) encoding.
 *
 * @param {string} file path to file
 * @returns {string[]} the lines
 */
function readLines(file) {
	const data = fs.readFileSync(path.resolve(file), { encoding: "utf-8" });
	return data.split(/\r?\n/);
}

const VALID_OPTIONS = [
	"n", // add line numbers
	"l", // print file names where pattern is found
	"i", // ignore case
	"v", // reverse files results
	"x", // match entire line
];

const ARGS = process.argv;

const flags = [];
const files = [];
let searchTerm = "";

for (let i = 2; i < ARGS.length; i++) {
	if (ARGS[i].startsWith("-")) {
		flags.push(ARGS[i]);
	} else if (ARGS[i].includes(".txt")) {
		files.push(ARGS[i]);
	} else {
		searchTerm = ARGS[i];
	}
}

const multipleFiles = files.length > 1 ? true : false;

if (flags.includes("-i")) {
	searchTerm = searchTerm.toLowerCase();
}

files.forEach((file) => {
	for (const [index, line] of readLines(file).entries()) {
		let compareLine = line;

		if (flags.includes("-i")) {
			compareLine = line.toLowerCase();
		}

		let comparison = flags.includes("-x")
			? compareLine === searchTerm
			: compareLine.includes(searchTerm);

		if (flags.includes("-v")) {
			comparison = !comparison;
		}

		if (comparison) {
			if (flags.includes("-l")) {
				console.log(file);
				break;
			} else if (flags.includes("-n")) {
				console.log(
					multipleFiles ? `${file}:${index + 1}:${line}` : `${index + 1}:${line}`
				);
			} else {
				console.log(multipleFiles ? `${file}:${line}` : line);
			}
		}
	}
});
