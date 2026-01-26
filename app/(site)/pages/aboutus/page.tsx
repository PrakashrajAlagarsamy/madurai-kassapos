import React from "react";
import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
    title: "About Us -Kasspos Software",
    description: "This is About Us page for Kasspos Software"
};

export default function AboutUs() {
    return (
        <>       
            <main className="max-w-7xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-blue-700 mb-6">About Kasspos Software</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                    Kassapos Software Solutions is a leading provider of Billing Software, Retail Billing Software, and POS Software based in Madurai. Established in 2008, we have been dedicated to delivering innovative software solutions that cater to the evolving needs of businesses in the retail sector. Our mission is to empower businesses with efficient and user-friendly software that enhances their operational efficiency and customer experience.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                    Over the years, Kassapos Software has built a reputation for excellence and reliability. Our team of experienced professionals is committed to continuous improvement and innovation, ensuring that our software solutions remain at the forefront of technology. We take pride in our customer-centric approach, working closely with our clients to understand their unique requirements and deliver tailored solutions that drive success.
                </p>
            </main>
        </>
    );
}