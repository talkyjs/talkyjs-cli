import {flags} from '@oclif/command'
import { CommandWithSchematics } from '../share/schematics/Command'

export default class Setup extends CommandWithSchematics {
  static description = 'Setup project (update package.json / tsconfig.json)'

  static flags = {
    help: flags.help({char: 'h'}),
    ssml: flags.enum({
      char: 's',
      options: ['default', 'tsx'],
      default: 'tsx',
      description: "ssml markup style"
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

  async run() {
    const {flags} = this.parse(Setup)

    const options: string[] = [
      `--ssml=${flags.ssml}`
    ]
    this.executeSchematics("setup", {
      dryRun: flags["dry-run"],
      debug: flags.debug,
      options,
    })
  }
}
