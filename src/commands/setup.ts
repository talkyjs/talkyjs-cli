import { flags} from '@oclif/command'
import { CommandWithSchematics } from '../share/schematics/Command'

/**
 * yarn schematics .:init --path=./tmp --dry-run=false  --ssml=tsx --database=s3 --test=true
 */
export default class New extends CommandWithSchematics {
  static description = 'Setup a new Alexa app'
  static examples = [
    "For ask-sdk user\n $ talky setup -C handler -S default\n",
    "With S3 adapter\n $ talky setup -B s3\n",
    "Without test code\n $ talky setup --no-test\n",
  ]

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
    controller: flags.enum({
      description: 'Request handler object type',
      char: 'C',
      options: ['handler', 'router'],
      default: 'router'
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
    if (flags.controller) options.push(`--controller-type=${flags.controller}`)
    this.executeSchematics('init', {
      dryRun: flags["dry-run"],
      debug: flags.debug,
      options,
    })
  }
}
