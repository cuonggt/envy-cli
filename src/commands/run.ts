import {Args, Flags} from '@oclif/core'
import BaseCommand from '../base-command'
import Envy from '../envy'
import {spawn} from 'node:child_process'
import {consola} from 'consola'

export default class Run extends BaseCommand<typeof BaseCommand> {
  static description = 'Run an Envy task.'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static args = {
    task: Args.string({description: 'The name of the task.', required: true}),
  }

  static flags = {
    pretend: Flags.boolean({char: 'p', description: 'Dump Bash script for inspection.'}),
  }

  public async run(): Promise<void> {
    const envy = Envy.load()
    const script = envy.tasks[this.args.task]?.script || ''

    if (script === '') {
      throw new Error(`Task ${this.args.task} is not defined.`)
    }

    if (this.pretending()) {
      this.log(script)
      return
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
        consola.log(`[${server[0]}]: ${line}`)
      }
    })
  }

  pretending() {
    return Boolean(this.flags.pretend)
  }
}
