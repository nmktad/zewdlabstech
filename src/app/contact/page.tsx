"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { TextRoll } from "@/components/ui/text-roll";

const services = ["Design", "Development", "Other"];

export default function ContactPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ ...formData, service: selectedService });
  };

  return (
    <div className="min-h-screen bg-[#3a3a3a] text-white">
      <main className="px-6 py-12 md:px-12 lg:px-24 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
            <div className="flex flex-col gap-2 md:gap-4">
              <h1 className="max-w-xl font-cal text-4xl selection:bg-foreground selection:text-background md:text-6xl">
                Let&apos;s start a project together
              </h1>
              <div className="flex items-center">
                <p>Want to talk instead?</p>
                <Link
                  href="https://cal.com/zewdlabs/30min"
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
            {/* <div className="lg:w-1/3"> */}
            {/*   <p className="text-sm tracking-widest text-gray-400"> */}
            {/*     HAVE A IDEA / */}
            {/*   </p> */}
            {/* </div> */}

            {/* Right Section - Form */}
            <div className="lg:w-2/3">
              <h1 className="mb-10 text-xl font-light leading-tight md:text-2xl lg:text-3xl uppercase text-balance">
                Or write to us and we will reach back
              </h1>

              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Service Selection */}
                <div className="space-y-4">
                  <label className="text-sm text-gray-400">Service</label>
                  <div className="flex flex-wrap gap-3">
                    {services.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className={`rounded-full border px-6 py-3 text-sm transition-all ${
                          selectedService === service
                            ? "border-white bg-white text-[#3a3a3a]"
                            : "border-gray-500 bg-transparent text-white hover:border-white"
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name and Email */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full border-b border-gray-600 bg-transparent py-3 text-white placeholder:text-gray-500 focus:border-white focus:outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full border-b border-gray-600 bg-transparent py-3 text-white placeholder:text-gray-500 focus:border-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <textarea
                    placeholder="Description"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    rows={1}
                    className="w-full resize-none border-b border-gray-600 bg-transparent py-3 text-white placeholder:text-gray-500 focus:border-white focus:outline-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 rounded-full border border-gray-500 bg-transparent px-8 py-4 text-sm font-medium tracking-wider text-white transition-all hover:border-white hover:bg-white hover:text-[#3a3a3a]"
                  >
                    BOOK A MEETING
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-current">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-gray-600 px-6 py-8 md:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          {/* Top Footer */}
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            {/* Logo */}

            <svg
              className="w-24 h-24"
              viewBox="0 0 1024 1024"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Zewdlabs Logo</title>
              <path
                d="M420.693 223.012C424.089 216.26 431.002 212 438.559 212H591.473C606.339 212 616.009 227.644 609.363 240.942L329.461 800.942C326.074 807.719 319.148 812 311.571 812H156.843C141.954 812 132.285 796.313 138.976 783.012L420.693 223.012Z"
                fill="#EEE6D9"
              />
              <path
                d="M696.471 223.012C699.868 216.26 706.78 212 714.338 212H867.251C882.118 212 891.788 227.644 885.141 240.942L605.239 800.942C601.852 807.719 594.926 812 587.35 812H432.621C417.732 812 408.063 796.313 414.755 783.012L696.471 223.012Z"
                fill="#EEE6D9"
              />
              <path
                d="M715.918 629.068C719.316 622.319 726.227 618.061 733.782 618.061H888.541C903.432 618.061 913.101 633.752 906.405 647.054L828.91 800.993C825.513 807.742 818.602 812 811.046 812H656.288C641.396 812 631.728 796.308 638.424 783.007L715.918 629.068Z"
                fill="#EEE6D9"
              />
              <path
                d="M195.09 223.007C198.487 216.258 205.398 212 212.954 212H367.712C382.604 212 392.272 227.692 385.576 240.993L308.082 394.932C304.684 401.681 297.773 405.939 290.218 405.939H135.459C120.568 405.939 110.899 390.248 117.595 376.946L195.09 223.007Z"
                fill="#EEE6D9"
              />
            </svg>

            {/* Social Icons */}
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
                aria-label="Pinterest"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
                aria-label="Behance"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
                aria-label="Dribbble"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="my-6 border-t border-gray-600" />

          {/* Bottom Footer */}
          <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
            <p className="tracking-widest text-gray-400">
              SAN JOSE, CA, UNITED STATES
            </p>
            <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
              <a
                href="#"
                className="text-gray-300 transition-colors hover:text-white"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-300 transition-colors hover:text-white"
              >
                Portfolio
              </a>
              <a
                href="#"
                className="text-gray-300 transition-colors hover:text-white"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-gray-300 transition-colors hover:text-white"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
