oclif-cmc-app
=================

oclif cmc currency converter CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g cmcapp
$ cmc COMMAND
running command...
$ cmc (--version)
cmcapp/0.0.0 darwin-x64 node-v16.13.2
$ cmc --help [COMMAND]
USAGE
  $ cmc COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cmc hello PERSON`](#cmc-hello-person)
* [`cmc hello world`](#cmc-hello-world)
* [`cmc help [COMMAND]`](#cmc-help-command)

## `cmc hello PERSON`

Say hello

```
USAGE
  $ cmc hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

## `cmc help [COMMAND]`

Display help for cmc.

```
USAGE
  $ cmc help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for cmc.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

