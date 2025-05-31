export function getChangedData(change: number | undefined) {
  if (typeof change !== "number") {
    return { color: "default", label: "0.0000" };
  }

  const color = change > 0 ? "green" : change < 0 ? "red" : "default";
  const label = change >= 0 ? `+${change.toFixed(4)}` : change.toFixed(4);
  return { color, label };
}
