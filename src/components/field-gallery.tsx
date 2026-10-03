"use client";

import { useEffect, useState } from "react";
import { Photo } from "@/components/photo";

type GalleryPhoto = { src: string; alt: string };

function previewCountForWidth(width: number) {
  if (width >= 1024) return 12;
  if (width >= 640) return 9;
  return 6;
}

export function FieldGallery({ photos }: { photos: readonly GalleryPhoto[] }) {
  const [open, setOpen] = useState(false);
  const [previewCount, setPreviewCount] = useState(12);

  useEffect(() => {
    const update = () => setPreviewCount(previewCountForWidth(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const visible = open ? photos : photos.slice(0, previewCount);
  const canToggle = photos.length > previewCount;

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {visible.map((photo) => (
          <Photo
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            className="aspect-[4/3]"
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
