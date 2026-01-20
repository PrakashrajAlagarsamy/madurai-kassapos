"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const CustomerProblemText = () => {
  return (
    <>
      {/* <!-- ===== CustomerProblemText Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "Why Choose Us",
              subtitle: "Tired of Common Billing Software Problems?",
              description: ``,
            }}
          />
          {/* <!-- Section Title End --> */}

        <div className="mt-10 mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-start gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left bg-[#ebfafe] rounded-lg relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/features.svg"
                alt="About"
                className="dark:hidden px-5"
                fill
              />
              <Image
                src="/images/about/features.svg"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >              
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Designed for Software {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  Businesses
                </span>
              </h2>              

              <div className="mt-4 flex items-center gap-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    1
                  </p>
                </div>
                <div className="w-3/4">
                  <h4 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    System slowing down during peak billing hours?
                  </h4>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    2
                  </p>
                </div>
                <div className="w-3/4">
                  <h4 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Stock or sales data not syncing properly between devices or branches?
                  </h4>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    3
                  </p>
                </div>
                <div className="w-3/4">
                  <h4 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Hard for your team to learn or use the software effectively?
                  </h4>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    4
                  </p>
                </div>
                <div className="w-3/4">
                  <h4 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Unable to set different pricing for wholesale and retail customers?
                  </h4>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    5
                  </p>
                </div>
                <div className="w-3/4">
                  <h4 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    No proper support when something goes wrong or needs fixing?
                  </h4>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    6
                  </p>
                </div>
                <div className="w-3/4">
                  <h4 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                    Worried about data safety or losing records stored online?
                  </h4>
                </div>
              </div>
              <div className="mt-5">
                <p>
                And worst of all? You may not even realize these issues are costing you <span className="text-[red] font-semibold">lakhs each year</span>.
              </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== CustomerProblemText End ===== --> */}      
    </>
  );
};

export default CustomerProblemText;
