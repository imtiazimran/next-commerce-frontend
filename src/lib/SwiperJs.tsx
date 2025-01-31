/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';

interface SwiperProps {
    images: string[]; // Array of image URLs
    vertical?: boolean; // If true, Swiper will be vertical
    className?: string; // Additional custom classes
}

const SwiperComponent = ({
    images,
}: SwiperProps) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null); // Moved state here

    return (
        <div className="flex flex-col-reverse md:flex-row max-w-7xl mx-auto  gap-5">
            {/* Thumbnail Swiper on the left */}
            <div className="w-[12%]">
                <Swiper
                    onSwiper={setThumbsSwiper}
                    direction="vertical" // Makes the swiper vertical
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="md:h-[500px] h-[80px] rounded-lg "
                >
                    {
                        images?.map((image, index) => (
                            <SwiperSlide key={index}>
                                <Image
                                    width={100}
                                    height={100}
                                    src={image}
                                    alt="Thumbnail"
                                    className="w-full h-20 object-cover rounded-lg cursor-pointer"
                                />
                            </SwiperSlide>
                        ))
                    } 
                </Swiper>
            </div>

            {/* Main Swiper for large images */}
            <div className="w-full md:w-4/5">
                <Swiper
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="w-full h-[500px] rounded-lg shadow-lg"
                >
                 {
                        images?.map((image, index) => (
                            <SwiperSlide key={index}>
                                <Image
                                    width={100}
                                    height={100}
                                    src={image}
                                    unoptimized={true}
                                    alt="Thumbnail"
                                    className="w-full h-full object-cover rounded-lg cursor-pointer"
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default SwiperComponent;
