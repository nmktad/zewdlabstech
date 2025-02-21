import Link from 'next/link';
import Faq from './faq';
import LogoTicker from './logo-ticker';

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
              src="https://framerusercontent.com/assets/EohpDns17bOt4UlCGzGZt2hhm8.mp4"
              className="block h-full w-full rounded-3xl bg-transparent object-cover"
              style={{ objectPosition: '50% 50%' }}
              poster="https://framerusercontent.com/images/DL4raP0zVFzRwk1GXYpNhjK3qWM.png"
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
      <section className="px-5 md:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-5xl font-cal font-medium text-4xl text-light-foreground md:text-5xl lg:text-7xl">
            Projects we&apos;ve worked on
          </h2>
        </div>
      </section>
      <Faq />
    </main>
  );
}
