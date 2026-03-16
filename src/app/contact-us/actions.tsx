"use server";

export async function submitContact(formData: FormData) {
  const data = {
    service: formData.get("service"),
    name: formData.get("name"),
    email: formData.get("email"),
    description: formData.get("description"),
  };

  console.log(data);

  // Example: send email / store DB
  // await resend.emails.send(...)
}
