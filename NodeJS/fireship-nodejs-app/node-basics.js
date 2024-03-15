console.log("Hello, World! ☘️");

console.log(process.env.USER);
console.log(process.platform);

global.henlo = "henlo from global";
console.log(global.henlo);

// Events

process.on("exit", () => {
  console.log("Process will exit now..");
});

const EventEmitter = require("events");
const myEatingEmitter = new EventEmitter();

myEatingEmitter.on("eating", (food) => {
  console.log(`I am eating: ${food}`);
});

myEatingEmitter.emit("eating", "🍕");
myEatingEmitter.emit("eating", "🍔");

// File System

const { readFileSync, readFile } = require("fs");

const synchronousTxt = readFileSync("./hello.txt", "utf8"); // this blocks main thread and will resume after file is read
console.log("Received text synchronously:\n", synchronousTxt);

readFile("./hello.txt", "utf8", (err, data) => {
  console.log("Received text asynchronously:\n", data);
});

console.log("Reading file...");

// File System - Promises

// const { readFile } = require("fs").promises;

async function readHelloTxt() {
  const readHelloTxt = await readFile("./hello.txt", "utf8");
  console.log("Received text using async/await:\n", readHelloTxt);
}

// readHelloTxt();
// console.log("Reading..");

// Modules
const myModule = require("./my-module");
console.log("MyModule contents:", myModule);
