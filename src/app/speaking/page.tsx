import type { Metadata } from "next";
import { Photo } from "@/components/photo";
import { ENGAGEMENTS, SPEAKING_THEMES } from "@/lib/site";
import { EnquireForm } from "@/components/enquire-form";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Keynotes, panels and moderation on FDI, special economic zones and investment destination competitiveness.",
};

export default function SpeakingPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 pt-16 pb-8 sm:px-8 sm:pt-20">
      <p className="label-caps mb-4">Speaking</p>
      <h1 className="max-w-3xl text-4xl leading-tight sm:text-5xl">
        Keynotes, panels and moderation on FDI, SEZs and cross-border investment.
      </h1>
      <p className="prose-muted mt-6 max-w-2xl">
        I speak on what makes countries, cities and economic zones genuinely competitive for
        investment – and how governments and business can turn that competitiveness into sustainable
        growth. Drawing on three decades working across the Gulf, Europe and Asia Pacific, I bring
        together the perspectives of government, investors and industry, translating between them to
        connect ideas, capital and opportunity across borders.
      </p>

      <Photo
        src="/photos/zoe-harries-fdi-sez-conference-panel.jpg"
        alt="Zoë Harries of Impact Zones on a conference panel on FDI and special economic zones"
        className="mt-12 aspect-[16/9] w-full"
        imageClassName="object-cover object-[center_28%]"
        sizes="(min-width: 1024px) 960px, 100vw"
      />

      <section className="mt-16">
        <h2 className="text-2xl">Speaking themes</h2>
        <ul className="mt-6 divide-y divide-line border-y border-line">
          {SPEAKING_THEMES.map((theme) => (
            <li key={theme} className="py-4 text-[15px] text-graphite">
              {theme}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl">Engagement history</h2>
        <table className="mt-6 w-full table-fixed text-left text-sm">
          <thead>
            <tr className="label-caps border-b border-line">
              <th className="pb-3 pr-4 font-medium">Event</th>
              <th className="w-32 pb-3 font-medium">Location</th>
            </tr>
          </thead>
          <tbody>
            {ENGAGEMENTS.map((row) => (
              <tr key={row.event} className="border-b border-line align-top">
                <td className="py-3.5 pr-4 text-graphite">{row.event}</td>
                <td className="py-3.5 text-muted">{row.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="mt-16 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl">Book Zoë to speak</h2>
          <p className="prose-muted mt-4">
            I am available for keynotes, panel discussions, fireside conversations and moderation on
            foreign direct investment, special economic zones, investment destination
            competitiveness, cross border trade and capital flows, and sustainable economic
            development. I particularly welcome forums that bring together government, investors and
            industry to explore how investment can create both commercial value and shared
            prosperity.
          </p>
          <p className="prose-muted mt-4">For speaking inquiries, please get in touch.</p>
        </div>
        <div>
          <EnquireForm kind="speaking" />
        </div>
      </section>
    </div>
  );
}
