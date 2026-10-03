import type { Metadata } from "next";
import { ESSAYS, FEATURED_AT, IDEAS_PHOTOS, SITE } from "@/lib/site";
import { FieldGallery } from "@/components/field-gallery";

export const metadata: Metadata = {
  title: "Ideas & Influence",
  description:
    "Essays and speaking on FDI, special economic zones, cross-border investment and sustainable competitiveness.",
};

export default function IdeasPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-16 pb-8 sm:px-8 sm:pt-20">
      <p className="label-caps mb-4">Ideas &amp; Influence</p>
      <h1 className="max-w-3xl text-4xl leading-tight sm:text-5xl">
        Shaping the conversation on investment, trade and shared prosperity.
      </h1>
      <p className="prose-muted mt-6 max-w-2xl">
        I explore the future of FDI, Special Economic Zones, cross-border trade and investment,
        supply chain transformation and sustainable competitiveness – particularly at the
        intersection of the GCC, Europe, Africa and Asia. I&apos;m especially interested in
        challenging the perceived trade-off between commercial returns and positive impact.
      </p>
      <p className="prose-muted mt-4 max-w-2xl">
        The question isn&apos;t whether investment can do good. It&apos;s how we design investment
        ecosystems in which doing good strengthens competitiveness and commercial performance.
      </p>

      <section className="mt-16">
        <p className="label-caps mb-3">In the field</p>
        <p className="prose-muted mb-6 max-w-2xl">
          Speaking, panels and investment work across free zones, SEZs and FDI destinations.
        </p>
        <FieldGallery photos={IDEAS_PHOTOS} />
      </section>

      <section className="mt-16">
        <p className="label-caps mb-8">On Substack</p>
        <div className="grid gap-5 sm:grid-cols-2">
          {ESSAYS.map((essay) => (
            <a
              key={essay.title}
              href={SITE.substack}
              target="_blank"
              rel="noopener noreferrer"
              className="card-surface flex flex-col p-6"
            >
              <p className="label-caps">Essay</p>
              <h2 className="mt-3 text-xl">{essay.title}</h2>
              <p className="prose-muted mt-3 flex-1">{essay.excerpt}</p>
              <p className="mt-5 text-xs font-medium uppercase tracking-label text-graphite">
                Read on Substack →
              </p>
            </a>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <p className="label-caps mb-6">Featured at</p>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_AT.map((place) => (
            <li key={place} className="card-surface px-5 py-4 text-sm text-graphite">
              {place}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 card-surface p-8 sm:p-10">
        <h2 className="text-2xl">Join the newsletter</h2>
        <p className="prose-muted mt-3 max-w-xl">
          Writing on FDI, economic zones and the design of investment ecosystems that create both
          commercial value and shared prosperity.
        </p>
        <a href={SITE.substack} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6">
          Subscribe on Substack
        </a>
      </section>
    </div>
  );
}
