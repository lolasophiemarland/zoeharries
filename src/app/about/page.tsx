import type { Metadata } from "next";
import { Photo } from "@/components/photo";
import { CREDENTIALS, CURIOSITIES, ESG, LEADERSHIP_STEPS, ORGANISATION_LOGOS, PLACES, PRACTICE_AREAS, SUPERPOWERS, WHY_ME } from "@/lib/site";
import { ImpactZonesMark } from "@/components/impact-zones-mark";

export const metadata: Metadata = {
  title: "About",
  description:
    "Purpose, Humanitarian Capitalism and leadership – Zoë Harries on connecting people, markets and capital across borders.",
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-6xl px-5 pt-16 pb-8 sm:px-8 sm:pt-20">
      <div className="max-w-3xl">
        <p className="label-caps mb-4">Identity</p>
        <h1 className="text-4xl leading-tight sm:text-5xl">
          Humanitarian Capitalist. Global Connector. Opportunity Architect.
        </h1>
        <p className="prose-muted mt-6">
          I build bridges between markets, cultures, governments and capital – translating between
          different worlds to create opportunities that none could realize alone.
        </p>
        <p className="prose-muted mt-4">
          My life has been about crossing borders. My work is about making them easier for opportunity
          to cross.
        </p>
      </div>

      <Photo
        src="/photos/zoe-harries-impact-zones-bnew-fdi-panel.jpg"
        alt="Zoë Harries of Impact Zones on a BNEW Barcelona panel on FDI and special economic zones"
        className="mt-12 aspect-[16/9] w-full"
        imageClassName="object-cover object-[center_42%]"
        sizes="(min-width: 1024px) 1152px, 100vw"
      />

      <section className="mt-16 max-w-3xl">
        <h2 className="text-2xl">Purpose</h2>
        <p className="prose-muted mt-4">
          To connect people, markets and capital across borders, creating opportunity, freedom and
          shared prosperity.
        </p>
      </section>

      <section className="mt-16">
        <div className="max-w-3xl">
        <h2 className="text-2xl">Humanitarian Capitalism – My Thesis</h2>
        <p className="mt-4 text-xl font-light text-graphite">
          Capitalism with purpose, not capitalism without profit.
        </p>
        <p className="prose-muted mt-4">
          I believe markets, enterprise, investment and trade are extraordinary engines of human
          progress. The challenge is not to choose between profitability and purpose, but to
          structure economic opportunity so that commercial success creates wider prosperity.
        </p>
        <p className="prose-muted mt-4">
          Capital needs returns. People need opportunity. Governments need growth. The planet needs
          stewardship. The most powerful investment models are those capable of delivering all four.
        </p>
        <p className="prose-muted mt-4">
          That&apos;s how I read ESG in an FDI and SEZ context, too – not as a compliance checklist:
        </p>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {ESG.map((item) => (
            <article key={item.title} className="card-surface p-5">
              <p className="label-caps">{item.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
            </article>
          ))}
        </div>
        <blockquote className="mt-8 max-w-3xl border-l border-graphite pl-5 text-lg font-light text-graphite">
          Sustainability does not attract investment because it is good. It attracts investment when
          it makes a location more competitive.
        </blockquote>
      </section>

      <section className="mt-16 max-w-3xl">
        <h2 className="text-2xl">Where This Shows Up</h2>
        <p className="mt-5 flex flex-wrap gap-2">
          {PRACTICE_AREAS.map((area) => (
            <span key={area} className="rounded-sm border border-line bg-card px-3 py-1.5 text-xs uppercase tracking-label text-muted">
              {area}
            </span>
          ))}
        </p>
        <p className="prose-muted mt-6">
          In practice: FDI strategy, greenfield economic city and SEZ development, investment
          attraction, and strengthening trade and investment corridors between the GCC, Europe,
          Africa and Asia Pacific – including the supply chain relationships that determine whether
          an investment destination actually competes.
        </p>
      </section>

      <section className="mt-16">
        <div className="max-w-3xl">
        <h2 className="text-2xl">A Global Perspective</h2>
        <p className="prose-muted mt-4">
          Born in South Africa, raised in the Netherlands, and having lived and worked across the
          Netherlands, Belgium, South Africa, the UAE, Saudi Arabia and Brunei, I&apos;m based between
          Dubai + Zürich.
        </p>
        <p className="prose-muted mt-4">
          Living across Africa, Europe, the Middle East and Southeast Asia has taught me to look at
          economic opportunity from more than one side of the table. Investors, governments and
          communities can want very different things from the same project – much of my work is about
          finding the alignment between them.
        </p>
        <p className="mt-5 flex flex-wrap gap-2">
          {PLACES.map((place) => (
            <span key={place} className="text-xs uppercase tracking-label text-subtle">
              {place}
            </span>
          ))}
        </p>
        </div>
        <div className="mt-10 max-w-3xl">
          <p className="label-caps">Credentials</p>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {CREDENTIALS.map((item) => (
              <li key={item} className="py-3 text-sm text-graphite">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <ul className="mt-8 grid max-w-3xl grid-cols-3 items-center gap-x-6 gap-y-7 sm:gap-x-10">
          {ORGANISATION_LOGOS.map((logo) => (
            <li key={logo.src} className="group flex h-10 items-center justify-center">
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-7 w-auto max-w-full object-contain opacity-80 grayscale mix-blend-multiply transition duration-300 ease-out group-hover:opacity-100 group-hover:grayscale-0 group-hover:mix-blend-normal"
              />
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 max-w-3xl">
        <h2 className="text-2xl">Why me</h2>
        <p className="prose-muted mt-4">{WHY_ME}</p>
      </section>

      <section className="mt-16 max-w-3xl border-y border-line py-12">
        <p className="label-caps mb-4">Impact Zones</p>
        <ImpactZonesMark />
        <p className="prose-muted mt-5">
          Advisory, resources and the expert network live at Impact Zones. This site is the
          philosophy behind that work.
        </p>
      </section>

      <section className="mt-16 max-w-3xl">
        <h2 className="text-2xl">Ideas &amp; Influence</h2>
        <p className="prose-muted mt-4">
          My work isn&apos;t only about delivering projects. I want to shape the conversation around
          how investment, trade and economic zones can contribute to a more prosperous world.
        </p>
        <p className="prose-muted mt-4">
          As a thought leader, author and keynote speaker, I explore the future of FDI, Special
          Economic Zones, cross-border trade and investment, supply chain transformation and
          sustainable competitiveness – particularly at the intersection of the GCC, Europe, Africa
          and Asia.
        </p>
        <p className="prose-muted mt-4">
          I&apos;m especially interested in challenging the perceived trade-off between commercial
          returns and positive impact. The question isn&apos;t whether investment can do good.
          It&apos;s how we design investment ecosystems in which doing good strengthens
          competitiveness and commercial performance.
        </p>
      </section>

      <section className="mt-16 max-w-3xl">
        <h2 className="text-2xl">How I Lead</h2>
        <p className="mt-4 flex flex-wrap gap-2">
          {SUPERPOWERS.map((item) => (
            <span key={item} className="rounded-sm border border-line bg-card px-3 py-1.5 text-xs uppercase tracking-label text-muted">
              {item}
            </span>
          ))}
        </p>
        <p className="prose-muted mt-6">
          On an FDI, SEZ or trade corridor mandate, that looks like a consistent pattern:
        </p>
        <ol className="mt-8 space-y-6">
          {LEADERSHIP_STEPS.map((step, index) => (
            <li key={step.title} className="grid gap-2 sm:grid-cols-[4rem_1fr]">
              <p className="text-sm text-subtle">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <p className="text-lg text-graphite">{step.title}</p>
                <p className="mt-1 text-xs uppercase tracking-label text-subtle">{step.themes}</p>
                <p className="prose-muted mt-2">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="prose-muted mt-8">
          This reflects my ten strongest CliftonStrengths themes – Arranger, Achiever, Learner,
          Activator, Futuristic, Input, Connectedness, Developer, Self-Assurance and Positivity – in
          a profile that leads overall with Executing: I know how to catch an idea and make it real.
        </p>
        <p className="prose-muted mt-4">
          I&apos;m particularly effective in greenfield, transformational and complex environments –
          situations where the destination is ambitious, the path isn&apos;t yet defined, and
          multiple stakeholders need to be aligned around a common opportunity. I complement that
          entrepreneurial leadership with strong operational and technical teams who translate
          momentum into institutional capability and long-term execution.
        </p>
      </section>

      <section className="mt-16 max-w-3xl">
        <h2 className="text-2xl">Leadership Mantra</h2>
        <p className="mt-4 text-xl font-light text-graphite">
          See possibility. Connect capital and opportunity. Mobilize action. Create prosperity.
          Empower others.
        </p>
      </section>

      <section className="mt-16 max-w-3xl">
        <h2 className="text-2xl">What Keeps Me Curious</h2>
        <p className="mt-5 flex flex-wrap gap-2">
          {CURIOSITIES.map((item) => (
            <span key={item} className="rounded-sm border border-line bg-card px-3 py-1.5 text-xs uppercase tracking-label text-muted">
              {item}
            </span>
          ))}
        </p>
        <p className="prose-muted mt-6">
          I&apos;m endlessly curious about people, places and cultures. Travel has shaped how I see
          the world; nature gives me perspective; art and fashion feed my creativity; and sport gives
          me challenge, discipline and freedom.
        </p>
      </section>

      <section className="mt-16 max-w-3xl">
        <h2 className="text-2xl">Legacy</h2>
        <blockquote className="mt-4 text-xl font-light leading-snug text-graphite">
          I saw possibility where others saw barriers. I connected people, markets and capital across
          borders, opened doors to investment and opportunity, and helped create more prosperous,
          sustainable and independent economies.
        </blockquote>
        <p className="prose-muted mt-6">
          Most importantly, I used the opportunities I was given to create opportunities for others.
        </p>
      </section>
    </article>
  );
}
