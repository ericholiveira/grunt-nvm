# grunt-nvm

> Run any nvm commands

You can use it to ensure node versions on projects

## Install

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
