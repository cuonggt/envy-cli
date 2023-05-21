import {Args} from '@oclif/core'
import {spawn} from 'node:child_process'
import BaseCommand from '../base-command'

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
    const server = this.getServer()
    spawn('ssh', [server[0]], {stdio: 'inherit'})
  }

  getServer() {
    if (this.args.name) {
      return this.taskContainer.getServer(this.args.name)
    }

    if (this.taskContainer.hasOneServer()) {
      return this.taskContainer.getFirstServer()
    }

    throw new Error('Please provide a server name.')
  }
}
