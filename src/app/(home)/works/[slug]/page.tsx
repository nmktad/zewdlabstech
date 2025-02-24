export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  return (
    <main className="flex min-h-dvh flex-col gap-16">
      <section className="mt-32 px-5 md:mt-36 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div>My Project: {slug}</div>
        </div>
      </section>
    </main>
  );
}
