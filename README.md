oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g envy-cli
$ envy COMMAND
running command...
$ envy (--version)
envy-cli/0.0.0 darwin-arm64 node-v16.14.0
$ envy --help [COMMAND]
USAGE
  $ envy COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`envy hello PERSON`](#envy-hello-person)
* [`envy hello world`](#envy-hello-world)
* [`envy help [COMMANDS]`](#envy-help-commands)
* [`envy plugins`](#envy-plugins)
* [`envy plugins:install PLUGIN...`](#envy-pluginsinstall-plugin)
* [`envy plugins:inspect PLUGIN...`](#envy-pluginsinspect-plugin)
* [`envy plugins:install PLUGIN...`](#envy-pluginsinstall-plugin-1)
* [`envy plugins:link PLUGIN`](#envy-pluginslink-plugin)
* [`envy plugins:uninstall PLUGIN...`](#envy-pluginsuninstall-plugin)
* [`envy plugins:uninstall PLUGIN...`](#envy-pluginsuninstall-plugin-1)
* [`envy plugins:uninstall PLUGIN...`](#envy-pluginsuninstall-plugin-2)
* [`envy plugins update`](#envy-plugins-update)

## `envy hello PERSON`

Say hello

```
USAGE
  $ envy hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/cuonggt/envy-cli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `envy hello world`

Say hello world

```
USAGE
  $ envy hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ envy hello world
  hello world! (./src/commands/hello/world.ts)
```

## `envy help [COMMANDS]`

Display help for envy.

```
USAGE
  $ envy help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for envy.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.9/src/commands/help.ts)_

## `envy plugins`

List installed plugins.

```
USAGE
  $ envy plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ envy plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

## `envy plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ envy plugins:install PLUGIN...

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
  $ envy plugins add

EXAMPLES
  $ envy plugins:install myplugin 

  $ envy plugins:install https://github.com/someuser/someplugin

  $ envy plugins:install someuser/someplugin
```

## `envy plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ envy plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ envy plugins:inspect myplugin
```

## `envy plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ envy plugins:install PLUGIN...

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
  $ envy plugins add

EXAMPLES
  $ envy plugins:install myplugin 

  $ envy plugins:install https://github.com/someuser/someplugin

  $ envy plugins:install someuser/someplugin
```

## `envy plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ envy plugins:link PLUGIN

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
  $ envy plugins:link myplugin
```

## `envy plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ envy plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ envy plugins unlink
  $ envy plugins remove
```

## `envy plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ envy plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ envy plugins unlink
  $ envy plugins remove
```

## `envy plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ envy plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ envy plugins unlink
  $ envy plugins remove
```

## `envy plugins update`

Update installed plugins.

```
USAGE
  $ envy plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
