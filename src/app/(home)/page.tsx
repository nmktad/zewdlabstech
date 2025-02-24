import Link from 'next/link';
import ProjectCard from './card';
import Faq from './faq';
import LogoTicker from './logo-ticker';
import { Services } from './services';

export default function Home() {
  return (
    <main className="flex flex-col gap-16">
      <section className="px-5 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className=" flex min-h-svh flex-col items-stretch justify-end gap-16 pb-12">
            <div className="flex flex-col items-start gap-8">
              <h1 className="max-w-5xl font-cal font-medium text-5xl text-light-foreground md:text-6xl lg:text-8xl">
                Building products that
                <br /> satisfy a customer&apos;s needs
              </h1>
              <div>
                <div className="max-w-3xl">
                  <p className="text-base md:text-lg">
                    Award-winning Webflow agency with a business-first approach.
                    We build scalable and conversion-focused websites for
                    marketing and IT team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-5 md:px-10">
        <div className="mx-auto flex max-w-7xl place-items-center overflow-hidden rounded-3xl">
          {/* TODO: maybe have an overlay here*/}
          <Link
            href="/"
            className="max-w-7xl flex-1 cursor-pointer overflow-hidden rounded-3xl"
          >
            <video
              src="https://opu0od58lf.ufs.sh/f/Zk9HaKoXG51HjTkciwnMdUcOYlE8tyTIfGWh3N1PbwpejriR"
              className="block h-full w-full rounded-3xl bg-transparent object-cover"
              style={{ objectPosition: '50% 50%' }}
              poster="https://opu0od58lf.ufs.sh/f/Zk9HaKoXG51Hcos9wTnUN7H801xqKGAEomU5JhrFBuY62lkX"
              preload="auto"
              playsInline
              autoPlay
              muted
              loop
            />
          </Link>
        </div>
      </section>
      <section className="px-5 md:px-10">
        <div className="mx-auto max-w-7xl">
          <LogoTicker />
        </div>
      </section>
      <section id="services" className="px-5 py-20 md:px-10 lg:py-40">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-5xl font-cal font-medium text-4xl md:text-5xl lg:text-7xl">
            Services we provide
          </h2>
          <Services />
        </div>
      </section>
      <section
        id="works"
        className="min-h-dvh rounded-3xl bg-card-background px-5 py-20 text-card-foreground md:px-10 lg:py-40"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-5xl font-cal font-medium text-4xl md:text-5xl lg:text-7xl">
            Works We&apos;ve Delivered So Far
          </h2>
          <div className="grid grid-cols-1 gap-8 pt-10 md:grid-cols-2 md:pt-20">
            <ProjectCard title="Antenehfilms" slug="antenehfilms" />
            <ProjectCard title="Antenehfilms" slug="antenehfilms" />
          </div>
        </div>
      </section>
      <Faq />
    </main>
  );
}
