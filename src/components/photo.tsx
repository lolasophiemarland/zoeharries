import Image from "next/image";

export function Photo({
  src,
  alt,
  className = "",
  imageClassName = "object-cover",
  sizes = "(min-width: 1024px) 560px, 100vw",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={`photo-frame relative ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={imageClassName} />
    </div>
  );
}
