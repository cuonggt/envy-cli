import {Args, Command} from '@oclif/core'
import {existsSync, writeFile} from 'node:fs'
import {cwd} from 'node:process'

export default class Init extends Command {
  static description = 'Create a new Envy file in the current directory.'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static args = {
    host: Args.string({description: 'The host server to initialize with.', required: true}),
  }

  public async run(): Promise<void> {
    const {args} = await this.parse(Init)
    const path = `${cwd()}/envy.yml`
    if (existsSync(path)) {
      throw new Error('Envy file already exists!')
    }

    const data = `servers:
  web:
    - ${args.host}

tasks:
  deploy:
    name: Deploy
    script: |
      cd /path/to/site
      git pull origin master
`

    writeFile(path, data, error => {
      if (error) {
        throw error
      }

      this.log('Envy file created!')
    })
  }
}
