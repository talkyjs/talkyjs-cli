import {Command, flags} from '@oclif/command'
import {args} from '@oclif/parser';
import { CommandWithSchematics } from '../share/schematics/Command';

export default class Generate extends CommandWithSchematics {
  static description = '[g, gen, generate] Generate files'
  static aliases = [
    'g',
    'gen'
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({
      char: 'n',
      description: "name of the generated file"
    }),
    path: flags.string({
      char: 'p',
      description: 'generate file path',
      default: './'
    }),
    // flag with no value (-f, --force)
    // force: flags.boolean({char: 'f'}),
    debug: flags.boolean({
      char: 'd',
      default: false
    }),
    "dry-run": flags.boolean({
      char: 'D',
      default: false
    })
  }

  static args: args.Input = [{
    name: 'type',
    description: "Generate file type",
    options: ["handler"],
    required: true,
  }]

  async run() {
    const {args, flags} = this.parse(Generate)
    const options: string[] = []
    if (flags.name) options.push(`--name=${flags.name}`)
    if (flags.path) options.push(`--path=${flags.path}`)
    this.executeSchematics(args.type, {
      dryRun: flags["dry-run"],
      debug: flags.debug,
      options,
    })
  }
}
