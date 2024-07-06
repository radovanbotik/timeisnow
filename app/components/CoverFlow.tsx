"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

import { ReleaseProps } from "../page";
import { useEffect, useRef, useState } from "react";
import { Container } from "./Container";
import { urlFor } from "../sanity/helpers";
import Image from "next/image";
import { PlayIcon } from "@heroicons/react/24/outline";

export default function CoverFlow({ data }: { data: ReleaseProps[] }) {
  return (
    <section className="bg-black py-10">
      <Container>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="relative isolate !h-full !w-full"
        >
          {data.map(({ _id, image, title }, i) => (
            <SwiperSlide key={_id} className="isolate">
              <div className="relative aspect-square w-64 cursor-pointer shadow-xl sm:w-[60vw] sm:max-w-lg lg:w-[440px] xl:w-[16rem]">
                {/* <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/10 p-6 opacity-0 shadow-lg backdrop-blur-[2px] group-hover:opacity-100">
                  <PlayIcon className="h-8 w-8 translate-x-[2px] text-white/50 md:h-12 md:w-12" />
                </div> */}
                <Image
                  src={
                    urlFor(image)?.url() ||
                    "https://via.placeholder.com/550x310"
                  }
                  alt={title}
                  fill
                  className="pointer-events-none object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
