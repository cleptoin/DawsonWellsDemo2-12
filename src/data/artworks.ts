import { categoryImageSets, demoImages } from "@/data/image-manifest";
import type { Artwork, ArtworkCategory } from "@/types/content";

interface CatalogueGroup {
  code: string;
  series: string;
  titles: string[];
  media: string[];
  description: string;
}

const catalogue: Record<ArtworkCategory, CatalogueGroup> = {
  Photography: {
    code: "ph",
    series: "The Light Architecture Series",
    titles: [
      "Breakwater in Atlantic Mist (Study I)",
      "Luminescence No. 07 (Atmospheric Gradient)",
      "Smith & Wesson Structural Inscription (Study IX)",
      "Tennessee Horizon & Morning Mist (Fairway Study)",
      "Tidal Measure: Monolith & Fog",
      "North Wall Concrete Cadence (Exposure IV)",
      "Weather Line: High Desert Dawn",
      "Quiet Sound: Penobscot Bay Horizon",
      "Outer Harbour Granite Study",
      "Plateau Twilight: Obsidian Shadow",
      "Salt Air Cadence: Atlantic Threshold",
      "Granite Threshold (Study XII)",
      "Basalt Shallows at Low Tide",
      "Monolithic Silo in Winter Fog",
      "Hudson River Daylight Study (Nocturne IV)",
      "Structural Horizon: Steel & Cloud",
      "Limestone Rift: Coastal Quarry Study",
      "Atmospheric Inscription: Dawn Solitude",
      "Tectonic Axis: View Camera Study XVIII",
      "Luminescence No. 12 (Twilight Field)",
    ],
    media: [
      "Silver gelatin print on double-weight fiber paper, selenium-toned",
      "Platinum-palladium contact print on hand-coated Japanese gampi paper",
      "Archival pigment print on 310gsm Hahnemühle Photo Rag",
      "Direct dye sublimation on brushed matte dibond panel",
    ],
    description: "Investigating the boundary between ephemeral daylight and monumental structure, this series isolates quiet optical cadences through large-format photographic processes.",
  },
  Paintings: {
    code: "pa",
    series: "Mineral Inscriptions",
    titles: [
      "Mineral Field in Bone, Umber & Rust",
      "Chromatic Field: Deep Crimson & Midnight Navy",
      "Nocturne: Deep Umber and Field Indigo",
      "Strata Monochrome in Limestone & Gypsum",
      "Held Light: Ochre Sediment on Linen",
      "Threshold Study: Carrara Plaster & Charcoal",
      "After Rain: Raw Umber & Zinc Ground",
      "Open Ground: Monumental Bone Monochrome",
      "Equinox Passage: Terracotta & Beeswax",
      "Vesper Field in Charred Bone & Walnut Oil",
      "Sedimentary Cadence (Study VII)",
      "Subterranean Resonances in Raw Linen",
      "Monolithic Slab: Cobalt & Basalt Dust",
      "Tectonic Horizon in Calcified Plaster",
      "Winter Twilight: Cold Wax & Slate Dust",
      "Earthen Inscription: Raw Selvedge Linen",
      "Chromatic Density: Iron Oxide & Black Pitch",
      "Architectural Plane: White Gypsum & Raw Ash",
      "Sediment Horizon (Study XIV)",
      "Mineral Field II: Bone, Charcoal & Rust",
    ],
    media: [
      "Oil, ground Carrara marble dust, raw umber, and beeswax on Belgian linen",
      "Distemper, natural Japanese indigo dye, graphite, and oil on raw unprimed canvas",
      "Pigment, pulverized slate, gypsum plaster, and walnut oil on heavy linen",
      "Cold wax medium, iron oxide, and ground limestone on linen",
    ],
    description: "These monumental material studies treat the painted surface as an architectural plane, using mineral grounds, wax, earth pigments, and raw linen to hold and refract light.",
  },
  Drawings: {
    code: "dr",
    series: "Orbital Notations",
    titles: [
      "Orbit Study No. 04 (Arc & Density)",
      "Chthonic Study No. 12 (Subterranean Cadence)",
      "Pressure Mark: Burnished Carbon on Rag",
      "Held Arc: Silverpoint on Bone Gesso",
      "Erased Field: Graphite & Chalk on Arches",
      "Interval: Charcoal Notation in Pure Void",
      "Sumi Gesture: Breath & River Sediment",
      "Cartography of Silence (Study VIII)",
      "Tectonic Axis: Compressed Carbon on Paper",
      "Deckled Horizon: Graphite Wash & Conte",
      "Orbital Inscription (State III)",
      "Lithic Notation: Pure Powdered Graphite",
      "Atmospheric Line: Silverpoint & Sepia",
      "Gravitational Field in Carbon Black",
      "Solitary Measure: Charcoal & Beeswax Resist",
      "Architectural Cadence on 640gsm Rag",
      "Void Study: Nara Sumi Ink & River Sand",
      "Threshold Line: Silver Needle on Gesso Panel",
      "Linear Monolith: Graphite & Slate Dust",
      "Orbit Study No. 09 (Monumental Arc)",
    ],
    media: [
      "Compressed carbon, powdered graphite, and conte on 640gsm Arches Aquarelle paper",
      "Pure silverpoint on hand-applied calcified bone-ash gesso panel",
      "Aged Nara sumi ink and river sediment washes on handmade Kozo paper",
      "Charcoal, walnut ink, and beeswax resist on 100% cotton rag",
    ],
    description: "Drawing is approached as a physical notation: graphite, carbon, silverpoint, ink, and resist register pressure, erasure, rhythm, and space across substantial paper surfaces.",
  },
  Ceramics: {
    code: "ce",
    series: "Vessels of Containment",
    titles: [
      "Monolithic Folded Vessel in Natural Wood Ash",
      "Monolithic Urn in Basalt & Smoked Clay",
      "Ash Form: 96-Hour Anagama Stoneware",
      "Quiet Volume: Hand-Coiled Coarse Vessel",
      "Open Body: Reduction Stoneware with Fly Ash",
      "Weathered Rim: Basalt & Volcanic Mineral Vessel",
      "Folded Slab Totem (Vertical Arch IV)",
      "Ovoid Form in Smoked Limoges Porcelain",
      "Shallow Basin in River Stone & Iron Celadon",
      "Anagama Vessel: Scorched Embers & Iron Slip",
      "Brutalist Monolith: Refractory Fireclay",
      "Saggar Fired Vessel in Mica & Carbon Fumes",
      "Primordial Cylinder: Coarse Feldspar Stoneware",
      "Tectonic Vessel in Black Basalt Slag",
      "Basin of Stillness: Micro-Craquelure Celadon",
      "Hudson Valley Wood-Fired Urn (State VI)",
      "Slab Inscription: Iron-Rich Earthenware",
      "Sculptural Amphora in Volcanic Ash Crust",
      "Chamber Vessel: 4-Day Oak Wood Combustion",
      "Monolithic Folded Vessel II (Travertine Plinth)",
    ],
    media: [
      "Hand-built coarse iron-rich stoneware, 96-hour anagama wood-fired with natural ash glaze",
      "Slab-constructed refractory fireclay, saggar fired with carbon fumes",
      "Wheel-thrown wild clay, heavy iron-rich celadon glaze with micro-craquelure",
      "Coarse stoneware with hand-applied Icelandic basalt slip",
    ],
    description: "Hand-built and wheel-thrown ceramic forms record prolonged firing, ash, flame, carbon, and mineral slip, holding a productive tension between vessel and sculpture.",
  },
  Prints: {
    code: "pr",
    series: "The Counterform Editions",
    titles: [
      "Counterform: Structural Relief in Black & Rust (State I)",
      "Aquatint Diptych: Nocturnal Tides (State II)",
      "Measured Plane: Woodcut on Kitakata Washi",
      "Rust Passage: Two-Plate Spit-Bite Aquatint",
      "Block Study: Relief Pear Woodcut on Mulberry",
      "Offset Room: Direct Bavarian Stone Lithograph",
      "Counterform II: Embossed Lampblack on Paper",
      "Chine-Collé Constellation in Silver & Graphite",
      "Woodcut Monolith in Carbon Black & Raw Linen",
      "Stone Lithograph: Cadence in Slate & Bone",
      "Aquatint Nocturne (Matched Plate IV)",
      "Hydraulic Impression: Embossed Woodgrain Relief",
      "Bavarian Stone Study: Tusche Wash & Crayon",
      "Nocturnal Tides (State III matched Diptych)",
      "Relief Inscription: Seasoned Pear Wood on Rag",
      "Chine-Collé Horizon on Nepalese Lokta Paper",
      "Cylinder Press Impression: Pure Lampblack",
      "Tectonic Plate: Sugar-Lift Aquatint on Somerset",
      "Architectural Print: Woodblock & Etched Copper",
      "Counterform III: Monumental State on Washi",
    ],
    media: [
      "Multi-block pear woodcut with spit-bite aquatint on 350gsm Kitakata washi paper",
      "Two-plate spit-bite and hard-ground aquatint on 350gsm Somerset Velvet paper",
      "Hand-pulled stone lithograph from Bavarian limestone on BFK Rives",
      "Etching with chine-collé of antique Nepalese Lokta paper on Arches Platine",
    ],
    description: "The Counterform Editions explore pressure, relief, registration, and the material intelligence of ink and paper through woodcut, aquatint, lithography, and chine-collé.",
  },
};

const categoryOrder = Object.keys(catalogue) as ArtworkCategory[];
const isoDate = "2026-10-28T00:00:00.000Z";

function slugify(value: string) {
  return value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function makeArtwork(category: ArtworkCategory, categoryIndex: number, itemIndex: number): Artwork {
  const group = catalogue[category];
  const globalIndex = categoryIndex * 20 + itemIndex + 1;
  const title = group.titles[itemIndex];
  const isCeramic = category === "Ceramics";
  const imageSet = categoryImageSets[category];
  const image = imageSet[itemIndex % imageSet.length];
  const detailImage = imageSet[(itemIndex + 1) % imageSet.length];
  const height = isCeramic ? 14 + (itemIndex % 8) * 2 : 32 + (itemIndex % 8) * 6;
  const width = isCeramic ? 12 + (itemIndex % 6) * 2 : 24 + (itemIndex % 6) * 6;
  const depth = isCeramic ? 10 + (itemIndex % 4) * 2 : undefined;
  const editionSize = 5 + (itemIndex % 5);
  const editionNumber = 1 + (itemIndex % 4);
  const isEdition = category === "Photography" || category === "Prints";

  return {
    id: `dw-${group.code}-${globalIndex.toString().padStart(3, "0")}`,
    slug: `${category.toLowerCase()}-${slugify(title)}`,
    title,
    category,
    description: group.description,
    year: 2021 + (itemIndex % 4),
    medium: group.media[itemIndex % group.media.length],
    dimensions: { height, width, depth, unit: "in" },
    images: [
      { ...image, alt: `${title}, ${category.toLowerCase()} catalogue image`, caption: `${title} · primary catalogue view` },
      { ...demoImages.Gallery, alt: `${title} shown in the gallery concept`, caption: "Gallery installation concept" },
      { ...detailImage, alt: `Related view for ${title}`, caption: `${title} · related view` },
    ],
    featured: itemIndex < 2,
    sortOrder: globalIndex,
    edition: isEdition ? `Edition of ${editionSize} + 2 AP (Edition ${editionNumber}/${editionSize})` : "Unique original work",
    additionalInformation: `${group.series} · concept catalogue entry · details and availability are illustrative.`,
    createdAt: isoDate,
    updatedAt: isoDate,
    inventoryStatus: "demonstration",
  };
}

export const artworks: Artwork[] = categoryOrder.flatMap((category, categoryIndex) =>
  catalogue[category].titles.map((_, itemIndex) => makeArtwork(category, categoryIndex, itemIndex)),
);
