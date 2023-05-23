import BaseCommand from '../base-command'
import Envy from '../envy'

export default class Tasks extends BaseCommand<typeof BaseCommand> {
  static description = 'List all Envy tasks.'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  public async run(): Promise<void> {
    const envy = Envy.load()
    this.listTasks(envy)
  }

  listTasks(envy: Envy) {
    this.log('Available tasks:')
    for (const task in envy.tasks) {
      if (task) {
        this.log(`- ${task}`)
      }
    }
  }
}
