import Image from "next/image";
import { SITE } from "@/lib/site";

export function ImpactZonesMark({ className = "" }: { className?: string }) {
  return (
    <a
      href={SITE.impactZones}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex flex-col ${className}`}
    >
      <Image
        src="/logos/impact-zones.svg"
        alt="Impact Zones FDI"
        width={140}
        height={96}
        className="h-16 w-auto"
      />
      <span className="mt-2 text-xs leading-relaxed text-subtle group-hover:text-muted">
        Founder &amp; Managing Director
      </span>
    </a>
  );
}
