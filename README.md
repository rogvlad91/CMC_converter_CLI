oclif-cmc-app
=================

oclif cmc currency converter CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/cmcapp)

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
cmcapp/1.0.0 darwin-x64 node-v16.13.2
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
* [`cmc plugins`](#cmc-plugins)
* [`cmc plugins:install PLUGIN...`](#cmc-pluginsinstall-plugin)
* [`cmc plugins:inspect PLUGIN...`](#cmc-pluginsinspect-plugin)
* [`cmc plugins:install PLUGIN...`](#cmc-pluginsinstall-plugin-1)
* [`cmc plugins:link PLUGIN`](#cmc-pluginslink-plugin)
* [`cmc plugins:uninstall PLUGIN...`](#cmc-pluginsuninstall-plugin)
* [`cmc plugins:uninstall PLUGIN...`](#cmc-pluginsuninstall-plugin-1)
* [`cmc plugins:uninstall PLUGIN...`](#cmc-pluginsuninstall-plugin-2)
* [`cmc plugins update`](#cmc-plugins-update)

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

_See code: [dist/commands/Convert/index.ts](https://github.com/rogvlad91/cmcCLI/blob/v1.0.0/dist/commands/Convert/index.ts)_

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

## `cmc plugins`

List installed plugins.

```
USAGE
  $ cmc plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ cmc plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `cmc plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ cmc plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ cmc plugins add

EXAMPLES
  $ cmc plugins:install myplugin 

  $ cmc plugins:install https://github.com/someuser/someplugin

  $ cmc plugins:install someuser/someplugin
```

## `cmc plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ cmc plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ cmc plugins:inspect myplugin
```

## `cmc plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ cmc plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ cmc plugins add

EXAMPLES
  $ cmc plugins:install myplugin 

  $ cmc plugins:install https://github.com/someuser/someplugin

  $ cmc plugins:install someuser/someplugin
```

## `cmc plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ cmc plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ cmc plugins:link myplugin
```

## `cmc plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cmc plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cmc plugins unlink
  $ cmc plugins remove
```

## `cmc plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cmc plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cmc plugins unlink
  $ cmc plugins remove
```

## `cmc plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ cmc plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ cmc plugins unlink
  $ cmc plugins remove
```

## `cmc plugins update`

Update installed plugins.

```
USAGE
  $ cmc plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
* [`cmc Convert FROM TO AMOUNT`](#cmc-convert-from-to-amount)
* [`cmc help [COMMAND]`](#cmc-help-command)

## `cmc Convert FROM TO AMOUNT`

Convert one currency to another including both fiat and crypto

```
USAGE
  $ cmc hello [FROM], [TO], [AMOUNT]

ARGUMENTS
  FROM  Currency from which you wish to convert
  TO  Currency to which you wish to convert
  AMOUNT  Amount of the from currency

DESCRIPTION
  Convert one currency to another

EXAMPLES
  $ oex convert ETH ETH 1
  The converting rate for 1 ETH to ETH is 1
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
