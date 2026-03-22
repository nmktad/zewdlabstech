import Link from "next/link";
import Faq from "@/components/custom/faq";
import LogoTicker from "@/components/custom/logo-ticker";

export default function HomePage() {
  const serviceHighlights = [
    {
      title: "Product design and UX",
      description:
        "We turn rough ideas into clear flows, interfaces, and prototypes your team can validate early.",
    },
    {
      title: "Web and SaaS development",
      description:
        "From marketing sites to internal tools and full SaaS products, we build systems meant to be used and maintained.",
    },
    {
      title: "Automation and AI workflows",
      description:
        "We connect the repetitive parts of your operations, add practical AI where it helps, and keep humans in control.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Clarify the problem",
      description:
        "We start by understanding the business goal, the users involved, and the blockers slowing things down today.",
    },
    {
      step: "02",
      title: "Build with momentum",
      description:
        "We ship in focused cycles, keep communication direct, and make decisions with speed without losing structure.",
    },
    {
      step: "03",
      title: "Launch and improve",
      description:
        "After release, we stay close to the product, refine what matters, and support the next stage of growth.",
    },
  ];

  return (
    <div className="space-y-20 md:space-y-32">
      <section className="flex min-h-svh flex-col items-stretch justify-end gap-16 pb-40 md:pb-44 lg:pb-48">
        <div className="flex flex-col items-start gap-8">
          <div className="inline-flex rounded-full border border-border/70 px-4 py-2 text-sm text-muted-foreground">
            Product design, software delivery, and growth support
          </div>
          <h1 className="max-w-6xl font-cal font-medium text-5xl text-light-foreground md:text-6xl lg:text-7xl xl:text-8xl">
            We design and build digital products that solve real business
            friction.
          </h1>
          <div className="max-w-3xl space-y-6">
            <p className="text-base md:text-lg">
              Zewdlabs partners with founders and teams that need more than a
              polished interface. We shape the idea, build the product, and help
              it become dependable enough to grow with confidence.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 font-cal text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                Start a project
              </Link>
              <Link
                href="/works"
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 font-cal transition-colors duration-300 hover:bg-accent/5"
              >
                See selected work
              </Link>
            </div>
            <div className="grid gap-4 border-t border-border/70 pt-6 text-sm text-muted-foreground md:grid-cols-3">
              <p>
                Built for startups, internal teams, and ambitious service
                brands.
              </p>
              <p>
                Focused on useful systems, clear messaging, and measured
                delivery.
              </p>
              <p>
                Designed to stay maintainable after launch, not just look good
                on day one.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto -mt-40 flex place-items-center overflow-hidden rounded-sm md:-mt-44 md:rounded-3xl lg:-mt-48">
        <Link
          href="/works"
          className="max-w-7xl flex-1 cursor-pointer overflow-hidden rounded-sm md:rounded-3xl"
        >
          <video
            src="https://opu0od58lf.ufs.sh/f/Zk9HaKoXG51HjTkciwnMdUcOYlE8tyTIfGWh3N1PbwpejriR"
            className="block h-full w-full rounded-xl md:rounded-3xl bg-transparent object-cover"
            style={{ objectPosition: "50% 50%" }}
            poster="https://opu0od58lf.ufs.sh/f/Zk9HaKoXG51Hcos9wTnUN7H801xqKGAEomU5JhrFBuY62lkX"
            preload="auto"
            playsInline
            autoPlay
            muted
            loop
          />
        </Link>
      </section>
      <section className="grid gap-6 lg:grid-cols-[1.1fr_1.9fr] lg:gap-12">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            What we help with
          </p>
          <h2 className="font-cal text-4xl text-light-foreground md:text-5xl lg:text-6xl">
            Strategy, execution, and the messy middle in between.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {serviceHighlights.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-border/70 bg-card/40 p-6"
            >
              <h3 className="font-cal text-2xl text-light-foreground">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground md:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section>
        <LogoTicker />
      </section>
      <section className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            How we work
          </p>
          <h2 className="font-cal text-4xl text-light-foreground md:text-5xl lg:text-6xl">
            Small enough to move fast, structured enough to deliver well.
          </h2>
          <p className="max-w-xl text-base text-muted-foreground md:text-lg">
            Every engagement is tailored, but our approach stays consistent: get
            clear on the outcome, keep scope honest, and ship useful progress on
            a steady rhythm.
          </p>
        </div>
        <div className="grid gap-4">
          {processSteps.map((item) => (
            <article
              key={item.step}
              className="grid gap-4 rounded-3xl border border-border/70 p-6 md:grid-cols-[88px_1fr] md:items-start"
            >
              <p className="font-cal text-3xl text-muted-foreground">
                {item.step}
              </p>
              <div>
                <h3 className="font-cal text-2xl text-light-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground md:text-base">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="rounded-[2rem] border border-border/70 bg-card/30 p-8 md:p-10 lg:p-14">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Need a sharper digital presence?
            </p>
            <h2 className="max-w-4xl font-cal text-4xl text-light-foreground md:text-5xl lg:text-6xl">
              If your product, website, or workflow feels stuck, we can help you
              move it forward.
            </h2>
            <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
              We can step in at discovery, redesign, build, or optimization
              stage and give your team a clearer path to launch.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 font-cal transition-colors duration-300 hover:bg-accent/5"
            >
              Explore services
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 font-cal text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              Talk to Zewdlabs
            </Link>
          </div>
        </div>
      </section>
      <section className="max-w-7xl">
        <Faq />
      </section>
    </div>
  );
}
