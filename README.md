@talkyjs/cli
============



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@talkyjs/cli.svg)](https://npmjs.org/package/@talkyjs/cli)
[![Downloads/week](https://img.shields.io/npm/dw/@talkyjs/cli.svg)](https://npmjs.org/package/@talkyjs/cli)
[![License](https://img.shields.io/npm/l/@talkyjs/cli.svg)](https://github.com/ask-utils/talkyjs-cli/ask-utils/talkyjs-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @talkyjs/cli
$ talky COMMAND
running command...
$ talky (-v|--version|version)
@talkyjs/cli/0.0.0 darwin-x64 node-v12.9.1
$ talky --help [COMMAND]
USAGE
  $ talky COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`talky generate TYPE`](#talky-generate-type)
* [`talky help [COMMAND]`](#talky-help-command)
* [`talky new [FILE]`](#talky-new-file)
* [`talky setup`](#talky-setup)

## `talky generate TYPE`

[g, gen, generate] Generate files

```
USAGE
  $ talky generate TYPE

ARGUMENTS
  TYPE  (handler|router|service) Generate file type

OPTIONS
  -D, --dry-run
  -d, --debug
  -h, --help       show CLI help
  -n, --name=name  name of the generated file
  -p, --path=path  [default: ./] generate file path

ALIASES
  $ talky g
  $ talky gen
```

_See code: [src/commands/generate.ts](https://github.com/ask-utils/talkyjs-cli/blob/v0.0.0/src/commands/generate.ts)_

## `talky help [COMMAND]`

display help for talky

```
USAGE
  $ talky help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.1.0/src/commands/help.ts)_

## `talky new [FILE]`

describe the command here

```
USAGE
  $ talky new [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/new.ts](https://github.com/ask-utils/talkyjs-cli/blob/v0.0.0/src/commands/new.ts)_

## `talky setup`

Setup project (update package.json / tsconfig.json)

```
USAGE
  $ talky setup

OPTIONS
  -D, --dry-run
  -d, --debug
  -h, --help                show CLI help
  -s, --ssml=(default|tsx)  [default: tsx] ssml markup style
```

_See code: [src/commands/setup.ts](https://github.com/ask-utils/talkyjs-cli/blob/v0.0.0/src/commands/setup.ts)_
<!-- commandsstop -->
