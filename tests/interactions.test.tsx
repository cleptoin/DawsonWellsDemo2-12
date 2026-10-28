import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { CollectionBrowser } from "@/components/collection-browser";
import { InquiryForm } from "@/components/inquiry-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { artworks } from "@/data/artworks";

afterEach(() => vi.restoreAllMocks());

describe("interactive gallery controls", () => {
  it("closes ribbon dropdowns after choosing a link, clicking outside, or pressing Escape", async () => {
    render(<SiteHeader />);
    const about = screen.getByRole("button", { name: "About" });
    const artworks = screen.getByRole("button", { name: "Artworks" });

    fireEvent.click(artworks);
    expect(artworks).toHaveAttribute("aria-expanded", "true");
    fireEvent.click(screen.getByRole("link", { name: "Paintings" }));
    await waitFor(() => expect(screen.queryByRole("link", { name: "Paintings" })).not.toBeInTheDocument());
    expect(artworks).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(about);
    expect(screen.getByRole("link", { name: "About the gallery" })).toBeInTheDocument();
    fireEvent.click(artworks);
    expect(screen.queryByRole("link", { name: "About the gallery" })).not.toBeInTheDocument();
    fireEvent.pointerDown(document.body);
    await waitFor(() => expect(screen.queryByRole("link", { name: "All artworks" })).not.toBeInTheDocument());

    fireEvent.click(about);
    fireEvent.keyDown(document, { key: "Escape" });
    await waitFor(() => expect(screen.queryByRole("link", { name: "About the gallery" })).not.toBeInTheDocument());
    expect(about).toHaveFocus();
  });

  it("ends the footer with the Clepto concept credit and demo disclaimer", () => {
    render(<SiteFooter />);
    const ribbon = screen.getByRole("region", { name: "Concept credit" });
    expect(ribbon).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /www.clepto.in/ })).toHaveAttribute("href", "https://www.clepto.in");
    expect(ribbon).toHaveTextContent("Concept prepared for Dawson Wells Gallery by Clepto");
    expect(screen.getAllByText(/illustrative demo content/).length).toBeGreaterThan(0);
  });

  it("opens the mobile navigation and closes it with Escape", async () => {
    render(<SiteHeader />);
    const trigger = screen.getByRole("button", { name: "Open navigation" });
    fireEvent.click(trigger);
    expect(screen.getByRole("dialog", { name: "Site navigation" })).toBeInTheDocument();
    fireEvent.keyDown(document, { key: "Escape" });
    await waitFor(() => expect(screen.queryByRole("dialog", { name: "Site navigation" })).not.toBeInTheDocument());
    expect(trigger).toHaveFocus();
  });

  it("opens site search by button, filters records, and restores focus on close", async () => {
    render(<SiteHeader />);
    const trigger = screen.getByRole("button", { name: "Search collection and journal" });
    fireEvent.click(trigger);
    expect(screen.getByRole("dialog", { name: "Search Dawson Wells Gallery" })).toBeInTheDocument();
    fireEvent.change(screen.getByRole("searchbox", { name: "Search the site" }), { target: { value: "Mineral Field" } });
    expect(await screen.findByRole("link", { name: /^Mineral Field in Bone, Umber & RustPaintings/ })).toBeInTheDocument();
    fireEvent.keyDown(document, { key: "Escape" });
    await waitFor(() => expect(screen.queryByRole("dialog", { name: "Search Dawson Wells Gallery" })).not.toBeInTheDocument());
    expect(trigger).toHaveFocus();
  });

  it("filters the collection and exposes a useful empty state", () => {
    render(<CollectionBrowser initialArtworks={artworks.slice(0, 8)} />);
    fireEvent.change(screen.getByRole("searchbox", { name: "Search collection" }), { target: { value: "not in this archive" } });
    expect(screen.getByText("No artworks match these filters.")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Clear filters" }));
    expect(screen.getByText("8 artworks")).toBeInTheDocument();
  });

  it("validates required fields and reports the no-delivery demo state", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true, json: async () => ({ demo: true }) }));
    render(<InquiryForm artwork="Mineral Field" />);
    fireEvent.click(screen.getByRole("button", { name: "Prepare inquiry" }));
    expect(screen.getByText("Enter your full name.")).toBeInTheDocument();
    fireEvent.change(screen.getByLabelText(/Full name/), { target: { value: "Avery Chen" } });
    fireEvent.change(screen.getByLabelText(/Email address/), { target: { value: "avery@example.com" } });
    fireEvent.change(screen.getByRole("textbox", { name: /Message/ }), { target: { value: "Please share more information about this demonstration artwork." } });
    fireEvent.click(screen.getByRole("checkbox"));
    fireEvent.click(screen.getByRole("button", { name: "Prepare inquiry" }));
    expect(await screen.findByText("Your message is prepared, but it has not been sent.")).toBeInTheDocument();
  });
});
