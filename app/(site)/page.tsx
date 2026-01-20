import { Metadata } from "next";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import SoftwareBusinessTypes from "@/components/SoftwareBusinessTypes";
import CustomerProblemText from "@/components/CustomerProblemText";
import FeaturesTab from "@/components/FeaturesTab";
import GoogleReviews from "@/components/GoogleReviews";
import TrustKassapos from "@/components/TrustKassapos";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import OurStores from "@/components/OurStores";

export const metadata: Metadata = {
  title: "Kassapos - Madurai's Best Billing Software",
  // other metadata
  description: "Kassapos is the best billing software in Madurai, designed to streamline your business operations with ease and efficiency. Experience seamless invoicing, inventory management, and customer tracking all in one platform."
};

export default function Home() {
  return (
    <main>
      <Hero /> 
      <ClientLogos />     
      <SoftwareBusinessTypes /> 
      <OurStores />     
      <CustomerProblemText />
      <FeaturesTab />      
      <TrustKassapos />
      <GoogleReviews />      
      <FAQ />      
      <Contact />
      <Blog />
    </main>
  );
}
