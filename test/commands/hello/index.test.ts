import {expect, test} from '@oclif/test'

describe('Convert', () => {
  test
  .stdout()
  .command(['Convert', 'BTC', 'BTC', '1'])
  .it('runs Convert cmd', ctx => {
    expect(ctx.stdout).to.contain('The converting rate for 1 BTC to BTC is 1')
  })
})
