import { sendEmail } from './send-email';

// TODO: Google recaptcha for securing the contact form
export default function ContactForm() {
  return (
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
        <label htmlFor="email" className="mb-2 block text-background text-sm">
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
        <label htmlFor="message" className="mb-2 block text-background text-sm">
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
  );
}
