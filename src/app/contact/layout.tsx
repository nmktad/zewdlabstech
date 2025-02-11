import type { Metadata } from 'next';
import Link from 'next/link';
import type { PropsWithChildren } from 'react';

export default function ContactLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <>
      <header className="z-50 flex h-16 items-center px-5 py-4 md:h-20 md:px-10 ">
        <div className="mx-auto flex w-full max-w-7xl gap-8">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <svg
                className="h-8"
                viewBox="0 0 202 158"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Zewdlabs</title>
                <path
                  d="M75.7924 6.00671C77.4905 2.63051 80.9468 0.500006 84.726 0.500006H114.079C121.512 0.500006 126.347 8.32128 123.025 14.9702L54.5627 151.97C52.8692 155.359 49.406 157.5 45.6175 157.5H15.82C8.37588 157.5 3.54148 149.657 6.88637 143.007L75.7924 6.00671Z"
                  className="fill-foreground"
                />
                <path
                  d="M147.94 6.0067C149.638 2.6305 153.094 0.5 156.873 0.5H186.227C193.66 0.5 198.495 8.32127 195.172 14.9702L126.71 151.97C125.017 155.359 121.553 157.5 117.765 157.5H87.9675C80.5233 157.5 75.6889 149.657 79.0338 143.007L147.94 6.0067Z"
                  className="fill-foreground"
                />
                <path
                  d="M153.027 112.257C154.726 108.882 158.181 106.753 161.96 106.753H191.772C199.217 106.753 204.051 114.598 200.704 121.248L185.229 151.996C183.53 155.371 180.074 157.5 176.296 157.5H146.484C139.039 157.5 134.204 149.655 137.552 143.004L153.027 112.257Z"
                  className="fill-foreground"
                />
                <path
                  d="M16.7713 6.00425C18.4699 2.6294 21.9255 0.500006 25.7037 0.500006H55.5159C62.9613 0.500006 67.7956 8.34524 64.4483 14.9958L48.9729 45.7432C47.2743 49.1181 43.8187 51.2475 40.0405 51.2475H10.2283C2.7829 51.2475 -2.05143 43.4022 1.29583 36.7517L16.7713 6.00425Z"
                  className="fill-foreground"
                />
              </svg>
            </Link>
          </div>
        </div>
      </header>
      {children}
      <footer className="mt-auto flex flex-col justify-end gap-20 px-5 pb-8 md:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex w-full flex-col justify-between gap-4 border-[#333] border-t pt-8 text-sm md:flex-row">
            <p>
              &copy; {new Date().getFullYear()} Zewdlabs. All rights reserved.
            </p>
            <ul className="flex flex-wrap items-center justify-start gap-4 text-sm">
              <li>
                <Link
                  href="/sitemap"
                  className="transition-colors duration-300 hover:text-foreground/80"
                >
                  Sitemap
                </Link>
              </li>
              <li>
                <Link
                  href="/legals"
                  className="transition-colors duration-300 hover:text-foreground/80"
                >
                  Legal
                </Link>
              </li>
              {/*TODO: make the cookies settings an options*/}
              <li>Cookies Settings</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export const metadata: Metadata = {
  title: 'Contact us',
};
