import type { Metadata } from "next";
import { CategoryPage } from "@/components/category-page";
export const metadata: Metadata = { title: "Ceramics", description: "Browse Vessels of Containment in the Dawson Wells Gallery concept collection.", alternates: { canonical: "/artworks/ceramics" } };
export default function Page() { return <CategoryPage category="Ceramics" />; }
