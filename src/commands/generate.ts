import {Command, flags} from '@oclif/command'
import {args} from '@oclif/parser';
import { CommandWithSchematics } from '../share/schematics/Command';

/**

# Setup Skill handler
% yarn schematics .:init --path=./tmp --dry-run=false --ssml=tsx --database=none

# Add a ask-sdk request handler
% yarn schematics .:handler --path=./tmp --dry-run=false --ssml=tsx

# Add ask-utils router (Dry run)
% yarn schematics .:router --path=./tmp/src

# Add service class
% yarn schematics .:service --path=./tmp/src --name=test --dry-run=false --test=true
 */

export default class Generate extends CommandWithSchematics {
  static description = '[g, gen, generate] Generate files'
  static examples = [
    "Create ask-sdk RequestHandler\n $ talky g handler --ssml default\n",
    "With TSX \n $ talky g handler --ssml tsx\n",
    "Specific directory \n $ talky g handler --ssml tsx -P ./src\n",
    "Create ask-utils RequestRouter\n $ talky g router --ssml default\n",
    "With TSX \n $ talky g router --ssml tsx\n",
    "Create service class \n $ talky g service\n",
    "No test \n $ talky g service --no-test\n",
  ]

  static aliases = [
    'g',
    'gen'
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    path: flags.string({
      char: 'P',
      description: 'generate file path',
      default: './src'
    }),
    ssml: flags.enum({
      options: ['tsx', 'default'],
      description: 'SSML markup type',
      char: 'S'
    }),
    "no-test": flags.boolean({
      default: false,
      description: 'Ignore default test code',
      char: 'T'
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
    options: ["handler", 'router', 'service'],
    required: true,
  }, {
    name: 'name',
    description: 'Generate files name',
    required: true
  }]

  async run() {
    const {args, flags} = this.parse(Generate)
    const options: string[] = []
    options.push(`--name=${args.name}`)
    if (flags.path) options.push(`--path=${flags.path}`)
    if (flags.ssml) options.push(`--ssml=${flags.ssml}`)
    if (flags["no-test"] === true) options.push(`--test=false`)
    this.executeSchematics(args.type, {
      dryRun: flags["dry-run"],
      debug: flags.debug,
      options,
    })
  }
}
