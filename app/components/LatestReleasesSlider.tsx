"use client";
import React, { ComponentPropsWithoutRef, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { Navigation, FreeMode } from "swiper/modules";

import { Color, Position, Release } from "@/app/lib/types";
import Image, { StaticImageData } from "next/image";
import {
  ArrowUpRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusCircleIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

import { cn } from "@/app/lib/helpers";
import Link from "next/link";
import { Container } from "./Container";

type ControlButtonProps = ComponentPropsWithoutRef<"button"> & {
  direction: "prev" | "next";
};

type DivProps = ComponentPropsWithoutRef<"div">;
type LinkProps = ComponentPropsWithoutRef<typeof Link>;

function isLink(props: DivProps | LinkProps): props is LinkProps {
  return "href" in props;
}

type Option = {
  id: number;
  href: string;
  backgroundImage: {
    imageUrl: string;
    altText: string;
  };
};

const options: Option[] = [
  {
    id: 1,
    href: "#",
    backgroundImage: {
      imageUrl: "https://f4.bcbits.com/img/0034250422_36.jpg",
      altText: "test",
    },
  },
  {
    id: 2,
    href: "#",
    backgroundImage: {
      imageUrl: "https://f4.bcbits.com/img/0033653835_10.jpg",
      altText: "test",
    },
  },
  {
    id: 3,
    href: "#",
    backgroundImage: {
      imageUrl: "https://f4.bcbits.com/img/0034250422_36.jpg",
      altText: "test",
    },
  },
  {
    id: 4,
    href: "#",
    backgroundImage: {
      imageUrl: "https://f4.bcbits.com/img/0033653835_10.jpg",
      altText: "test",
    },
  },
  {
    id: 5,
    href: "#",
    backgroundImage: {
      imageUrl: "https://f4.bcbits.com/img/0034250422_36.jpg",
      altText: "test",
    },
  },
  {
    id: 6,
    href: "#",
    backgroundImage: {
      imageUrl: "https://f4.bcbits.com/img/0033653835_10.jpg",
      altText: "test",
    },
  },
];

function ControlButton({ className, children, ...props }: ControlButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "relative isolate z-10 overflow-hidden rounded-full p-3",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default function LatestReleasesSlider() {
  const instance = useRef<SwiperRef>(null);
  const [realIndex, setRealIndex] = useState<number>(0);
  const [isEnded, setIsEnded] = useState(false);
  const [isStart, setIsStart] = useState(false);

  return (
    <Swiper
      slidesPerView={"auto"}
      onSlideChange={(swiper) => setRealIndex(swiper.realIndex)}
      // slidesOffsetBefore={240}
      // slidesOffsetAfter={160}
      spaceBetween={20}
      freeMode={true}
      watchSlidesProgress={true}
      // onReachBeginning={() => setIsStart(true)}
      // onReachEnd={() => setIsEnded(true)}
      // onFromEdge={() => {
      //   setIsEnded(false);
      //   setIsStart(false);
      // }}
      modules={[Navigation, FreeMode]}
      className="relative isolate w-full"
      ref={instance}
    >
      {options.map((option, i) => (
        <SwiperSlide
          key={option.id}
          className="relative !w-[300px]"
          datatype-i={i}
        >
          <div className="group transition-transform duration-300 hover:scale-[0.98]">
            <div className="relative aspect-[2/3] w-full overflow-hidden rounded-xl border border-neutral-200">
              <Image
                src={option.backgroundImage.imageUrl}
                alt={option.backgroundImage.altText}
                fill
                className="image object-cover object-right-bottom"
              />
              <div className="pointer pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100"></div>
              <div className="pointer pointer-events-none absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100"></div>
              {/* <Link href={option.href} className="absolute inset-0" /> */}
            </div>
          </div>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-black/20 p-2 backdrop-blur-sm">
            <PlusIcon className="h-4 w-4 text-gray-900" />
          </div>
        </SwiperSlide>
      ))}
      {/* {!isStart && ( */}
      <ControlButton
        direction="prev"
        onClick={() => instance.current?.swiper.slidePrev()}
        className="peer absolute left-5 top-1/2 -translate-y-1/2"
      >
        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
      </ControlButton>
      {/* )} */}
      {/* {!isEnded && ( */}
      <ControlButton
        direction="next"
        onClick={() => instance.current?.swiper.slideNext()}
        className="absolute right-5 top-1/2 -translate-y-1/2"
      >
        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
      </ControlButton>
      {/* )} */}
    </Swiper>
  );
}
