'use client';
import { useActionState } from 'react';
import { sendEmail } from './send-email';

// TODO: Google recaptcha for securing the contact form
export default function ContactForm() {
  const [_state, formAction, pending] = useActionState(sendEmail, null);

  return (
    <form action={formAction}>
      <div className="flex-1">
        <label
          htmlFor="fullname"
          className="mb-2 block text-background text-sm"
        >
          Full Name
        </label>
        <input
          required
          name="fullname"
          type="text"
          placeholder="John Doe"
          className="mt-2 block w-full rounded-md border border-background/20 bg-foreground px-5 py-3 text-background/80 focus:border-background/20 focus:outline-none focus:ring focus:ring-background/20 focus:ring-opacity-40"
        />
      </div>

      <div className="mt-6 flex-1">
        <label htmlFor="email" className="mb-2 block text-background text-sm">
          Email address
        </label>
        <input
          required
          type="email"
          name="email"
          placeholder="johndoe@example.com"
          className="mt-2 block w-full rounded-md border border-background/20 bg-foreground px-5 py-3 text-background/80 focus:border-background/20 focus:outline-none focus:ring focus:ring-background/20 focus:ring-opacity-40"
        />
      </div>

      <div className="mt-6 w-full">
        <label htmlFor="message" className="mb-2 block text-background text-sm">
          Message
        </label>
        <textarea
          required
          name="message"
          className="mt-2 block h-32 w-full rounded-md border border-background/20 bg-foreground px-5 py-3 text-background/80 focus:border-background/20 focus:outline-none focus:ring focus:ring-background/20 focus:ring-opacity-40 md:h-48 "
          placeholder="Message"
        />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="hover:-translate-y-1 mt-6 transform cursor-pointer rounded-3xl border border-background bg-transparent px-6 py-3 font-bold text-background/80 shadow-[0_0_0_3px_#101010_inset] transition duration-400"
      >
        {pending ? (
          <div className="h-5 w-5 animate-spin rounded-full border-3 border-card-foreground border-t-background/80" />
        ) : (
          'Get in touch'
        )}
      </button>
    </form>
  );
}
