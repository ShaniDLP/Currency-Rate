import { format } from "date-fns";

export function formatTimestamp(timestampInSeconds: number): string {
  if (!timestampInSeconds) return "N/A";
  const date = new Date(timestampInSeconds * 1000);
  return format(date, "yyyy-MM-dd HH:mm:ss");
}
