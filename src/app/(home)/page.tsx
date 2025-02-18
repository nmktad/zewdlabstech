import LogoTicker from './logo-ticker';

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <section className="px-5 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className=" flex min-h-svh flex-col items-stretch justify-end gap-16 pb-12">
            <div className="flex flex-col items-start gap-8">
              <h1 className="max-w-5xl font-cal font-medium text-4xl text-light-foreground md:text-6xl lg:text-8xl">
                Building products that satisfy a customer&apos;s needs
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
        <div className="mx-auto max-w-7xl">
          <LogoTicker />
        </div>
      </section>
      <section className="px-5 md:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-5xl font-cal font-medium text-4xl text-light-foreground md:text-6xl lg:text-8xl">
            Frequently Asked Questions
          </h2>
        </div>
      </section>
    </div>
  );
}
