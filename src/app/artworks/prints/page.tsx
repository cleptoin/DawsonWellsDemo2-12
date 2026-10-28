import type { Metadata } from "next";
import { CategoryPage } from "@/components/category-page";
export const metadata: Metadata = { title: "Prints", description: "Browse The Counterform Editions in the Dawson Wells Gallery concept collection.", alternates: { canonical: "/artworks/prints" } };
export default function Page() { return <CategoryPage category="Prints" />; }
