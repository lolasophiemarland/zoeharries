"use client";

import { useState } from "react";
import { Photo } from "@/components/photo";

type GalleryPhoto = { src: string; alt: string };

function collapsedClass(index: number) {
  if (index >= 12) return "hidden";
  if (index >= 9) return "hidden lg:block";
  if (index >= 6) return "hidden sm:block";
  return "";
}

export function FieldGallery({ photos }: { photos: readonly GalleryPhoto[] }) {
  const [open, setOpen] = useState(false);
  const canToggle = photos.length > 6;

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {photos.map((photo, index) => (
          <Photo
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            className={`aspect-[4/3] ${open ? "" : collapsedClass(index)}`}
            imageClassName="object-cover object-center"
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 30vw, 50vw"
          />
        ))}
      </div>
      {canToggle ? (
        <div className="mt-6 flex justify-center">
          <button type="button" className="btn-outline" onClick={() => setOpen((value) => !value)}>
            {open ? "Close gallery" : "Open gallery"}
          </button>
        </div>
      ) : null}
    </div>
  );
}
