'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

export default function MobileMenu() {
  const [isActive, setIsActive] = useState(false);

  const links = [
    { title: 'Works', href: '/works' },
    { title: 'Expertise', href: '/' },
    { title: 'Careers', href: '/' },
    { title: 'Contact', href: '/contact' },
  ];

  const footerLinks = [
    { title: 'Facebook', href: '/' },
    { title: 'LinkedIn', href: '/' },
    { title: 'Instagram', href: '/' },
    { title: 'Twitter', href: '/' },
  ];

  const perspective = {
    initial: { opacity: 0, rotateX: 90, translateY: 80, translateX: -20 },
    enter: (i: number) => ({
      opacity: 1,
      rotateX: 0,
      translateY: 0,
      translateX: 0,
      transition: {
        duration: 0.65,
        delay: 0.5 + i * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
        opacity: { duration: 0.35 },
      },
    }),
    exit: {
      opacity: 0,
      transition: { duration: 0.5, type: 'linear', ease: [0.76, 0, 0.24, 1] },
    },
  };

  const slideIn = {
    initial: { opacity: 0, y: 20 },
    enter: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.75 + i * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
    exit: {
      opacity: 0,
      transition: { duration: 0.5, type: 'tween', ease: 'easeInOut' },
    },
  };

  return (
    <div className="relative inline-block md:hidden">
      <motion.div
        className="absolute top-0 right-0 max-h-[80vh] max-w-[90vw] rounded-3xl bg-foreground"
        variants={{
          open: {
            width: '480px',
            height: '80vh',
            right: '-2px', // Keeps the right edge fixed
            transition: {
              duration: 0.75,
              type: 'tween',
              ease: [0.76, 0, 0.24, 1],
            },
          },
          closed: {
            width: '100px',
            height: '40px',
            right: '-2px', // Keeps the right edge fixed
            transition: {
              duration: 0.75,
              delay: 0.35,
              type: 'tween',
              ease: [0.76, 0, 0.24, 1],
            },
          },
        }}
        animate={isActive ? 'open' : 'closed'}
        initial="closed"
      >
        <AnimatePresence>
          {isActive && (
            <div className="box-border flex h-full flex-col justify-between p-10">
              <div className="flex flex-col gap-2">
                {links.map((link, i) => (
                  <div
                    key={`b_${i}`}
                    className="perspective-[120px] perspective-origin-bottom"
                  >
                    <motion.a
                      href={link.href}
                      custom={i}
                      variants={perspective}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                      className="text-[46px] text-background no-underline"
                    >
                      {link.title}
                    </motion.a>
                  </div>
                ))}
              </div>
              <motion.div className="flex flex-wrap">
                {footerLinks.map((link, i) => (
                  <motion.a
                    key={`f_${i}`}
                    href={link.href}
                    variants={slideIn}
                    custom={i}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    className="mt-1 w-1/2 text-background"
                  >
                    {link.title}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </motion.div>
      <button
        type="button"
        className="relative flex h-10 w-24 items-center justify-center rounded-3xl bg-foreground text-background transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)]"
        onClick={() => setIsActive(!isActive)}
      >
        <span className="uppercase">{isActive ? 'Close' : 'Menu'}</span>
      </button>
    </div>
  );
}
