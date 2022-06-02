oclif-cmc-app
=================

oclif cmc currency converter CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)

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
cmcapp/1.0.1 darwin-x64 node-v16.13.2
$ cmc --help [COMMAND]
USAGE
  $ cmc COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`cmc Convert FROM TO AMOUNT`](#cmc-convert-from-to-amount)
* [`cmc help [COMMAND]`](#cmc-help-command)

## `cmc Convert FROM TO AMOUNT`

Convert one currency to another

```
USAGE
  $ cmc Convert [FROM] [TO] [AMOUNT]

ARGUMENTS
  FROM    Currency from which you wish to convert
  TO      Currency to which you wish to convert
  AMOUNT  Amount of the from currency

DESCRIPTION
  Convert one currency to another

EXAMPLES
  $ oex convert ETH ETH 1
  The converting rate for 1 ETH to ETH is 1
```

_See code: [dist/commands/Convert/index.ts](https://github.com/rogvlad91/cmcCLI/blob/v1.0.1/dist/commands/Convert/index.ts)_

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
