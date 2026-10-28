import type { Metadata } from "next";
import { CategoryPage } from "@/components/category-page";
export const metadata: Metadata = { title: "Drawings", description: "Browse Orbital Notations in the Dawson Wells Gallery concept collection.", alternates: { canonical: "/artworks/drawings" } };
export default function Page() { return <CategoryPage category="Drawings" />; }
