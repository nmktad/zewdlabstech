import Link from "next/link";
import ContactUsForm from "@/components/custom/contact-us-form";
import { TextRoll } from "@/components/ui/text-roll";
import { submitContact } from "./actions";
import env from "@/env.config";

export default function ContactPage() {
  return (
    <div className="bg-accent ">
      <main className="px-6 py-12 md:px-12 lg:px-24 lg:py-20">
        <div className="mx-auto container">
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
            <div className="lg:w-2/5">
              <div className="flex flex-col gap-2 md:gap-4">
                <h1 className="max-w-2xl font-cal text-5xl  md:text-6xl">
                  Let&apos;s start a <br /> project together
                </h1>
                <div className="flex items-center">
                  <p>Want to talk instead?</p>
                  <Link
                    href={env.CONTACT_US_SCHEDULE_LINK}
                    className="group hover:-translate-y-1 transform rounded-lg p-2 font-bold transition duration-400"
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
            </div>

            {/* Right Section - Form */}
            <ContactUsForm action={submitContact} />
          </div>
        </div>
      </main>
    </div>
  );
}
