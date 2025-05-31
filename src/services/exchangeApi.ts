import axios from "axios";
import type { ExchangeRatesResponse, CurrencySymbol } from "../types/currency";
import { BASE_URL, SYMBOLS_URL } from "../constants/defaultCurrencies.ts";

const ACCESS_KEY = import.meta.env.VITE_API_KEY;

export async function fetchExchangeRates(
  symbols: string[]
): Promise<ExchangeRatesResponse> {
  const response = await axios.get(BASE_URL, {
    params: {
      access_key: ACCESS_KEY,
      symbols: symbols.join(","),
    },
  });

  return response.data;
}

export async function fetchCurrencySymbols(): Promise<CurrencySymbol[]> {
  const response = await axios.get(SYMBOLS_URL, {
    params: {
      access_key: ACCESS_KEY,
    },
  });
  const raw = response.data.symbols;
  return Object.keys(raw).map((code) => ({
    code,
    description: raw[code],
  }));
}
