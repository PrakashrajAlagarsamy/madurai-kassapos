import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Page - Kassapos Billing Software",

  // other metadata
  description: "Get support for Kassapos Billing Software. Contact our team for assistance, troubleshooting, and customer service."
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contact />
    </div>
  );
};

export default SupportPage;
