import { Select, Button, Space } from "antd";
import { useCurrencySymbols } from "../hooks";
import { useState } from "react";

type Props = {
  selected: string[];
  onAdd: (code: string) => void;
};

export function AddCurrency({ selected, onAdd }: Props) {
  const { data, isLoading } = useCurrencySymbols();
  const [newCode, setNewCode] = useState<string | undefined>();

  const options = (data || [])
    .filter((s) => !selected.includes(s.code))
    .map((s) => ({ value: s.code, label: `${s.code} - ${s.description}` }));

  return (
    <Space style={{ marginBottom: 16 }}>
      <Select
        style={{ width: 240 }}
        loading={isLoading}
        options={options}
        value={newCode}
        onChange={setNewCode}
        placeholder="Select currency"
        notFoundContent="No more currencies"
        showSearch
      />
      <Button
        onClick={() => {
          if (newCode) {
            onAdd(newCode);
            setNewCode(undefined);
          }
        }}
        disabled={!newCode}
      >
        Add
      </Button>
    </Space>
  );
}
