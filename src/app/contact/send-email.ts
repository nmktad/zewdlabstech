'use server';

import { RedirectType, redirect } from 'next/navigation';

export async function sendEmail(formData: FormData) {
  const name = formData.get('fullname');
  const email = formData.get('email');
  const message = formData.get('message');

  try {
    await fetch('https://api.useplunk.com/v1/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.PLUNK_API_KEY}`,
      },
      body: JSON.stringify({
        to: 'zewdlabs@gmail.com',
        subject: `Inquiry from "${name} - ${email}"`,
        body: message,
      }),
    });
  } catch (err) {
    throw new Error(`couldn't send email error\n ${JSON.stringify(err)}`);
  }

  redirect('/', RedirectType.replace);
}
