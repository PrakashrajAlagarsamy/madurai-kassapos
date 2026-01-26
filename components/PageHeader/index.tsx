"use client";

import Image from "next/image";

const PageHeader = () => {
    return (
        <section
            className="section page-header bg-light has-shapes has-bg-brash bg-brash-bottom"
            data-aos="fade-in"
        >
            <Image
                src="https://copper-nextjs.vercel.app/images/brushes/banner.svg"
                alt=""
                width={732}
                height={1050}
                className="absolute bottom-0 left-0 w-full h-auto"
                priority
            />

            <div className="container">
                <div className="row flex items-center">
                    <div className="md:col-12 text-center">
                        <h2>Contact Us</h2>

                        <nav className="mt-4" aria-label="breadcrumb">
                            <ol className="text-center flex items-center justify-center">
                                <li className="font-medium">
                                    <a className="text-black/90" href="/">
                                        Home
                                    </a>
                                </li>
                                <li className="font-medium">
                                    <span className="inline-block mx-3">/</span>
                                    <span className="text-primary">Contact</span>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="shape-1 bg-secondary shape-xs rounded-circle" />
            <div className="shape-2 bg-primary shape-xs-2 rounded-circle lg:block hidden" />
            <div className="shape-3 bg-primary shape-sm-2 rounded-circle" />
            <div className="shape-4 bg-tertiary shape-xs rounded-circle" />
            <div className="shape-5 bg-tertiary shape-xs rounded-circle" />
            <div className="shape-6 bg-primary shape-sm rounded-circle" />
            <div className="shape-7 bg-primary shape-xs-2 rounded-circle" />
            <div className="shape-8 bg-secondary shape-xs rounded-circle" />
        </section>
    );
};

export default PageHeader;
