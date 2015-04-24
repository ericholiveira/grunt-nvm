# grunt-nvm      [![npm version](https://badge.fury.io/js/grunt-nvm.svg)](http://badge.fury.io/js/grunt-nvm)

> Run any nvm commands

You can use it to ensure node versions on projects

As nvm, grunt-nvm works only on unix systems


## Install

First install nvm (global)

```sh
$ npm install -g nvm
```

Then install grunt-nvm

```sh
$ npm install grunt-nvm --save-dev
```

## Usage

To use you only need to register the task on your Gruntfile

```js
grunt.loadNpmTasks('grunt-nvm');

```

And you can call as nvm:ARG1:ARG2:ARG3:...


Example on command-line

```sh
$ grunt nvm:install:0.12
```

Or you can use an alias to chain multiple tasks

```js

grunt.registerTask('myTask', [/*nvm:use ensures version*/'nvm:use:0.12' /*,some other tasks*/]);

```

```sh
$ grunt myTask
```

## More examples

You can also use it to install node versions or use any other nvm command


```sh
$ grunt nvm:install:0.12
```

```sh
$ grunt nvm:ls-remote
```

```sh
$ grunt nvm:use:0.10
```

```sh
$ grunt nvm:exec:0.12:node:app.js
```

[![NPM](https://nodei.co/npm/grunt-nvm.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/grunt-nvm/)

## License

The MIT License (MIT)

Copyright (c) 2015 Erich Oliveira [ericholiveira.com](http://ericholiveira.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
