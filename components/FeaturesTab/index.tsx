"use client";
import Image from "next/image";
import { useState } from "react";
import FeaturesTabItem from "./FeaturesTabItem";
import featuresTabData from "./featuresTabData";
import SectionHeader from "../Common/SectionHeader";

import { motion } from "framer-motion";

const FeaturesTab = () => {
  const [currentTab, setCurrentTab] = useState("tabOne");

  return (
    <>
      {/* <!-- ===== Features Tab Start ===== --> */}
      <section className="relative pb-20 pt-5 lg:pb-22.5">
        {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `Here is our feature-loaded Billing Software `,
                subtitle: `Everything you need to run your Shop efficiently`,
                description: `Discover the powerful features of our billing software designed to streamline your business operations and enhance productivity.`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        <div className="mt-10 relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="absolute -top-16 -z-1 mx-auto h-[350px] w-[90%]">
            <Image
              fill
              className="dark:hidden"
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted Shape"
            />
            <Image
              fill
              className="hidden dark:block"
              src="/images/shape/shape-dotted-dark.svg"
              alt="Dotted Shape"
            />
          </div>

          {/* <!-- Tab Menues Start --> */}
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
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mb-10 flex flex-wrap justify-evenly rounded-[10px] border border-stroke bg-white shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6 md:flex-nowrap md:items-center lg:gap-3 xl:mb-15 xl:gap-5"
          >
            <div
              onClick={() => setCurrentTab("tabOne")}
              className={`relative flex w-full cursor-pointer items-center gap-2 border-b border-stroke px-2 py-1 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-3 xl:py-3 ${
                currentTab === "tabOne"
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-[#1660c1]"
                  : ""
              }`}
            >              
              <div className="md:w-3/1 lg:w-auto">
                <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                  Billing & Product
                </button>
              </div>
            </div>
            <div
              onClick={() => setCurrentTab("tabTwo")}
              className={`relative flex w-full cursor-pointer items-center gap-2 border-b border-stroke px-2 py-1 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-5 xl:py-3 ${
                currentTab === "tabTwo"
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-[#1660c1]"
                  : ""
              }`}
            >              
              <div className="md:w-3/5 lg:w-auto">
                <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                  Purchase & Stock
                </button>
              </div>
            </div>
            <div
              onClick={() => setCurrentTab("tabThree")}
              className={`relative flex w-full cursor-pointer items-center gap-2 border-b border-stroke px-2 py-1 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-5 xl:py-3 ${
                currentTab === "tabThree"
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-[#1660c1]"
                  : ""
              }`}
            >              
              <div className="md:w-3/5 lg:w-auto">
                <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                  Report & Utility
                </button>
              </div>
            </div>
            <div
              onClick={() => setCurrentTab("tabFour")}
              className={`relative flex w-full cursor-pointer items-center gap-2 border-b border-stroke px-2 py-1 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-5 xl:py-3 ${
                currentTab === "tabFour"
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-[#1660c1]"
                  : ""
              }`}
            >              
              <div className="md:w-3/5 lg:w-auto">
                <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                  Sales
                </button>
              </div>
            </div>
            <div
              onClick={() => setCurrentTab("tabFive")}
              className={`relative flex w-full cursor-pointer items-center gap-2 border-b border-stroke px-2 py-1 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-5 xl:py-3 ${
                currentTab === "tabFive"
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-[#1660c1]"
                  : ""
              }`}
            >              
              <div className="md:w-3/5 lg:w-auto">
                <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                  Security
                </button>
              </div>
            </div>
            <div
              onClick={() => setCurrentTab("tabSix")}
              className={`relative flex w-full cursor-pointer items-center gap-2 border-b border-stroke px-2 py-1 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-5 xl:py-3 ${
                currentTab === "tabSix"
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-[#1660c1]"
                  : ""
              }`}
            >              
              <div className="md:w-3/5 lg:w-auto">
                <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                  Support
                </button>
              </div>
            </div>
          </motion.div>
          {/* <!-- Tab Menues End --> */}

          {/* <!-- Tab Content Start --> */}
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
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="animate_top mx-auto max-w-c-1154"
          >
            {featuresTabData.map((feature, key) => (
              <div
                className={feature.id === currentTab ? "block" : "hidden"}
                key={key}
              >
                <FeaturesTabItem featureTab={feature} />
              </div>
            ))}
          </motion.div>
          {/* <!-- Tab Content End --> */}
        </div>
      </section>
      {/* <!-- ===== Features Tab End ===== --> */}
    </>
  );
};

export default FeaturesTab;
