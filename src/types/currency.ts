export type CurrencyCode = string;

export type ExchangeRatesResponse = {
  rates: Record<CurrencyCode, number>;
  timestamp: number;
};

export type CurrencyRate = {
  code: CurrencyCode;
  rate: number;
  previousRate?: number;
  change?: number;
};

export type CurrencySymbol = {
  code: string;
  description: string;
};

export type UseExchangeRatesResult = {
  rates: CurrencyRate[];
  timestamp: number;
};
