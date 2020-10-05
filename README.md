# RS School REST service

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```

## Task 1. Caesar cipher cli

CLI tool accept 4 options (short alias or full name):

Shift and action are required.

To use tool you should:

1. Clone project
2. Open project root directory in terminal
3. Write npm i to install dependecies
4. Change directory to src/caesar-cipher-cli/
5. Write node index.js and add all the neccessary options like:
```
$ node index.js -a encode -s 7 -i "./input.txt" -o "./output.txt"
```
```
$ node index.js --action encode --shift 7 --input input.txt --output output.txt
```
```
$ node index.js --action decode --shift 7 --input input.txt --output output.txt
```
```
$ node index.js --action encode --shift 7 --input input.txt
```
```
$ node index.js --action decode --shift 7 -o output.txt
```

