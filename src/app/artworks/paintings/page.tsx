import type { Metadata } from "next";
import { CategoryPage } from "@/components/category-page";
export const metadata: Metadata = { title: "Paintings", description: "Browse Mineral Inscriptions in the Dawson Wells Gallery concept collection.", alternates: { canonical: "/artworks/paintings" } };
export default function Page() { return <CategoryPage category="Paintings" />; }
