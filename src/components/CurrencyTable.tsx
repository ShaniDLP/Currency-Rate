import { Table, Button, Tooltip, Tag } from "antd";
import { MinusOutlined } from "@ant-design/icons";
import { currencyToCountryCode } from "../utils/currencyToCountry";
import { getChangedData, formatTimestamp } from "../utils";
import type { CurrencyRate } from "../types/currency";

interface Props {
  data: CurrencyRate[];
  timestamp: number;
  showFlags?: boolean;
  onRemove: (code: string) => void;
}

export function CurrencyTable({
  data,
  timestamp,
  showFlags = false,
  onRemove,
}: Props) {
  const columns = [
    {
      title: "Currency",
      dataIndex: "code",
      key: "code",
      render: (code: string) => (
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {showFlags && currencyToCountryCode[code] && (
            <span
              className={`fi fi-${currencyToCountryCode[code]}`}
              style={{ width: 24 }}
            ></span>
          )}
          <span>{code}</span>
        </div>
      ),
    },
    {
      title: "Rate",
      dataIndex: "rate",
      key: "rate",
      render: (rate: number) => rate.toFixed(4),
    },
    {
      title: "Change",
      dataIndex: "change",
      key: "change",
      render: (change: number | undefined) => {
        const { color, label } = getChangedData(change);
        return <Tag color={color}>{label}</Tag>;
      },
    },
    {
      title: "",
      dataIndex: "code",
      key: "remove",
      render: (code: string) => (
        <Tooltip title="Remove">
          <Button
            type="text"
            icon={<MinusOutlined />}
            onClick={() => onRemove(code)}
          />
        </Tooltip>
      ),
    },
  ];

  return (
    <div style={{ maxWidth: 700, width: "100%" }}>
      <div
        style={{
          alignSelf: "flex-start",
          marginBottom: "1rem",
          fontSize: "0.9rem",
          color: "#bbb",
        }}
      >
        Last update: {timestamp ? formatTimestamp(timestamp) : "N/A"}
      </div>
      <Table
        columns={columns}
        dataSource={data}
        rowKey="code"
        pagination={false}
      />
    </div>
  );
}
