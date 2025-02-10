import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pb-8 min-h-svh gap-20 flex flex-col justify-end items-center px-5 md:px-10">
      <div className="max-w-7xl w-full">
        <div className="w-full">Footer</div>
        <div className="text-sm w-full border-t pt-8 flex items-center justify-between">
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
  );
}
