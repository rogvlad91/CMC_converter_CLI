import {Command} from '@oclif/core'
import CMCApi from '../../api-controllers/CMCApi'

export default class Convert extends Command {
  static description = 'Convert one currency to another'

  static examples = [
    `$ oex convert ETH USD 1
hello friend from oclif! (./src/commands/hello/index.ts)
`,
  ]

  static args = [{name: 'from', description: 'Currency from which you wish to convert', required: true},
    {name: 'to', description: 'Currency to which you wish to convert', required: true},
    {name: 'amount', description: 'Amount of the from currency', required: true}]

  async run(): Promise<void> {
    const {args} = await this.parse(Convert)

    const cmc = new CMCApi()
    try {
      const rate = await cmc.getRate({
        from: args.from.toUpperCase(),
        to: args.to.toUpperCase(),
        amount: args.amount,
      })

      this.log(`The converting rate for ${args.amount} ${args.from} to ${args.to} is ${rate}`)
    } catch (error: any) {
      error.code >= 500 ? this.warn('The service is down now, please try again in some time') :
        this.warn('Invalid input, please try again')
    }
  }
}

