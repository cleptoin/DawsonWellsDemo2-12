import type { Metadata } from "next";
import { CategoryPage } from "@/components/category-page";
export const metadata: Metadata = { title: "Photography", description: "Browse The Light Architecture Series in the Dawson Wells Gallery concept collection.", alternates: { canonical: "/artworks/photography" } };
export default function Page() { return <CategoryPage category="Photography" />; }
