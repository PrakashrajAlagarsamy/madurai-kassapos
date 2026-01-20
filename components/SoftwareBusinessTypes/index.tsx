"use client";
import React from "react";
import businessTypeData from "./businessTypeData";
import SingleBusinessType from "./SingleBusinessType";
import SectionHeader from "../Common/SectionHeader";

const SoftwareBusinessTypes = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "Software Business Type",
              subtitle: "Perfect POS Software for Every Business Type",
              description: `Access and manage your store effortlessly using Kassapos — built for every retail need.`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-7 grid grid-cols-1 gap-5.5 md:grid-cols-3 lg:mt-10 lg:grid-cols-4 xl:mt-15 xl:gap-7">
            {/* <!-- Features item Start --> */}

            {businessTypeData.map((feature, key) => (
              <SingleBusinessType feature={feature} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default SoftwareBusinessTypes;
