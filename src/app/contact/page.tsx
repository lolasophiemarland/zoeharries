import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { EnquireForm } from "@/components/enquire-form";
import { Photo } from "@/components/photo";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for advisory, speaking and media inquiries.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-16 pb-8 sm:px-8 sm:pt-20">
      <p className="label-caps mb-4">Contact</p>
      <h1 className="text-4xl sm:text-5xl">Get in touch</h1>
      <p className="prose-muted mt-5 max-w-xl">
        For advisory, speaking and media inquiries. I read every message personally.
      </p>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="label-caps mb-6">Send a message</p>
          <EnquireForm kind="contact" />
        </div>
        <aside>
          <Photo
            src="/photos/zoe-harries-impact-zones-red-sea-investment-destination.jpg"
            alt="Zoë Harries of Impact Zones at a Red Sea investment destination for FDI and SEZs"
            className="mb-8 aspect-[3/4]"
            imageClassName="object-cover object-[center_58%]"
            sizes="(min-width: 1024px) 360px, 100vw"
          />
          <p className="label-caps mb-4">Connect directly</p>
          <ul className="space-y-4 text-sm">
            <li>
              <p className="text-subtle">LinkedIn</p>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-graphite hover:opacity-70"
              >
                linkedin.com/in/zoeharries
              </a>
            </li>
            <li>
              <p className="text-subtle">Substack</p>
              <a
                href={SITE.substack}
                target="_blank"
                rel="noopener noreferrer"
                className="text-graphite hover:opacity-70"
              >
                zoeharries.substack.com
              </a>
            </li>
            <li>
              <p className="text-subtle">Email</p>
              <a href={`mailto:${SITE.email}`} className="text-graphite hover:opacity-70">
                {SITE.email}
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
