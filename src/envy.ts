import {existsSync, readFileSync} from 'node:fs'
import {cwd} from 'node:process'
import {parse} from 'yaml'

type EnvyConfig = Record<string, any>
type EnvyServers = {
  [name: string]: string[]
}

type EnvyTask = {
  name?: string
  script: string
}

type EnvyTasks = {
  [name: string]: EnvyTask
}

export default class Envy {
  config: EnvyConfig
  servers: EnvyServers
  tasks: EnvyTasks

  constructor(config: EnvyConfig) {
    this.config = config
    this.servers = config.servers || {}
    this.tasks = config.tasks || {}
  }

  static load() {
    if (!existsSync(`${cwd()}/envy.yml`)) {
      throw new Error('envy.yml not found.')
    }

    const config = parse(readFileSync('envy.yml', 'utf8'))
    return new Envy(config)
  }

  getServer(name: string) {
    if (name in this.servers) {
      return this.servers[name]
    }

    throw new Error(`Server ${name} is not defined.`)
  }

  hasOneServer() {
    return Object.keys(this.servers).length === 1
  }

  getFirstServer() {
    return this.servers[Object.keys(this.servers)[0]]
  }
}
