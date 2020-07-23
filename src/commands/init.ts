import {Command, flags} from '@oclif/command'
import { spawnSync } from 'child_process'

export default class Init extends Command {
  static description = 'Init Alexa Skill project'

  static flags = {
    help: flags.help({char: 'h'}),
    profile: flags.string({
      char: 'p',
      description: 'Provides the ASK CLI profile to use.'
    }),
    debug: flags.boolean({
      default: false,
      description: 'Enables the ASK CLI to show debug messages in the output of the command'
    })
  }

  async run() {
    const {flags: {
      profile,
      debug,
    }} = this.parse(Init)
    const options = [
      'new',
      '--template-url',
      'https://github.com/talkyjs/talkyjs-alexa-skill-template-helloworld.git'
    ]
    if (profile) {
      options.push('--profile', profile)
    }
    if (debug) options.push('--debug')
    spawnSync('ask', options, {
      stdio: 'inherit'
    })
  }
}
