import {Args, Command, Flags} from '@oclif/core'
import TaskContainer from '../task-container'
import {spawn} from 'node:child_process'

export default class Ssh extends Command {
  static description = 'Connect to an Envoy server.'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static args = {
    name: Args.string({description: 'The name of the server.'}),
  }

  static flags = {
    user: Flags.string({char: 'u', description: 'The name of the user.'}),
  }

  public async run(): Promise<void> {
    const taskContainer = this.loadTaskContainer()
    const server = await this.getServer(taskContainer)
    spawn('ssh', [server[0]], {stdio: 'inherit'})
  }

  loadTaskContainer() {
    const taskContainer = new TaskContainer()
    taskContainer.load()
    return taskContainer
  }

  async getServer(taskContainer: TaskContainer) {
    const {args} = await this.parse(Ssh)
    if (args.name) {
      return taskContainer.getServer(args.name)
    }

    if (taskContainer.hasOneServer()) {
      return taskContainer.getFirstServer()
    }

    throw new Error('Please provide a server name.')
  }
}
