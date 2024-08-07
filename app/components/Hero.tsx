"use client";
import React, { ComponentPropsWithoutRef, useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Navigation,
  Keyboard,
  EffectFade,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { cn } from "../lib/helpers";
import Image from "next/image";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MinusCircleIcon,
} from "@heroicons/react/24/outline";

function Button({
  direction,
  className,
  ...props
}: ComponentPropsWithoutRef<"button"> & {
  direction: "backwards" | "forwards";
}) {
  function getIcon(direction: "backwards" | "forwards") {
    if (direction === "backwards") return ChevronLeftIcon;
    if (direction === "forwards") return ChevronRightIcon;
  }
  const Icon = getIcon(direction) as typeof ChevronLeftIcon;

  return (
    <button
      className={cn("relative grid place-content-center rounded-full")}
      {...props}
    >
      <Icon className={"h-10 w-10 text-white"} />
    </button>
  );
}

const media = [
  {
    _id: 1,
    video:
      "https://bandcamp.23video.com/9891472.ihtml/player.html?token=42e96102fe7a02550302676a42d3bf9c&source=embed&photo_id=57423095",
  },
  {
    _id: 2,
    video:
      "https://videos.pexels.com/video-files/3196600/3196600-uhd_2560_1440_25fps.mp4",
  },
  {
    _id: 3,
    video:
      "https://bandcamp.23video.com/9891472.ihtml/player.html?token=42e96102fe7a02550302676a42d3bf9c&source=embed&photo_id=57423095",
  },
];

export default function Hero() {
  const swiperInstance = useRef<SwiperRef>(null);
  const [realIndex, setRealIndex] = useState<number>(0);

  console.log(realIndex);

  return (
    <section>
      <Swiper
        modules={[Pagination, Navigation, Keyboard, EffectFade, Autoplay]}
        loop={true}
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        onSlideChange={(swiper) => setRealIndex(swiper.realIndex)}
        keyboard={{
          enabled: true,
        }}
        className="relative isolate h-full w-full bg-blue-500 text-black"
        ref={swiperInstance}
      >
        {media.map((object, i) => (
          <SwiperSlide
            key={i}
            className="pointer-events-none !flex aspect-video !h-auto w-full items-center justify-center !overflow-hidden md:!h-72 lg:!h-[472px]"
          >
            <video
              autoPlay
              muted
              playsInline
              loop
              className="w-full object-cover"
              src={object.video}
              //   ref={video}
            >
              <source
                src={object.video}
                width={"auto"}
                className="w-full object-cover"
              />
            </video>
          </SwiperSlide>
        ))}

        <div className="controls absolute bottom-5 left-0 z-10 flex w-full items-end justify-between px-20">
          <div className="flex w-36 gap-1">
            {media.map((object, i) => (
              <button
                key={i}
                className={cn(
                  "inline-block h-[2px] flex-1 bg-neutral-700",
                  realIndex === i && "bg-neutral-50",
                )}
                onClick={() => swiperInstance.current?.swiper.slideTo(i)}
              ></button>
            ))}
          </div>
          <div className="flex gap-5">
            <Button
              direction="backwards"
              onClick={() => swiperInstance.current?.swiper.slidePrev()}
            />
            <Button
              direction="forwards"
              onClick={() => swiperInstance.current?.swiper.slideNext()}
            />
          </div>
        </div>
      </Swiper>
    </section>
  );
}
