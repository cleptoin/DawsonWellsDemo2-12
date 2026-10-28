"use client";

import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ArtworkImage } from "@/types/content";

export function ArtworkGallery({ images, title }: { images: ArtworkImage[]; title: string }) {
  const [active, setActive] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const mainImage = images[active];

  const move = useCallback((direction: number) => setActive((index) => (index + direction + images.length) % images.length), [images.length]);
  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (!dialogRef.current?.open) return;
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [move]);

  return (
    <div className="artwork-gallery">
      <button className="artwork-gallery__main" type="button" onClick={open} aria-label={`Expand image of ${title}`}>
        <Image key={mainImage.src + active} src={mainImage.src} alt={mainImage.alt} width={mainImage.width} height={mainImage.height} sizes="(max-width: 900px) 100vw, 66vw" priority />
        <span><Expand size={18} aria-hidden="true" /> Inspect image</span>
      </button>
      <div className="artwork-thumbnails" aria-label="Artwork image selection">
        {images.map((image, index) => (
          <button key={`${image.src}-${index}`} type="button" aria-label={`View image ${index + 1} of ${title}`} aria-pressed={active === index} onClick={() => setActive(index)}>
            <Image src={image.src} alt="" width={160} height={120} />
          </button>
        ))}
      </div>
      <p className="image-caption">{mainImage.caption}</p>
      <dialog className="lightbox" ref={dialogRef} aria-label={`Expanded images of ${title}`} onClick={(event) => { if (event.target === dialogRef.current) close(); }}>
        <button className="lightbox__close icon-button" type="button" onClick={close} aria-label="Close expanded image"><X aria-hidden="true" /></button>
        <button className="lightbox__previous icon-button" type="button" onClick={() => move(-1)} aria-label="Previous image"><ChevronLeft aria-hidden="true" /></button>
        <div className="lightbox__image">
          <Image src={mainImage.src} alt={mainImage.alt} width={mainImage.width} height={mainImage.height} sizes="95vw" />
          <p>{active + 1} / {images.length} · {mainImage.caption}</p>
        </div>
        <button className="lightbox__next icon-button" type="button" onClick={() => move(1)} aria-label="Next image"><ChevronRight aria-hidden="true" /></button>
      </dialog>
    </div>
  );
}
