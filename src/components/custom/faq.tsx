"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Faq() {
  const [selected, setSelected] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do you price a project?",
      answer:
        "We price based on scope, complexity, and how much strategic involvement you need from us. After a short discovery conversation, we outline the recommended approach, the likely timeline, and a clear estimate before work begins.",
    },
    {
      question: "What kind of work does Zewdlabs take on?",
      answer:
        "We design and build websites, SaaS products, internal tools, automation flows, and custom software experiences. Some clients come to us for a full end-to-end build, while others need help improving an existing product that is already live.",
    },
    {
      question: "Can you work with our existing team or codebase?",
      answer:
        "Yes. We can plug into an in-house product, design, or marketing team and work with the systems you already have. When needed, we also audit existing code and workflows so improvements happen without unnecessary rework.",
    },
    {
      question: "What does your process look like?",
      answer:
        "We usually begin with discovery and prioritization, then move into design, implementation, testing, and launch support. You stay close to the work through regular check-ins, visible progress, and practical recommendations at each stage.",
    },
    {
      question: "Do you stay involved after launch?",
      answer:
        "Absolutely. We can continue with maintenance, iteration, feature development, or performance improvements after release. Many teams keep us involved because the first launch is usually the beginning of the real product learning cycle.",
    },
  ];

  return (
    <div>
      <h2 className="max-w-5xl font-cal font-medium text-4xl text-light-foreground md:text-5xl lg:text-7xl">
        Questions teams usually ask before we start
      </h2>
      <div className="flex flex-col gap-6 pt-8 md:pt-16">
        {faqs.map(
          (pair, index) =>
            pair.question &&
            pair.answer && (
              <div
                key={pair.question}
                className="rounded-3xl bg-card-foreground p-6 text-card"
              >
                <button
                  onClick={() =>
                    setSelected((prev) => (prev === index ? null : index))
                  }
                  className="flex w-full cursor-pointer items-center justify-between font-medium text-background/80"
                  type="button"
                >
                  <h3 className="text-left font-cal text-lg md:text-xl">
                    {pair.question}
                  </h3>
                  {/* Icon here */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={cn(
                      "h-6 w-6 shrink-0 fill-none stroke-current transition duration-400",
                      selected === index && "rotate-45",
                    )}
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <title>Plus</title>
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
                <AnimatePresence>
                  {selected === index && (
                    <motion.div
                      initial={{ height: 0, marginTop: 0 }}
                      animate={{ height: "auto", marginTop: 24 }}
                      exit={{ height: 0, marginTop: 0 }}
                      className="overflow-hidden"
                    >
                      <p>{pair.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ),
        )}
      </div>
    </div>
  );
}
