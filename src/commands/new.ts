import { flags} from '@oclif/command'
import { CommandWithSchematics } from '../share/schematics/Command'

/**
 * yarn schematics .:init --path=./tmp --dry-run=false  --ssml=tsx --database=s3 --test=true
 */
export default class New extends CommandWithSchematics {
  static description = 'Create a new Alexa app'

  static flags = {
    help: flags.help({char: 'h'}),
    path: flags.string({
      char: 'P',
      description: 'target path',
      default: './',
    }),
    database: flags.enum({
      options: ['none', 's3', 'dynamodb'],
      default: 'none',
      description: 'Skill database type',
      char: 'B',
    }),
    ssml: flags.enum({
      options: ['tsx', 'default'],
      default: 'tsx',
      description: 'SSML markup type',
      char: 'S'
    }),
    "no-test": flags.boolean({
      default: false,
      description: 'Ignore default test code',
      char: 'T'
    }),
    debug: flags.boolean({
      char: 'd',
      default: false
    }),
    "dry-run": flags.boolean({
      char: 'D',
      default: false
    })
  }

  static args = []

  async run() {
    const {flags} = this.parse(New)
    const options: string[] = []
    if (flags.path) options.push(`--path=${flags.path}`)
    if (flags.database) options.push(`--database=${flags.database}`)
    if (flags.ssml) options.push(`--ssml=${flags.ssml}`)
    if (flags["no-test"] === true) options.push(`--test=false`)
    this.executeSchematics('init', {
      dryRun: flags["dry-run"],
      debug: flags.debug,
      options,
    })
  }
}
