'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

export default function Faq() {
  const [selected, setSelected] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How much does a software project cost?',
      answer:
        'Our pricing is determined on a project-by-project basis, as the final cost depends on various factors, including project scope, technologies used, technical complexity, and time spent. If you’d like an estimate for your project, feel free to reach out to us. We’ll be happy to provide a free consultation and a tailored cost estimate based on your specific business needs.',
    },
    {
      question: 'What software development services do you provide?',
      answer:
        'We offer a range of software development services, including web and mobile app development, custom software solutions, UI/UX design, cloud solutions, API development, and system integration. Whether you need a full-scale product or a small feature enhancement, our team is ready to help.',
    },
    {
      question:
        'Do you provide maintenance and support after project completion?',
      answer:
        'Yes! We offer ongoing maintenance and support to ensure your software runs smoothly. Our services include bug fixes, performance optimization, feature updates, and technical support. We can tailor our support plans based on your needs.',
    },
    {
      question:
        'How is the software development process run at your organization?',
      answer:
        'Our development process typically follows Agile methodologies. We begin with requirement gathering and planning, followed by design, development, testing, and deployment. Throughout the process, we maintain open communication, provide regular updates, and incorporate feedback to ensure the final product meets your expectations.',
    },
    {
      question: 'To what extent does your support continue?',
      answer:
        'Our support extends beyond just delivering the software. We offer post-launch maintenance, updates, and technical assistance based on your requirements. Whether it’s resolving issues, scaling up, or adding new features, we are committed to long-term collaboration and ensuring your software remains effective.',
    },
  ];

  return (
    <section className="px-5 md:px-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-5xl font-cal font-medium text-4xl text-light-foreground md:text-5xl lg:text-7xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 flex flex-col gap-6">
          {faqs.map(
            (pair, index) =>
              pair.question &&
              pair.answer && (
                <div
                  key={pair.question}
                  className="rounded-3xl bg-card-background p-6 text-card-foreground"
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
                        'h-6 w-6 shrink-0 fill-none stroke-current transition duration-400',
                        selected === index && 'rotate-45'
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
                        animate={{ height: 'auto', marginTop: 24 }}
                        exit={{ height: 0, marginTop: 0 }}
                        className="overflow-hidden"
                      >
                        <p>{pair.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
}
