import ProjectCard from '../card';

export default function Works() {
  return (
    <main className="flex min-h-dvh flex-col gap-16 rounded-b-3xl bg-card-background text-card-foreground">
      <section className="mt-32 px-5 md:mt-36 md:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-5xl font-cal font-medium text-4xl md:text-5xl lg:text-7xl">
            Works We&apos;ve Delivered So Far
          </h2>
          <div className="grid grid-cols-1 gap-8 py-10 md:grid-cols-2">
            <ProjectCard title="Antenehfilms" slug="antenehfilms" />
            <ProjectCard title="Antenehfilms" slug="antenehfilms" />
            <ProjectCard title="Antenehfilms" slug="antenehfilms" />
            <ProjectCard title="Antenehfilms" slug="antenehfilms" />
          </div>
        </div>
      </section>
    </main>
  );
}
