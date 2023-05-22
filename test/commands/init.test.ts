import {expect, test} from '@oclif/test'
import {existsSync, unlink} from 'node:fs'

describe('init', () => {
  unlink(process.cwd() + '/envy.yml', error => {
    if (error) {
      throw error
    }
  })
  test
  .stdout()
  .command(['init', 'forge@1.1.1.1'])
  .it('creates a new Envy file in the current directory.', () => {
    expect(existsSync(process.cwd() + '/envy.yml')).to.be.true
  })
})
