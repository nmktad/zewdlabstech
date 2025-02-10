import type { PropsWithChildren } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export default function PublicLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <>
      <header className="px-5 md:px-10 h-16 md:h-20 flex z-50 py-4 justify-center items-center">
        <div className="max-w-7xl w-full flex gap-8">
          {/* Logo */}
          <div className="flex items-center">
            <svg
              className="h-8"
              viewBox="0 0 202 158"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
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
            {/* TODO: Full version of the logo i.e text version of the logo
        <svg
          className="h-10"
          viewBox="0 0 470 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.950562 71.4203H50.65V62.0358H17.2298L51.4161 4.5798H6.31314V13.9643H35.1369L0.950562 71.4203Z"
            fill="#221F20"
          />
          <path
            d="M97.9166 13.9643V4.5798H59.8998V71.4203H97.9166V62.0358H70.625V39.5322H95.5226V30.1477H70.625V19.6141L62.8684 13.9643H97.9166Z"
            fill="#221F20"
          />
          <path
            d="M151.036 28.1368L164.251 61.94L169.518 75.2507L174.976 61.94L198.821 4.57979H188.096L169.805 48.6294L151.036 0.74939L145.578 14.4431L132.172 48.6294L113.882 4.57979H103.156L132.555 75.2507L137.726 61.94L151.036 28.1368Z"
            fill="#221F20"
          />
          <path
            d="M221.667 4.5798H206.345V71.4203H221.667C236.318 71.4203 259.301 64.5256 259.301 38C259.301 11.4745 236.318 4.5798 221.667 4.5798ZM209.314 13.9643H222.912C231.147 13.9643 248.576 17.9862 248.576 38C248.576 58.0139 231.147 62.0358 222.912 62.0358H217.07V19.6141L209.314 13.9643Z"
            fill="#221F20"
          />
          <path
            d="M280.287 62.0358V4.5798H269.562V71.4203H300.492V62.0358H280.287Z"
            fill="#221F20"
          />
          <path
            d="M369.951 71.4203L341.415 11.9533L335.957 0.74939L302.057 71.4203H312.783L318.528 59.546L312.495 55.1411H351.374L359.226 71.4203H369.951ZM325.136 45.7566L335.957 23.0615L346.873 45.7566H325.136Z"
            fill="#221F20"
          />
          <path
            d="M406.599 35.5103C406.599 35.5103 412.249 31.1053 412.249 23.4445C412.249 7.83565 399.896 4.5798 389.362 4.5798H377.201V71.4203H395.108C405.546 71.4203 418.377 67.3026 418.377 52.1725C418.377 38 406.599 35.5103 406.599 35.5103ZM380.169 41.7347H394.054C398.651 41.7347 408.131 42.5008 408.131 51.7895C408.131 60.9824 398.555 62.0358 394.916 62.0358H387.926V47.3845L380.169 41.7347ZM387.926 33.4036V13.9643H392.81C396.353 13.9643 402.386 15.4007 402.386 23.636C402.386 31.7756 396.353 33.4036 392.139 33.4036H387.926Z"
            fill="#221F20"
          />
          <path
            d="M438.694 21.242C438.694 16.071 444.152 13.0067 448.653 13.0067C453.153 13.0067 457.75 16.454 457.75 19.5184L468.283 19.6141C468.283 12.2406 461.867 3.62219 448.748 3.62219C435.629 3.62219 428.16 13.1024 428.16 21.1463C428.16 41.3516 458.612 36.5636 458.612 51.8852C458.612 56.1944 455.26 62.9934 447.408 62.9934C439.46 62.9934 436.012 57.0563 435.533 50.6404H425.096C425.096 57.2478 429.692 72.2821 446.929 72.2821C464.166 72.2821 469.049 57.8223 469.049 51.2149C469.049 29.8604 438.694 32.5417 438.694 21.242Z"
            fill="#221F20"
          />
        </svg>
      */}
          </div>

          {/* Links and CTA components */}
          <div className="w-full justify-between items-center hidden md:flex">
            {/* Links */}
            <ul className="flex">
              <li>
                <Link href="#services" className="px-4 py-1 text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#services" className="px-4 py-1 text-white">
                  About us
                </Link>
              </li>
            </ul>
            {/* CTA components */}
            <div>
              <Link
                href="/contact"
                className="inline-flex h-12 animate-shimmer items-center justify-center rounded-4xl border border-gray-800 bg-[linear-gradient(110deg,#101010,45%,#1e2631,55%,#101010)] bg-[length:200%_100%] px-6 font-medium text-foreground transition-colors focus:outline-none"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </header>
      {children}
      <footer className="pb-8 min-h-svh gap-20 flex flex-col justify-end items-center px-5 md:px-10">
        <div className="max-w-7xl w-full">
          <div className="w-full"></div>
          <div className="text-sm w-full border-t border-[#333] pt-8 flex flex-col gap-4 md:flex-row justify-between">
            <p>
              &copy; {new Date().getFullYear()} Zewdlabs. All rights reserved.
            </p>
            <ul className="flex items-center justify-start flex-wrap gap-4 text-sm">
              <li>
                <Link
                  href="/sitemap"
                  className="transition-colors hover:text-foreground/80 duration-300"
                >
                  Sitemap
                </Link>
              </li>
              <li>
                <Link
                  href="/legals"
                  className="transition-colors hover:text-foreground/80 duration-300"
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
