import {Command, Interfaces} from '@oclif/core'
import TaskContainer from './task-container'

export type Flags<T extends typeof Command> = Interfaces.InferredFlags<typeof BaseCommand['baseFlags'] & T['flags']>
export type Args<T extends typeof Command> = Interfaces.InferredArgs<T['args']>

export default abstract class BaseCommand<T extends typeof Command> extends Command {
  protected flags!: Flags<T>
  protected args!: Args<T>
  taskContainer: TaskContainer = new TaskContainer()

  public async init(): Promise<void> {
    await super.init()
    const {args, flags} = await this.parse({
      flags: this.ctor.flags,
      baseFlags: (super.ctor as typeof BaseCommand).baseFlags,
      args: this.ctor.args,
      strict: this.ctor.strict,
    })
    this.flags = flags as Flags<T>
    this.args = args as Args<T>
    this.taskContainer.load()
  }
}
