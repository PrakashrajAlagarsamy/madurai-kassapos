"use client";
import React, { useState } from "react"; 
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import ToasterContext from "../context/ToastContext";

export default function ClientLayout({children}: {children: React.ReactNode}) {
    const [showPopup, setShowPopup] = useState(false);
    return (
        <ThemeProvider
            enableSystem={false}
            attribute="class"
            defaultTheme="light"
        >
            {/* <Lines /> */}
            <Header showPopup={showPopup} setShowPopup={setShowPopup} />            
            <ToasterContext />
            {children}
            <Footer />
            <ScrollToTop />            
        </ThemeProvider>
    );
}
