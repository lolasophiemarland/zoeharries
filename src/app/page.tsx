import Link from "next/link";
import { Photo } from "@/components/photo";
import { EXPLORE, ROLE_CARDS, SITE, STATS } from "@/lib/site";

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pt-16 pb-10 sm:px-8 sm:pt-24 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="label-caps mb-5">{SITE.kicker}</p>
          <h1 className="text-4xl leading-[1.15] sm:text-5xl">
            Global Connector.
            <br />
            Opportunity Architect.
          </h1>
          <p className="prose-muted mt-6 max-w-lg">
            Connecting people, markets and capital across borders. Mobilizing investment. Creating
            shared prosperity.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/about" className="btn-primary">
              Read my story
            </Link>
            <Link href="/speaking" className="btn-outline">
              Book me to speak
            </Link>
          </div>
        </div>
        <Photo
          src="/photos/zoe-harries-fdi-panel-conversation.jpg"
          alt="Zoë Harries in conversation on stage during a panel"
          priority
          className="aspect-[4/3] w-full"
          imageClassName="object-cover object-center"
          sizes="(min-width: 1024px) 560px, 100vw"
        />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="max-w-3xl">
        <p className="label-caps mb-4">Intro</p>
        <blockquote className="text-2xl font-light leading-snug text-graphite sm:text-[1.7rem]">
          I build bridges between markets, cultures, governments and capital – translating between
          different worlds to create opportunities that none could realize alone.
        </blockquote>
        <p className="prose-muted mt-6">
          My life has been about crossing borders. My work is about making them easier for
          opportunity to cross.
        </p>
        </div>
      </section>

      <section className="border-y border-line bg-card/70">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-light text-graphite">{stat.value}</p>
              <p className="mt-2 text-xs uppercase tracking-label text-subtle">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <p className="label-caps mb-8">Work</p>
        <div className="grid gap-5 lg:grid-cols-2">
          {ROLE_CARDS.map((card) => (
            <article key={card.title} className="card-surface flex flex-col p-8">
              <h2 className="text-2xl">{card.title}</h2>
              <p className="prose-muted mt-4 flex-1">{card.body}</p>
              <Link href={card.href} className="mt-6 text-xs font-medium uppercase tracking-label text-graphite">
                {card.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8 sm:px-8">
        <p className="label-caps mb-8">Explore</p>
        <div className="grid gap-5 sm:grid-cols-2">
          {EXPLORE.map((item) => (
            <Link key={item.href} href={item.href} className="card-surface group overflow-hidden">
              <Photo
                src={item.image}
                alt={item.alt}
                className={`${item.imageAspect} border-0`}
                imageClassName={`${item.imageClass} transition-transform duration-500 group-hover:scale-[1.02]`}
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="p-6">
                <h2 className="text-xl">{item.title}</h2>
                <p className="prose-muted mt-2">{item.body}</p>
                <p className="mt-4 text-xs font-medium uppercase tracking-label text-graphite">
                  {item.cta} →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
