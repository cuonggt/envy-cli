import {parse} from 'yaml'
import {readFileSync} from 'node:fs'

type Servers = {
  [name: string]: string[]
}

type EnvyTask = {
  name?: string
  script: string
}

type EnvyTasks = {
  [name: string]: EnvyTask
}

export default class TaskContainer {
  config: Record<string, any> = {}
  servers: Servers = {}
  tasks: EnvyTasks = {}

  constructor() {
    this.config = {}
    this.servers = {}
  }

  load() {
    this.config = parse(readFileSync('envy.yml', 'utf8'))
    this.servers = this.config.servers || {}
    this.tasks = this.config.tasks || {}
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
