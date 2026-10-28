import type { Dimensions } from "@/types/content";

export function formatDimensions(dimensions: Dimensions): string {
  const parts = [dimensions.height, dimensions.width, dimensions.depth].filter(
    (value): value is number => typeof value === "number",
  );
  return `${parts.join(" × ")} ${dimensions.unit}`;
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(
    new Date(date),
  );
}
