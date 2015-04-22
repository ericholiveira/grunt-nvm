# grunt-nvm

> Run any nvm commands

You can use it to ensure node versions on projects

## Install

```sh
$ npm install grunt-nvm --save-dev
```

## Usage

```js
grunt.loadNpmTasks('grunt-nvm');

grunt.registerTask('ensureNode012', ['nvm:use:0.12']);
```

On command-line 

```sh
$ grunt ensureNode012
```

Or

```sh
$ grunt nvm:use:0.12
```

You can also use it to install node versions or use any other nvm command

```sh
$ grunt nvm:install:0.12
```
