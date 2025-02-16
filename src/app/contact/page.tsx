import ContactForm from "@/app/contact/form";
import { TextRoll } from "@/app/contact/text-roll";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-dvh px-5 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid auto-cols-fr grid-cols-1 gap-8 py-5 md:grid-cols-2">
          <div className="flex flex-col justify-between gap-6 md:gap-8">
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

            <div className="flex flex-col">
              <h1 className="font-cal font-semibold text-2xl mb-4 text-muted-foreground capitalize lg:text-3xl">
                Contact information
              </h1>

              <div className="space-y-4 text-muted-foreground">
                <p className="-mx-2 flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-2 h-6 w-6 fill-none stroke-2 stroke-current text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <title>Location</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <span className="mx-2 w-72 truncate">
                    {/*Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522*/}
                    Addis Ababa, Ethiopia
                  </span>
                </p>

                <p className="-mx-2 flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-2 h-6 w-6 fill-none stroke-2 stroke-current text-primary"
                    viewBox="0 0 24 24"
                  >
                    <title>Phone</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>

                  <span className="mx-2 w-72 truncate"> +251 931 61 2090</span>
                </p>

                <p className="-mx-2 flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-2 h-6 w-6 fill-none stroke-2 stroke-current text-primary"
                    viewBox="0 0 24 24"
                  >
                    <title>Email</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>

                  <span className="mx-2 w-72 truncate">zewdlabs@gmail.com</span>
                </p>
              </div>

              <div className="mt-6 w-80 md:mt-8">
                <h3 className="font-cal text-xl">Our social media</h3>
                <nav className="-mx-1.5 mt-4 flex flex-col space-y-14">
                  <div className="flex items-center">
                    <ul className="flex items-center space-x-4">
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://x.com/nmktad"
                        >
                          <span className="sr-only">X</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            className="h-8 w-8"
                            viewBox="0,0,256,256"
                          >
                            <title>X formerly twitter</title>
                            <g
                              fill="none"
                              fillRule="nonzero"
                              stroke="none"
                              strokeWidth="1"
                              strokeLinecap="butt"
                              strokeLinejoin="miter"
                              strokeMiterlimit="10"
                              strokeDasharray=""
                              strokeDashoffset="0"
                              fontFamily="none"
                              fontWeight="none"
                              fontSize="none"
                              textAnchor="none"
                              style={{ mixBlendMode: "normal" }}
                            >
                              <g transform="scale(5.33333,5.33333)">
                                <path
                                  d="M41,6l-31.071,36h-3.714l31.072,-36z"
                                  fill="#f0f0f0"
                                  fillRule="nonzero"
                                />
                                <path
                                  d="M31.143,41l-23.323,-34h8.957l23.323,34z"
                                  className="fill-background"
                                  fillRule="evenodd"
                                />
                                <path
                                  d="M15.724,9l20.578,30h-4.106l-20.578,-30h4.106M17.304,6h-11.382l24.694,36h11.382l-24.694,-36z"
                                  fill="#f0f0f0"
                                  fillRule="nonzero"
                                />
                              </g>
                            </g>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://x.com/nmktad"
                        >
                          <span className="sr-only">Youtube</span>

                          <svg
                            width="13"
                            height="9"
                            className="h-6 w-6"
                            viewBox="0 0 13 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Youtube</title>
                            <path
                              d="M12.7355 1.415C12.6616 1.14357 12.517 0.896024 12.3162 0.697014C12.1154 0.498004 11.8654 0.354468 11.5911 0.280692C10.5739 0.00450089 6.5045 4.87928e-06 6.5045 4.87928e-06C6.5045 4.87928e-06 2.43578 -0.00449139 1.41795 0.259496C1.14379 0.336667 0.894302 0.482233 0.693428 0.68222C0.492554 0.882207 0.347041 1.1299 0.270859 1.40152C0.00259923 2.40737 9.51671e-07 4.49358 9.51671e-07 4.49358C9.51671e-07 4.49358 -0.0025972 6.59006 0.263714 7.58564C0.413109 8.13609 0.851549 8.57094 1.40885 8.71931C2.43643 8.9955 6.49476 9 6.49476 9C6.49476 9 10.5641 9.00449 11.5813 8.74115C11.8557 8.6675 12.106 8.52429 12.3073 8.32569C12.5086 8.12709 12.6539 7.87996 12.729 7.60876C12.998 6.60355 12.9999 4.51798 12.9999 4.51798C12.9999 4.51798 13.0129 2.42086 12.7355 1.415ZM5.20282 6.42628L5.20607 2.57244L8.58823 4.50257L5.20282 6.42628Z"
                              fill="white"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://x.com/nmktad"
                        >
                          <span className="sr-only">Facebook</span>

                          <svg
                            width="6"
                            height="12"
                            className="h-6 w-6"
                            viewBox="0 0 6 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Facebook</title>
                            <path
                              d="M3.89782 12V6.53514H5.67481L5.93895 4.39547H3.89782V3.03259C3.89782 2.41516 4.06363 1.99243 4.91774 1.99243H6V0.0847928C5.47342 0.0262443 4.94412 -0.00202566 4.41453 0.000112795C2.84383 0.000112795 1.76542 0.994936 1.76542 2.82122V4.39147H0V6.53114H1.76928V12H3.89782Z"
                              fill="white"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <div className="lg:mx-6">
            <div className="mx-auto w-full overflow-hidden rounded-xl bg-card-background px-8 py-10 text-card-foreground shadow-2xl lg:max-w-xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
