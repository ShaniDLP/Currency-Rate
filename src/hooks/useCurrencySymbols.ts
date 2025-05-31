import { useQuery } from "@tanstack/react-query";
import { fetchCurrencySymbols } from "../services/exchangeApi";

export function useCurrencySymbols() {
  return useQuery({
    queryKey: ["currencySymbols"],
    queryFn: fetchCurrencySymbols,
  });
}
