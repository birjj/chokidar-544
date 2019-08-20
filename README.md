# chokidar-544

Reproducible repo for chokidar/#544

Run `yarn start` (or `npm start`) and watch for `=== Added file that shouldn't be added!`.

The role of each file is:

- **`real-match.txt`** Positive baseline. Should match, and is a normal file. Change this file to trigger changes on both symlinks.
- **`real-nomatch.md`** Negative baseline. Shouldn't match, and is a normal file.
- **`sym-match.txt`** Positive test case. Should match.
- **`sym-nomatch.md`** Negative test case. Shouldn't match.
