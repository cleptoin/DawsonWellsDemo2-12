import type { ArtworkCategory, ArtworkImage } from "@/types/content";

export const demoImages: Record<ArtworkCategory | "Gallery", ArtworkImage> = {
  Paintings: {
    src: "/images/artworks/painting-mineral-field.png",
    alt: "Mineral-field painting in bone, charcoal, umber and rust",
    width: 1536,
    height: 1024,
  },
  Photography: {
    src: "/images/artworks/photography-breakwater.png",
    alt: "Fine-art photograph of a concrete breakwater in fog",
    width: 1152,
    height: 1408,
  },
  Drawings: {
    src: "/images/artworks/drawing-orbit-study.png",
    alt: "Charcoal drawing with arcs and a dense black passage",
    width: 1152,
    height: 1536,
  },
  Ceramics: {
    src: "/images/artworks/ceramic-folded-vessel.png",
    alt: "Hand-built folded ceramic vessel with an ash glaze",
    width: 1152,
    height: 1536,
  },
  Prints: {
    src: "/images/artworks/print-counterform.png",
    alt: "Relief print with black and rust architectural forms",
    width: 1536,
    height: 1152,
  },
  Gallery: {
    src: "/images/artworks/gallery-interior.jpg",
    alt: "Quiet contemporary gallery interior with daylight across the walls",
    width: 1400,
    height: 788,
  },
};

const image = (src: string, alt: string, width: number, height: number): ArtworkImage => ({ src, alt, width, height });

/** Rotating catalogue photography per medium; the first entry is the medium's lead image. */
export const categoryImageSets: Record<ArtworkCategory, ArtworkImage[]> = {
  Photography: [
    demoImages.Photography,
    image("/images/artworks/photo-01.jpg", "Large-format photograph of coastal mist and structure", 840, 1050),
    image("/images/artworks/photo-02.jpg", "Atmospheric landscape photograph in soft grey light", 1200, 896),
    image("/images/artworks/photo-03.jpg", "Monochrome photograph of a horizon and architectural form", 1200, 896),
  ],
  Paintings: [
    demoImages.Paintings,
    image("/images/artworks/painting-01.jpg", "Mineral painting with layered earth pigments on linen", 1400, 933),
    image("/images/artworks/painting-02.jpg", "Large monochrome painting with a textured plaster surface", 1200, 896),
    image("/images/artworks/painting-03.jpg", "Abstract painting in umber, indigo and bone tones", 1200, 896),
  ],
  Drawings: [
    demoImages.Drawings,
    image("/images/artworks/drawing-01.jpg", "Graphite and charcoal drawing with a single sweeping arc", 788, 1050),
    image("/images/artworks/drawing-02.jpg", "Ink and graphite drawing on heavy rag paper", 1200, 896),
    image("/images/artworks/drawing-03.jpg", "Sumi ink gesture drawing on handmade paper", 1200, 896),
  ],
  Ceramics: [
    demoImages.Ceramics,
    image("/images/artworks/ceramic-01.jpg", "Wood-fired stoneware vessel with a natural ash glaze", 840, 1050),
    image("/images/artworks/ceramic-02.jpg", "Hand-built ceramic forms in basalt and smoked clay", 1200, 896),
    image("/images/artworks/ceramic-03.jpg", "Sculptural ceramic vessel on a stone plinth", 1200, 896),
  ],
  Prints: [
    demoImages.Prints,
    image("/images/artworks/print-01.jpg", "Woodcut print with black and rust relief forms", 1400, 1050),
    image("/images/artworks/print-02.jpg", "Aquatint print with nocturnal tonal fields", 1200, 896),
    image("/images/artworks/print-03.jpg", "Stone lithograph with layered architectural planes", 1200, 896),
  ],
};

export const artistPortrait: ArtworkImage = {
  src: "/images/artist/dawson-wells.jpg",
  alt: "Portrait of Dawson Wells, artist and founder",
  width: 600,
  height: 600,
};
