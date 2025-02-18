'use server';

import { RedirectType, redirect } from 'next/navigation';

import { z } from 'zod';

const schema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is required' })
    .max(255, { message: 'Name is too long' }),
  email: z.string().email(),
  message: z
    .string()
    .min(1, 'Message is required')
    .max(512, 'Message is too long'),
});

// biome-ignore lint/suspicious/noExplicitAny: not used
export async function sendEmail(_prevState: any, formData: FormData) {
  const name = formData.get('fullname');
  const email = formData.get('email');
  const message = formData.get('message');

  const { success, data, error } = schema.safeParse({ name, email, message });

  if (!success) {
    throw new Error('error parsing the information', error);
  }

  try {
    // TODO: find another way to check the messages
    //
    // const res = await fetch("https://vector.profanity.dev", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     message: `Inquiry from ${data.name} - ${data.email}: ${data.message}`,
    //   }),
    // });
    //
    // console.log(
    //   "the message sent\n",
    //   `Inquiry from ${data.name} - ${data.email}: ${data.message}`,
    // );
    //
    // console.log(await res.json());

    await fetch('https://api.useplunk.com/v1/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.PLUNK_API_KEY}`,
      },
      body: JSON.stringify({
        to: 'zewdlabs@gmail.com',
        subject: `Inquiry from "${data.name} - ${data.email}"`,
        body: data.message,
      }),
    });
  } catch (err) {
    throw new Error(`couldn't send email error\n ${JSON.stringify(err)}`);
  }

  redirect('/', RedirectType.replace);
}
