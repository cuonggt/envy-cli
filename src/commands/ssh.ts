import {Args} from '@oclif/core'
import BaseCommand from '../base-command'
import Envy from '../envy'
import {spawn} from 'node:child_process'

export default class Ssh extends BaseCommand<typeof BaseCommand> {
  static description = 'Connect to an Envy server.'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static args = {
    name: Args.string({description: 'The name of the server.'}),
  }

  // static flags = {
  //   user: Flags.string({char: 'u', description: 'The name of the user.'}),
  // }

  public async run(): Promise<void> {
    const envy = Envy.load()
    const server = this.getServer(envy)
    const args = [
      '-o ConnectTimeout=5',
      '-o ControlMaster=auto',
      '-o ControlPersist=100',
      '-o LogLevel=QUIET',
      '-o StrictHostKeyChecking=no',
      '-t',
      server[0],
    ]
    spawn('ssh', args, {stdio: 'inherit'})
  }

  getServer(envy: Envy) {
    if (this.args.name) {
      return envy.getServer(this.args.name)
    }

    if (envy.hasOneServer()) {
      return envy.getFirstServer()
    }

    throw new Error('Please provide a server name.')
  }
}
