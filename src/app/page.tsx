import Faq from "@/components/custom/faq";
import LogoTicker from "@/components/custom/logo-ticker";
import { section } from "motion/react-m";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-20 md:space-y-32">
      <section className=" flex min-h-svh flex-col items-stretch justify-end gap-16 pb-40 md:pb-44 lg:pb-48">
        <div className="flex flex-col items-start gap-8">
          <h1 className="max-w-5xl font-cal font-medium text-5xl text-light-foreground md:text-6xl lg:text-7xl xl:text-8xl">
            Building products that
            <br /> satisfy a customer&apos;s needs
          </h1>
          <div>
            <div className="max-w-3xl">
              <p className="text-base md:text-lg">
                Award-winning Webflow agency with a business-first approach. We
                build scalable and conversion-focused websites for marketing and
                IT team.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto -mt-40 md:-mt-44 lg:-mt-48 flex place-items-center overflow-hidden rounded-sm md:rounded-3xl ">
        {/* TODO: maybe have an overlay here*/}
        <Link
          href="/"
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
      <section>
        <LogoTicker />
      </section>
      <section className="max-w-7xl">
        <Faq />
      </section>
    </div>
  );
}
