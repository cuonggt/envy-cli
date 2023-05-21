import {parse} from 'yaml'
import {readFileSync} from 'node:fs'

type Servers = {
  [name: string]: string[]
}

export default class TaskContainer {
  config: { [key: string]: any} = {}
  servers: Servers = {}

  constructor() {
    this.config = {}
    this.servers = {}
  }

  load() {
    this.config = parse(readFileSync('envy.yml', 'utf8'))
    this.servers = this.config.servers || {}
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
