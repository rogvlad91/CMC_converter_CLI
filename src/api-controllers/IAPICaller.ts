export type TGetRateRequest = {
  from: string
  to: string
  amount: string
}

export type TGetRateResponse = {
  rate: string
}

export default interface IAPICaller {
  getRate({from, to, amount}: TGetRateRequest) : Promise<TGetRateResponse>
  getCurrencies(): Promise<void>
}
