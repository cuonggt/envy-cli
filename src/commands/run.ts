import {Args} from '@oclif/core'
import BaseCommand from '../base-command'
import Envy from '../envy'
import {spawn} from 'node:child_process'

export default class Run extends BaseCommand<typeof BaseCommand> {
  static description = 'Run an Envy task.'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static args = {
    task: Args.string({description: 'The name of the task.', required: true}),
  }

  public async run(): Promise<void> {
    const envy = Envy.load()
    const script = envy.tasks[this.args.task].script || ''

    if (script === '') {
      throw new Error(`Task ${this.args.task} is not defined.`)
    }

    const server = envy.getFirstServer()

    const command = `ssh ${server[0]} 'bash -se' << EOF

set -e
${script}
EOF`

    const process = spawn(command, {
      stdio: ['ignore', 'pipe', 'inherit'],
      shell: true,
    })

    process.stdout.on('data', (data: Buffer) => {
      const output = data.toString().trim().split(/\r?\n/)
      for (const line of output) {
        this.log(`[${server[0]}]: ${line}`)
      }
    })
  }
}
