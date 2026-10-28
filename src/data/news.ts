import { demoImages } from "@/data/image-manifest";
import type { NewsArticle } from "@/types/content";

export const newsArticles: NewsArticle[] = [
  {
    slug: "the-material-of-light-exhibition",
    title: "The Material of Light: Large Format Inscriptions & Monoliths",
    date: "2026-10-15",
    category: "Exhibition",
    coverImage: demoImages.Paintings,
    excerpt: "A concept exhibition bringing monumental mineral paintings and large-format photographic studies into one architectural sequence.",
    body: [
      "The Material of Light is imagined as a full-gallery presentation pairing large-scale paintings with photographic studies. The installation follows the relationship between mineral surface, changing daylight, and the spatial weight of monochrome form.",
      "Works from Mineral Inscriptions and The Light Architecture Series are placed in conversation, moving from dense material fields to quieter photographic intervals.",
      "This editorial record is part of the Dawson Wells Gallery demo and does not describe a real scheduled exhibition.",
    ],
    demonstration: true,
  },
  {
    slug: "forms-from-earth-wood-and-flame",
    title: "Forms from Earth, Wood & Flame",
    date: "2027-02-12",
    category: "Exhibition",
    coverImage: demoImages.Ceramics,
    excerpt: "A demo presentation of wood-fired ceramic forms and works on paper organized around ash, carbon, and gesture.",
    body: [
      "Forms from Earth, Wood & Flame brings the Vessels of Containment together with selected works from Orbital Notations. The pairing follows the marks left by prolonged firing, hand pressure, ink, and mineral sediment.",
      "Ceramic forms are imagined on low stone plinths, with drawings held at a deliberately intimate scale to create alternating rhythms of mass and line.",
      "This is illustrative editorial content for the gallery concept.",
    ],
    demonstration: true,
  },
  {
    slug: "works-and-inscriptions-volume-one",
    title: "Dawson Wells: Works & Inscriptions",
    date: "2026-09-01",
    category: "Publication",
    coverImage: demoImages.Prints,
    excerpt: "A concept publication bringing the five material strands of the demo collection into a single visual archive.",
    body: [
      "Works & Inscriptions is conceived as a visual index of photography, painting, drawing, ceramics, and printmaking, with extended attention to process and material detail.",
      "The publication structure includes full-page plates, studio details, and short notes that connect individual works to their wider series.",
      "The title and publication information are demonstration content for this website concept.",
    ],
    demonstration: true,
  },
  {
    slug: "architecture-of-silence-viewing-room",
    title: "The Architecture of Silence",
    date: "2026-08-18",
    category: "Journal",
    coverImage: demoImages.Photography,
    excerpt: "A digital viewing-room essay pairing coastal photographs, mineral canvases, and folded vessels.",
    body: [
      "The Architecture of Silence considers how very different objects can share a common spatial temperament. Horizon lines, folded ceramic walls, and fields of ground mineral pigment each create their own form of measured stillness.",
      "The selection is drawn from the demo catalog and is intended to demonstrate a slower, editorial route through the collection.",
    ],
    demonstration: true,
  },
];
