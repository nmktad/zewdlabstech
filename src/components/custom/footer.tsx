export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-600 px-6 py-8 md:px-12 lg:px-24">
      <div className="mx-auto container max-w-7xl">
        {/* Top Footer */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <svg
            className="w-16 h-16 md:w-24 md:h-24"
            viewBox="0 0 1024 1024"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
          >
            <title>Zewdlabs Logo</title>
            <path
              d="M420.693 223.012C424.089 216.26 431.002 212 438.559 212H591.473C606.339 212 616.009 227.644 609.363 240.942L329.461 800.942C326.074 807.719 319.148 812 311.571 812H156.843C141.954 812 132.285 796.313 138.976 783.012L420.693 223.012Z"
              className="fill-accent-foreground"
            />
            <path
              d="M696.471 223.012C699.868 216.26 706.78 212 714.338 212H867.251C882.118 212 891.788 227.644 885.141 240.942L605.239 800.942C601.852 807.719 594.926 812 587.35 812H432.621C417.732 812 408.063 796.313 414.755 783.012L696.471 223.012Z"
              className="fill-accent-foreground"
            />
            <path
              d="M715.918 629.068C719.316 622.319 726.227 618.061 733.782 618.061H888.541C903.432 618.061 913.101 633.752 906.405 647.054L828.91 800.993C825.513 807.742 818.602 812 811.046 812H656.288C641.396 812 631.728 796.308 638.424 783.007L715.918 629.068Z"
              className="fill-accent-foreground"
            />
            <path
              d="M195.09 223.007C198.487 216.258 205.398 212 212.954 212H367.712C382.604 212 392.272 227.692 385.576 240.993L308.082 394.932C304.684 401.681 297.773 405.939 290.218 405.939H135.459C120.568 405.939 110.899 390.248 117.595 376.946L195.09 223.007Z"
              className="fill-accent-foreground"
            />
          </svg>

          {/* Social Icons */}
          <div className="flex gap-6">
            <a
              href="https://pinterest.com"
              className="text-gray-400 transition-colors hover:text-white"
              aria-label="Pinterest"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                role="img"
              >
                <title>Pinterest</title>
                <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
              </svg>
            </a>

            <a
              href="https://linkedin.com"
              className="text-gray-400 transition-colors hover:text-white"
              aria-label="LinkedIn"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                role="img"
              >
                <title>LinkedIn</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
              </svg>
            </a>

            <a
              href="https://behance.net"
              className="text-gray-400 transition-colors hover:text-white"
              aria-label="Behance"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                role="img"
              >
                <title>Behance</title>
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168z" />
              </svg>
            </a>

            <a
              href="https://dribbble.com"
              className="text-gray-400 transition-colors hover:text-white"
              aria-label="Dribbble"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                role="img"
              >
                <title>Dribbble</title>
                <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-600" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
          <p className="tracking-widest text-gray-400">Paris, France</p>

          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a
              href="/about-us"
              className="text-gray-300 transition-colors hover:text-white"
            >
              About us
            </a>
            <a
              href="/works"
              className="text-gray-300 transition-colors hover:text-white"
            >
              Works
            </a>
            <a
              href="/blogs"
              className="text-gray-300 transition-colors hover:text-white"
            >
              Blog
            </a>
            <a
              href="/contact-us"
              className="text-gray-300 transition-colors hover:text-white"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
