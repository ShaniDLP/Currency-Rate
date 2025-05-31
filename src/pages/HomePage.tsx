import { useCallback } from "react";
import { useLocalStorage, useExchangeRates } from "../hooks";
import { AddCurrency, CurrencyTable } from "../components";
import { DEFAULT_CURRENCIES } from "../constants/defaultCurrencies";
import { Button, Spin, Typography, Result } from "antd";

export function HomePage() {
  const [currencies, setCurrencies] = useLocalStorage(
    "selected-currencies",
    DEFAULT_CURRENCIES
  );
  const { data, isLoading, error } = useExchangeRates(currencies);

  const reset = () => setCurrencies(DEFAULT_CURRENCIES);

  const addCurrency = useCallback(
    (code: string) => {
      if (!currencies.includes(code)) setCurrencies([...currencies, code]);
    },
    [currencies, setCurrencies]
  );

  const removeCurrency = useCallback(
    (code: string) => {
      setCurrencies(currencies.filter((currency) => currency !== code));
    },
    [currencies, setCurrencies]
  );

  return (
    <div
      style={{
        fontFamily: "Mulish, sans-serif",
        padding: "2rem",
        minHeight: "100vh",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Typography.Title
        level={2}
        style={{ textAlign: "center", marginBottom: "2rem", color: "white" }}
      >
        Currency Exchange Rates
      </Typography.Title>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "2rem",
        }}
      >
        <AddCurrency selected={currencies} onAdd={addCurrency} />
        <Button onClick={reset} aria-label="Reset currency list">
          Reset
        </Button>
      </div>

      {isLoading ? <Spin /> : null}

      {error ? (
        <div style={{ background: "white", borderRadius: "4px" }}>
          <Result
            status="500"
            title="Failed to Load Exchange Rates"
            subTitle="Please check your internet connection or try again later."
          />
        </div>
      ) : data ? (
        <CurrencyTable
          data={data.rates}
          timestamp={data.timestamp}
          onRemove={removeCurrency}
          showFlags={true}
        />
      ) : null}
    </div>
  );
}
