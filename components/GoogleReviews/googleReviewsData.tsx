"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

const STAR_ICON = "/images/icon/stars.svg";
const USER_ICON = "/images/icon/user-img.png";
const ARROW_BACK_ICON = "/images/icon/eva_arrow-back-fill.svg";
const ARROW_NEXT_ICON = "/images/icon/eva_arrow-next-fill.svg";

interface ReviewItem {
    name: string;
    image: string;
    city: string;
    country: string;
    rating: string;
    testimonial: string;
}

const GoogleReviewsData = () => {
    const [reviews, setReviews] = useState < ReviewItem[] > ([]);
    const [sliderRef, setSliderRef] = useState < Slider | null > (null);


    useEffect(() => {
        const fetchReviews = async () => {
            const res = await fetch("/api/fetchReviews");
            const data = await res.json();
            setReviews(data);
        };
        fetchReviews();
    }, []);


    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
    };

    if (!reviews.length) {
        return <p className="text-center">Loading reviews...</p>;
    }

    return (
        <div className="w-full">
            <Slider {...settings} ref={setSliderRef}>
                {reviews.map((review, index) => (
                    <div className="px-3 flex items-stretch" key={index}>
                        <div className="border-1 border-gray-500 hover:border-[#1660c1] transition-all rounded-lg p-6 flex flex-col">
                            <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                                <div className="flex order-2 xl:order-1">
                                    <Image src={USER_ICON || ""} alt="" width={35} height={35} />
                                    <div className="flex flex-col ml-5 text-left">
                                        <p className="text-sm text-black-600 capitalize">
                                            {review.name}
                                        </p>
                                        {/* <p className="text-sm text-black-500 capitalize">
                                            {review.city},{review.country}
                                        </p> */}
                                    </div>
                                </div>
                                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                                    <p className="text-sm mr-2">{review.rating}</p>

                                    <span className="flex gap-1">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <Image
                                                key={i}
                                                src={STAR_ICON}
                                                alt="star"
                                                width={16}
                                                height={16}
                                            />
                                        ))}
                                    </span>
                                </div>

                            </div>
                            <p className="mt-5 text-left text-xs">“{review.testimonial}”.</p>
                        </div>
                    </div>
                ))}
            </Slider>

            {/* Controls */}
            <div className="flex w-full items-center justify-end">
                <div className="flex flex-none justify-between w-auto mt-10">
                    <div
                        className="mx-4 flex items-center justify-center h-10 w-10 rounded-full bg-white border-[#1660c1] border hover:bg-[#1660c1] hover:text-white-500 transition-all text-[#1660c1] cursor-pointer"
                        onClick={sliderRef?.slickPrev}
                    >
                        <Image src={ARROW_BACK_ICON} alt="Prev" width={20} height={20} />
                    </div>
                    <div
                        className="flex items-center justify-center h-10 w-10 rounded-full bg-white border-[#1660c1] border hover:bg-[#1660c1] hover:text-white-500 transition-all text-[#1660c1] cursor-pointer"
                        onClick={sliderRef?.slickNext}
                    >
                        <Image src={ARROW_NEXT_ICON} alt="Next" width={20} height={20} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoogleReviewsData;


