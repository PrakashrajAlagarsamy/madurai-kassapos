"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-30 md:pt-40 xl:pb-25 xl:pt-35">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h2 className="mb-4.5 text-xl font-medium text-[#1660c1] dark:text-white">
                Grow your retail faster with
              </h2>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white ">
                KASSAPOS POS {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  Software
                </span>
              </h1>
              <p>
                Kassapos Software Solutions is one of the best leading software providers of Billing Software in Madurai, Retail Billing Software in Madurai and POS software in Madurai. Our Company was incorporated in 2008, and since then constantly developing new services and solutions targeting the challenges faced by the entire business environment.
              </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-white border-2 border-[#1660c1] px-7.5 py-2.5 text-[#1660c1] duration-300 ease-in-out hover:bg-[#1660c1] dark:bg-[#1660c1] dark:hover:bg-[#1660c1] hover:text-white dark:text-white"
                    >
                      Free Demo
                    </button>
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-white dark:bg-white dark:hover:bg-white hover:text-black dark:text-black border-2 border-black"
                    >
                      Get Premium
                    </button>
                  </div>
                </form>

                <p className="mt-5 text-black dark:text-white">
                  Start your free trial. No payment required.
                </p>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-500/400 w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/Annachi.png"
                    alt="Hero"
                    fill
                  />                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
