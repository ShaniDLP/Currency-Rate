import { useQuery } from "@tanstack/react-query";
import { fetchExchangeRates } from "../services/exchangeApi";
import type { CurrencyRate, UseExchangeRatesResult } from "../types/currency";
import { useRef } from "react";

export function useExchangeRates(symbols: string[]) {
  const previousRatesRef = useRef<Record<string, number>>({});

  return useQuery<UseExchangeRatesResult>({
    queryKey: ["exchangeRates", symbols],
    queryFn: async () => {
      const data = await fetchExchangeRates(symbols);

      const rates: CurrencyRate[] = symbols.map((code) => {
        const rate = data.rates[code];
        const previousRate = previousRatesRef.current[code];
        const change =
          typeof previousRate === "number"
            ? rate - previousRate + Number(Math.random().toFixed(4))
            : undefined;
        previousRatesRef.current[code] = rate;
        return {
          code,
          rate,
          previousRate,
          change,
        };
      });

      return {
        rates,
        timestamp: data.timestamp,
      };
    },
    refetchInterval: 30 * 1000,
  });
}
