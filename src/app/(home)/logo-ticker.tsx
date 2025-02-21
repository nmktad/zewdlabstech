'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Fragment } from 'react';

export default function LogoTicker() {
  const logos = [
    {
      name: 'Logo1',
      url: 'https://cdn.prod.website-files.com/67053868fc01e494462e71c9/67472c83ca1ad8229c225f51_logo-tse-grey.svg',
    },

    {
      name: 'Logo2',
      url: 'https://cdn.prod.website-files.com/67053868fc01e494462e71c9/6745bd0ec0860c1e685a9837_logo-flomodia-grey.svg',
    },

    {
      name: 'Logo3',
      url: 'https://cdn.prod.website-files.com/67053868fc01e494462e71c9/67481ee40d87f1254644ee5d_logo-coudac-grey.svg',
    },

    {
      name: 'Logo4',
      url: 'https://cdn.prod.website-files.com/67053868fc01e494462e71c9/6745b666711db092819e2a63_logo-club-patrimoine-grey.svg',
    },

    {
      name: 'Logo5',
      url: 'https://cdn.prod.website-files.com/67053868fc01e494462e71c9/67481e8338135e82689152e5_logo-weglot-grey.svg',
    },
  ];

  return (
    <div className="flex w-full flex-col items-center text-center lg:flex-row lg:text-left">
      <div className="mb-6 lg:mb-0 lg:w-1/4">
        <h1 className="max-w-56 font-normal text-sm ">
          Trusted by great companies and organizations around the country
        </h1>
      </div>
      <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <motion.div
          animate={{
            x: '-50%',
          }}
          transition={{
            duration: 30,
            ease: 'linear',
            repeat: Number.POSITIVE_INFINITY,
          }}
          className="flex flex-none gap-14"
        >
          {Array.from({ length: 2 }).map((_, i) => (
            <Fragment key={i}>
              {logos.map((logo) => (
                <Image
                  width={32}
                  height={32}
                  src={logo.url}
                  key={logo.url}
                  alt={logo.name}
                  className="h-8 w-auto"
                />
              ))}
            </Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
