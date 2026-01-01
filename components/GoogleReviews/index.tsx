"use client";
import Image from "next/image";
import { useState } from "react";
import SectionHeader from "../Common/SectionHeader";
import GoogleReviewsData from "./googleReviewsData";
import { motion } from "framer-motion";

const GoogleReviews = () => {
    return (
        <>
            {/* <!-- ===== Reviews Start ===== --> */}
            <section className="relative">
                {/* <!-- Section Title Start --> */}
                <div className="animate_top mx-auto text-center mt-10">
                    <SectionHeader
                        headerInfo={{
                            title: `Trusted by Thousands of Happy Customers`,
                            subtitle: `What Our Users Say About Kassapos Billing Software`,
                            description: `Read genuine reviews from our satisfied customers and discover how Kassapos Billing Software has transformed their business operations.`,
                        }}
                    />
                </div>
                {/* <!-- Section Title End --> */}
                <div className="relative mx-auto max-w-c-1235 px-4 md:px-5 xl:px-0 mt-10">
                    <div className="flex flex-col w-full" id="testimoni">
                        <div className="w-full flex flex-col py-6">
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
                                className="animate_top mb-10 flex flex-wrap justify-evenly md:flex-nowrap md:items-center lg:gap-3 xl:mb-15 xl:gap-5"
                            >
                                <GoogleReviewsData />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ===== Reviews End ===== --> */}
        </>
    );
};

export default GoogleReviews;
