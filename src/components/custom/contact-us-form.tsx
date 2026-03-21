"use client";

import { useAutoSizeTextArea } from "@/hooks/use-autoresize-textarea";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import { useFormStatus } from "react-dom";

const services = ["Design", "Development", "Other"];

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full sm:w-fit h-14 group inline-flex hover:cursor-pointer items-center gap-3 rounded-full border border-gray-500 bg-transparent px-8 py-4 text-accent tracking-wider text-white transition-all hover:border-white hover:bg-white hover:text-[#3a3a3a]"
    >
      {pending ? "Sending..." : "Send"}
      <ArrowUpRight className="h-4 w-4" />
    </button>
  );
}

export default function ContactUsForm({
  action,
}: {
  action: (formData: FormData) => Promise<void>;
}) {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useAutoSizeTextArea(textareaRef, 8);

  return (
    <form action={action} className="lg:w-3/5 space-y-10">
      <div className="space-y-4">
        <input type="hidden" name="service" value={selectedService ?? ""} />
        <fieldset className="space-y-3">
          <legend className="text-gray-500">Service you're looking for</legend>

          <div className="flex flex-wrap gap-4">
            {services.map((service) => (
              <button
                key={service}
                type="button"
                onClick={() => setSelectedService(service)}
                className={`rounded-full border px-6 py-3 text-sm transition-all hover:cursor-pointer ${
                  selectedService === service
                    ? "border-white bg-white text-[#3a3a3a]"
                    : "border-gray-500 bg-transparent text-white hover:border-white"
                }`}
              >
                {service}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      {/* Name and Email */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full border-b border-gray-600 bg-transparent py-3 text-white placeholder:text-gray-500 focus:border-white focus:outline-none"
          />
        </div>
        <div className="space-y-2">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border-b border-gray-600 bg-transparent py-3 text-white placeholder:text-gray-500 focus:border-white focus:outline-none"
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <textarea
          ref={textareaRef}
          placeholder="Description"
          name="description"
          rows={1}
          className="w-full resize-none border-b overflow-y-auto scrollbar-none border-gray-600 bg-transparent py-3 text-white placeholder:text-gray-500 focus:border-white focus:outline-none"
        />
      </div>

      <div className="pt-4 flex justify-center sm:block">
        <SubmitButton />
      </div>
    </form>
  );
}
