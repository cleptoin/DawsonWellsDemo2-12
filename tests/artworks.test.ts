import { describe, expect, it } from "vitest";
import { artworks } from "@/data/artworks";
import { artworkCategories } from "@/types/content";

describe("demonstration artwork dataset", () => {
  it("contains 100 uniquely addressable records", () => {
    expect(artworks).toHaveLength(100);
    expect(new Set(artworks.map((artwork) => artwork.slug)).size).toBe(100);
  });

  it("contains 20 records in every supported category", () => {
    for (const category of artworkCategories) {
      expect(artworks.filter((artwork) => artwork.category === category)).toHaveLength(20);
    }
  });

  it("clearly marks every generated record as demonstration inventory", () => {
    expect(artworks.every((artwork) => artwork.inventoryStatus === "demonstration")).toBe(true);
  });
});
