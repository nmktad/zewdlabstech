"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import RollingText, { TextRoll } from "../ui/text-roll";

const services = ["Design", "Development", "Other"];

export default function Footer() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      ...formData,
      service: selectedService,
    });

    // TODO: send to API or email service
  };

  return (
    <footer className="bg-accent text-white">
      <section className="px-6 py-12 md:px-12 lg:px-24 lg:py-20">
        <div className="mx-auto container">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
            {/* Left */}

            <div className="flex flex-col gap-2 md:gap-4 lg:w-1/3">
              <h1 className="max-w-xl font-cal-sans text-4xl selection:bg-foreground selection:text-background md:text-6xl">
                Let&apos;s start a project together
              </h1>
              <div className="flex items-center">
                <p>Want to talk instead?</p>
                <Link
                  href="https://cal.com/zewdlabs/30min"
                  className="group hover:-translate-y-1 transform rounded-lg p-2 font-bold transition duration-400"
                >
                  <TextRoll
                    className="font-cal-sans text-foreground text-lg transition-colors duration-300 hover:text-light-foreground"
                    duration={0.1}
                  >
                    Schedule a call
                  </TextRoll>
                </Link>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-2/3">
              <h2 className="mb-10 text-3xl md:text-4xl lg:text-5xl">
                Tell us about your project
              </h2>

              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Services */}
                {/* Inputs */}
                <div className="grid gap-6 md:grid-cols-2">
                  <input
                    type="text"
                    required
                    placeholder="Name"
                    className="border-b border-gray-600 bg-transparent py-3 focus:border-white focus:outline-none"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />

                  <input
                    type="email"
                    required
                    placeholder="Email"
                    className="border-b border-gray-600 bg-transparent py-3 focus:border-white focus:outline-none"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                {/* Description */}
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full border-b border-gray-600 bg-transparent py-3 focus:border-white focus:outline-none"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />

                {/* Submit */}
                <button
                  type="submit"
                  className="group inline-flex uppercase items-center gap-3 rounded-full border border-gray-500 px-8 py-4 text-sm transition hover:border-white hover:bg-white hover:text-black"
                >
                  Get in touch
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-current">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer bottom */}
      <div className="border-t border-gray-700 px-6 py-8 md:px-12 lg:px-24">
        <div className="mx-auto container">
          {/* Top row */}
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            {/* Logo */}
            <div className="text-2xl font-semibold">Zewdlabs</div>

            {/* Social */}
            <div className="flex gap-6">
              <Link
                href="https://linkedin.com"
                className="text-gray-400 hover:text-white"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com"
                className="text-gray-400 hover:text-white"
              >
                GitHub
              </Link>
              <Link
                href="https://twitter.com"
                className="text-gray-400 hover:text-white"
              >
                Twitter
              </Link>
            </div>
          </div>

          <div className="my-6 border-t border-gray-700" />

          {/* Bottom */}
          <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Zewdlabs
            </p>

            <nav className="flex gap-8">
              <Link href="/about" className="text-gray-300 hover:text-white">
                About
              </Link>
              <Link href="/works" className="text-gray-300 hover:text-white">
                Work
              </Link>
              <Link href="/blog" className="text-gray-300 hover:text-white">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
