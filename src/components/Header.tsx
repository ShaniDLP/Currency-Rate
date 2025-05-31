import { Typography } from "antd";
import { EuroCircleOutlined } from "@ant-design/icons";

export function Header() {
  return (
    <div
      className="header-container"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: "16px 24px",
      }}
    >
      <Typography.Title level={4} style={{ margin: 0, color: "#ffffff" }}>
        MyExchange Inc.
      </Typography.Title>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <EuroCircleOutlined style={{ color: "#ffffff", fontSize: 20 }} />
        <Typography.Text style={{ color: "#ffffff" }}>
          Base Currency: EUR
        </Typography.Text>
      </div>
    </div>
  );
}
