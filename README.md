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
@talkyjs/cli/1.0.1 darwin-x64 node-v12.9.1
$ talky --help [COMMAND]
USAGE
  $ talky COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`talky generate TYPE NAME`](#talky-generate-type-name)
* [`talky help [COMMAND]`](#talky-help-command)
* [`talky init`](#talky-init)
* [`talky new`](#talky-new)

## `talky generate TYPE NAME`

[g, gen, generate] Generate files

```
USAGE
  $ talky generate TYPE NAME

ARGUMENTS
  TYPE  (handler|router|service) Generate file type
  NAME  Generate files name

OPTIONS
  -D, --dry-run
  -P, --path=path           [default: ./src] generate file path
  -S, --ssml=(tsx|default)  SSML markup type
  -T, --no-test             Ignore default test code
  -d, --debug
  -h, --help                show CLI help

ALIASES
  $ talky g
  $ talky gen

EXAMPLES
  Create ask-sdk RequestHandler
    $ talky g handler --ssml default

  With TSX 
    $ talky g handler --ssml tsx

  Specific directory 
    $ talky g handler --ssml tsx -P ./src

  Create ask-utils RequestRouter
    $ talky g router --ssml default

  With TSX 
    $ talky g router --ssml tsx

  Create service class 
    $ talky g service

  No test 
    $ talky g service --no-test
```

_See code: [src/commands/generate.ts](https://github.com/ask-utils/talkyjs-cli/blob/v1.0.1/src/commands/generate.ts)_

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

## `talky init`

Init Alexa Skill project

```
USAGE
  $ talky init

OPTIONS
  -h, --help             show CLI help
  -p, --profile=profile  Provides the ASK CLI profile to use.
  --debug                Enables the ASK CLI to show debug messages in the output of the command
```

_See code: [src/commands/init.ts](https://github.com/ask-utils/talkyjs-cli/blob/v1.0.1/src/commands/init.ts)_

## `talky new`

Create a new Alexa app

```
USAGE
  $ talky new

OPTIONS
  -B, --database=(none|s3|dynamodb)  [default: none] Skill database type
  -C, --controller=(handler|router)  [default: router] Request handler object type
  -D, --dry-run
  -P, --path=path                    [default: ./] target path
  -S, --ssml=(tsx|default)           [default: tsx] SSML markup type
  -T, --no-test                      Ignore default test code
  -d, --debug
  -h, --help                         show CLI help

EXAMPLES
  For ask-sdk user
    $ talky new -C handler -S default

  With S3 adapter
    $ talky new -B s3

  Without test code
    $ talky new --no-test
```

_See code: [src/commands/new.ts](https://github.com/ask-utils/talkyjs-cli/blob/v1.0.1/src/commands/new.ts)_
<!-- commandsstop -->
