import IAPICaller, {TGetRateRequest, TGetRateResponse} from './IAPICaller'
import axios, {AxiosInstance} from 'axios'

export default class CMCApi implements IAPICaller {
  private readonly request: AxiosInstance

  constructor() {
    this.request = axios.create({
      baseURL: 'https://pro-api.coinmarketcap.com/v2',
      timeout: 10_000,
      headers: {
        'X-CMC_PRO_API_KEY': 'eb4205bd-2e26-45d1-897d-c7571d1ef87e',
      },
    })
  }

  async getRate({from, to, amount}: TGetRateRequest) : Promise<TGetRateResponse> {
    const config = {
      params:
        {
          amount,
          symbol: from,
          convert: to,
        },
    }

    try {
      const {data: response} = await this.request.get('/tools/price-conversion', config)
      return response.data[0].quote[`${to}`].price.toString()
    } catch (error: any) {
      throw new Error(error)
    }
  }

  getCurrencies(): Promise<void> {
    throw new Error('method not implemented')
  }
}
