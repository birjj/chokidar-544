#!/usr/bin/env node
const path = require("path");
const chokidar = require("chokidar");
const fs = require("fs");

// watch files (should match .txt's, shouldn't match .md's)
const glob = path.resolve(__dirname, "../src/**/*.txt");
console.log("Watching glob pattern:", glob);

function log(event, path) {
  console.log(event, path);
  if (/nomatch/.test(path)) {
    const verb = event === "add" ? "Added" : "Changed";
    console.warn(`=== ${verb} file that shouldn't be ${verb.toLowerCase()}!`, path);
  }
}

chokidar.watch(glob, { ignoreInitial: false }).on("all", log);

// edit real files to get change events too (not really needed, but neat anyway)
const reals = ["../src/real-match.txt", "../src/real-nomatch.md"];
setTimeout(() => {
  reals.forEach(real => {
    const realPath = path.resolve(__dirname, real);
    fs.writeFile(realPath, Math.random(), err => {
      if (err) { console.error("=== Got error while writing to", realPath, err); }
    });
  });
}, 500);
