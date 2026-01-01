"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-15">
            <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top w-1/2 lg:w-1/4"
              >
                <a href="/" className="relative">
                  <Image
                    width={180}
                    height={80}
                    src="/images/logo/kassaposlogo.png"
                    alt="Logo"
                    className="dark:hidden"
                  />
                  <Image
                    width={110}
                    height={80}
                    src="/images/logo/kassaposlogo.png"
                    alt="Logo"
                    className="hidden dark:block"
                  />
                </a>

                <p className="mb-5 mt-3">
                  Kassapos is a fast, easy-to-use billing software designed for Shop to manage billing, inventory, and sales—all in one powerful platform.
                </p>

                <p className="mb-1.5 text-sectiontitle">
                  Contact
                </p>
                <a
                href="mailto:kassapos@gmail.com"
                className="flex items-center gap-3 text-itemtitle font-medium text-black transition hover:text-[#1660c1] dark:text-white"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  className="fill-[#5f6163] transition-all duration-300 group-hover:fill-[#1660c1]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
                </svg>
                kassapos@gmail.com
              </a>

              <a
                href="https://wa.me/919150665480"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-itemtitle font-medium text-black transition hover:text-[#1660c1] dark:text-white"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  className="fill-[#5f6163] transition-all duration-300 hover:fill-[#1660c1]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.52 3.48A11.78 11.78 0 0 0 12.01 0C5.39 0 .01 5.38.01 12c0 2.11.55 4.17 1.6 6.01L0 24l6.16-1.62A11.94 11.94 0 0 0 12 24c6.62 0 12-5.38 12-12 0-3.19-1.24-6.19-3.48-8.52Zm-8.52 18.54a9.88 9.88 0 0 1-5.05-1.39l-.36-.21-3.65.96.98-3.56-.24-.37A9.9 9.9 0 1 1 12 22.02Zm5.45-7.43c-.3-.15-1.78-.88-2.05-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.95 1.18-.17.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.67-1.61-.92-2.2-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.53.08-.8.38-.27.3-1.05 1.02-1.05 2.5s1.08 2.91 1.23 3.11c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.08 1.78-.73 2.03-1.44.25-.71.25-1.32.17-1.44-.08-.12-.27-.2-.57-.35Z" />
                </svg>
                +91 90874 77747
              </a>


              </motion.div>

              <div className="flex w-full flex-col gap-8 md:flex-row md:justify-between md:gap-0 lg:w-2/3 xl:w-7/12">
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-5 text-itemtitle2 font-medium text-black dark:text-white">
                    Quick Links
                  </h4>

                  <ul>
                    <li>
                      <a
                        href="/pages/web-development"
                        className="mb-2 inline-block hover:text-[#1660c1]"
                      >
                        Web Development
                      </a>
                    </li>
                    <li>
                      <a
                        href="/pages/android-app-development"
                        className="mb-2 inline-block hover:text-[#1660c1]"
                      >
                        Andriod App Development
                      </a>
                    </li>
                    <li>
                      <a
                        href="/pages/ios-app-development"
                        className="mb-2 inline-block hover:text-[#1660c1]"
                      >
                        IOS App Development
                      </a>
                    </li>
                    <li>
                      <a
                        href="/pages/e-commerce-development"
                        className="mb-2 inline-block hover:text-[#1660c1]"
                      >
                        E-Commerce Development
                      </a>
                    </li>
                    <li>
                      <a
                        href="/pages/seo-services"
                        className="mb-2 inline-block hover:text-[#1660c1]"
                      >
                        SEO Services
                      </a>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-5 text-itemtitle2 font-medium text-black dark:text-white">
                    Privacy Policy
                  </h4>

                  <ul>
                    <li>
                      <a
                        href="#"
                        className="mb-2 inline-block hover:text-[#1660c1]"
                      >
                        Company
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="mb-2 inline-block hover:text-[#1660c1]"
                      >
                        Press media
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="mb-2 inline-block hover:text-[#1660c1]"
                      >
                        Our Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="mb-2 inline-block hover:text-[#1660c1]"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-5 text-itemtitle2 font-medium text-black dark:text-white">
                    Newsletter
                  </h4>
                  <p className="mb-2 w-[90%]">
                    Subscribe to receive future updates
                  </p>

                  <form action="#">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Email address"
                        className="w-full rounded-full border border-stroke px-6 py-3 shadow-solid-11 focus:border-[#1660c1] focus:outline-hidden dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-[#1660c1]"
                      />

                      <button
                        aria-label="signup to newsletter"
                        className="absolute right-0 p-4"
                      >
                        <svg
                          className="fill-[#757693] hover:fill-[#1660c1] dark:fill-white"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_48_1487)">
                            <path
                              d="M3.1175 1.17318L18.5025 9.63484C18.5678 9.67081 18.6223 9.72365 18.6602 9.78786C18.6982 9.85206 18.7182 9.92527 18.7182 9.99984C18.7182 10.0744 18.6982 10.1476 18.6602 10.2118C18.6223 10.276 18.5678 10.3289 18.5025 10.3648L3.1175 18.8265C3.05406 18.8614 2.98262 18.8792 2.91023 18.8781C2.83783 18.8769 2.76698 18.857 2.70465 18.8201C2.64232 18.7833 2.59066 18.7308 2.55478 18.6679C2.51889 18.6051 2.50001 18.5339 2.5 18.4615V1.53818C2.50001 1.46577 2.51889 1.39462 2.55478 1.33174C2.59066 1.26885 2.64232 1.2164 2.70465 1.17956C2.76698 1.14272 2.83783 1.12275 2.91023 1.12163C2.98262 1.12051 3.05406 1.13828 3.1175 1.17318ZM4.16667 10.8332V16.3473L15.7083 9.99984L4.16667 3.65234V9.16651H8.33333V10.8332H4.16667Z"
                              fill=""
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_48_1487">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </div>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="flex flex-col flex-wrap items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex-row lg:justify-between lg:gap-0">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <ul className="flex items-center gap-8">
                <li>
                  <a href="/pages/privacy-policy" className="hover:text-[#1660c1]">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/pages/terms-and-conditions" className="hover:text-[#1660c1]">
                    Terms&Condition
                  </a>
                </li>
                <li>
                  <a href="/pages/refund-and-cancellation" className="hover:text-[#1660c1]">
                    Refund & Cancellation
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <p>
                Copyright &copy; {new Date().getFullYear()} Kassapos Software Solutions. All rights reserved.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <ul className="flex items-center gap-5">
                <li>
                  <a href="https://www.facebook.com/kassaposbillingsoftware" aria-label="social icon">
                    <svg
                      className="fill-[#D1D8E0] transition-all duration-300 hover:fill-[#1660c1]"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_48_1499)">
                        <path
                          d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_48_1499">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/kassapos_billingsoftware/"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="fill-[#D1D8E0] transition-all duration-300 hover:fill-[#1660c1]"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.343 3.608 1.318.975.975 1.256 2.242 1.318 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.343 2.633-1.318 3.608-.975.975-2.242 1.256-3.608 1.318-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.343-3.608-1.318-.975-.975-1.256-2.242-1.318-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.343-2.633 1.318-3.608.975-.975 2.242-1.256 3.608-1.318C8.416 2.175 8.796 2.163 12 2.163ZM12 6.259a5.741 5.741 0 1 0 0 11.482 5.741 5.741 0 0 0 0-11.482Zm0 9.481a3.741 3.741 0 1 1 0-7.482 3.741 3.741 0 0 1 0 7.482Zm6.406-10.845a1.35 1.35 0 1 0 0 2.7 1.35 1.35 0 0 0 0-2.7Z"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCTF9I51Y2XEhsUzCVXUj3Sg"
                    aria-label="YouTube"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="fill-[#D1D8E0] transition-all duration-300 hover:fill-[#1660c1]"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.498 6.186a2.999 2.999 0 0 0-2.112-2.118C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.386.568A2.999 2.999 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a2.999 2.999 0 0 0 2.112 2.118C4.495 20.5 12 20.5 12 20.5s7.505 0 9.386-.568a2.999 2.999 0 0 0 2.112-2.118C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://x.com/Kassa_pos/" aria-label="social icon">
                    <svg
                      className="fill-[#D1D8E0] transition-all duration-300 hover:fill-[#1660c1]"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_48_1502)">
                        <path
                          d="M22.162 5.65593C21.3985 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4803 3.89489 16.5709 3.74451C15.6615 3.59413 14.7279 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0771 6.14972C11.6978 6.98983 11.6067 7.93171 11.818 8.82893C10.1551 8.74558 8.52832 8.31345 7.04328 7.56059C5.55823 6.80773 4.24812 5.75098 3.19799 4.45893C2.82628 5.09738 2.63095 5.82315 2.63199 6.56193C2.63199 8.01193 3.36999 9.29293 4.49199 10.0429C3.828 10.022 3.17862 9.84271 2.59799 9.51993V9.57193C2.59819 10.5376 2.93236 11.4735 3.54384 12.221C4.15532 12.9684 5.00647 13.4814 5.95299 13.6729C5.33661 13.84 4.6903 13.8646 4.06299 13.7449C4.32986 14.5762 4.85 15.3031 5.55058 15.824C6.25117 16.345 7.09712 16.6337 7.96999 16.6499C7.10247 17.3313 6.10917 17.8349 5.04687 18.1321C3.98458 18.4293 2.87412 18.5142 1.77899 18.3819C3.69069 19.6114 5.91609 20.2641 8.18899 20.2619C15.882 20.2619 20.089 13.8889 20.089 8.36193C20.089 8.18193 20.084 7.99993 20.076 7.82193C20.8949 7.2301 21.6016 6.49695 22.163 5.65693L22.162 5.65593Z"
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_48_1502">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://in.linkedin.com/company/kassapos-software-solutions" aria-label="social icon">
                    <svg
                      className="fill-[#D1D8E0] transition-all duration-300 hover:fill-[#1660c1]"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_48_1505)">
                        <path
                          d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z"
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_48_1505">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>                
              </ul>
            </motion.div>
          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
