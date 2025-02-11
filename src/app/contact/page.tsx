import { TextRoll } from "@/app/text-roll";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function ContactPage() {
  async function sendEmail(formData: FormData) {
    "use server";

    const name = formData.get("fullname");
    const email = formData.get("email");
    const message = formData.get("message");

    try {
      await fetch("https://api.useplunk.com/v1/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.PLUNK_API_KEY}`,
        },
        body: JSON.stringify({
          to: "zewdlabs@gmail.com",
          subject: `Inquiry from "${name} - ${email}"`,
          body: message,
        }),
      });

      redirect("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="min-h-dvh px-5 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid auto-cols-fr grid-cols-1 gap-8 py-5 md:grid-cols-2">
          <div className="flex flex-col gap-2 md:gap-4">
            <h1 className="max-w-xl font-cal text-4xl selection:bg-foreground selection:text-background md:text-6xl">
              Let&apos;s start a project together
            </h1>
            <div className="flex items-center">
              <p>Want to talk instead?</p>
              <Link
                href="https://cal.com/zewdlabs/30min"
                className="hover:-translate-y-1 transform rounded-lg p-2 font-bold transition duration-400"
              >
                <TextRoll
                  duration={0.1}
                  className="font-cal text-foreground text-lg transition-colors duration-300 hover:text-light-foreground"
                >
                  Schedule a call
                </TextRoll>
              </Link>
            </div>
          </div>

          <div className="lg:mx-6">
            <div className="mx-auto w-full overflow-hidden rounded-xl bg-card-background px-8 py-10 text-card-foreground shadow-2xl lg:max-w-xl">
              <form action={sendEmail}>
                <div className="flex-1">
                  <label htmlFor="fullname" className="mb-2 block text-sm">
                    Full Name
                  </label>
                  <input
                    name="fullname"
                    type="text"
                    placeholder="John Doe"
                    className="mt-2 block w-full rounded-md border border-light-foreground bg-foreground px-5 py-3 text-background/60 focus:border-background/40 focus:outline-none focus:ring focus:ring-background/50 focus:ring-opacity-40"
                  />
                </div>

                <div className="mt-6 flex-1">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-background text-sm"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="johndoe@example.com"
                    className="mt-2 block w-full rounded-md border border-background/20 bg-foreground px-5 py-3 text-background/60 focus:border-background/40 focus:outline-none focus:ring focus:ring-background/50 focus:ring-opacity-40"
                  />
                </div>

                <div className="mt-6 w-full">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-background text-sm"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="mt-2 block h-32 w-full rounded-md border border-background/20 bg-foreground px-5 py-3 text-background/60 focus:border-background/40 focus:outline-none focus:ring focus:ring-background/50 focus:ring-opacity-40 md:h-48 "
                    placeholder="Message"
                  />
                </div>
                <button
                  type="submit"
                  className="hover:-translate-y-1 mt-6 transform cursor-pointer rounded-lg border border-foreground/50 bg-transparent px-6 py-2 font-bold text-background/80 shadow-[0_0_0_3px_#000000_inset] transition duration-400"
                >
                  get in touch
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
