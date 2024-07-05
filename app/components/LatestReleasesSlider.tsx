"use client";
import React, { ComponentPropsWithoutRef, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Color, Position, Release } from "@/app/lib/types";
import Image, { StaticImageData } from "next/image";
import {
  ArrowUpRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

import { cn } from "@/app/lib/helpers";
import Link from "next/link";

type ControlButtonProps = ComponentPropsWithoutRef<"button"> & {
  direction: "prev" | "next";
};
type BadgeProps = {
  rounded?: "sm" | "lg" | "full";
  text: string;
  textTransform?: "lowercase" | "uppercase" | "capitalize";
  position: Position;
  textColor?: Color;
  backgroundColor?: Color;
  href?: "#";
};

type DivProps = ComponentPropsWithoutRef<"div"> & BadgeProps;
type LinkProps = ComponentPropsWithoutRef<typeof Link> & BadgeProps;

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
  badge?: BadgeProps;
};

const options: Option[] = [
  {
    id: 1,
    href: "#",
    backgroundImage: {
      imageUrl:
        "https://geo-media.beatport.com/image_size/1400x1400/7c153a55-123a-4440-bf1c-f59c9ba73c77.jpg",
      altText: "test",
    },
  },
  {
    id: 2,
    href: "#",
    badge: {
      text: "listen",
      textTransform: "uppercase",
      position: "top-right",
      backgroundColor: "black",
      href: "#",
    },
    backgroundImage: {
      imageUrl:
        "https://geo-media.beatport.com/image_size/1400x1400/7c153a55-123a-4440-bf1c-f59c9ba73c77.jpg",
      altText: "test",
    },
  },
  {
    id: 3,
    href: "#",
    backgroundImage: {
      imageUrl:
        "https://geo-media.beatport.com/image_size/1400x1400/7c153a55-123a-4440-bf1c-f59c9ba73c77.jpg",
      altText: "test",
    },
  },
  {
    id: 4,
    href: "#",
    backgroundImage: {
      imageUrl:
        "https://geo-media.beatport.com/image_size/1400x1400/7c153a55-123a-4440-bf1c-f59c9ba73c77.jpg",
      altText: "test",
    },
  },
  {
    id: 5,
    href: "#",
    backgroundImage: {
      imageUrl:
        "https://geo-media.beatport.com/image_size/1400x1400/7c153a55-123a-4440-bf1c-f59c9ba73c77.jpg",
      altText: "test",
    },
  },
  {
    id: 6,
    href: "#",
    backgroundImage: {
      imageUrl:
        "https://geo-media.beatport.com/image_size/1400x1400/7c153a55-123a-4440-bf1c-f59c9ba73c77.jpg",
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

function Badge(props: DivProps | LinkProps) {
  if (isLink(props)) {
    return (
      <Link
        href={props.href}
        className={cn(
          props.position === "center" &&
            "-transform-y-1/2 left-1/2 top-1/2 -translate-x-1/2",
          props.position === "top-right" && "right-2 top-2",
          "group/link absolute flex items-center justify-center rounded-lg border border-black px-2 py-1 group-hover:bg-white group-hover:text-black",
        )}
      >
        <span className={cn(props.textTransform, "text-sm")}>{props.text}</span>
        <ArrowUpRightIcon className="ml-2 inline-block h-3 w-3 translate-y-[0.5px] transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
      </Link>
    );
  }
  return (
    <div
      className={cn(
        props.position === "center" &&
          "-transform-y-1/2 left-1/2 top-1/2 -translate-x-1/2",
        props.position === "top-right" && "right-2 top-2",
        "absolute flex items-center justify-center rounded-lg border border-black px-2 py-1 group-hover:bg-white group-hover:text-black",
      )}
    >
      <span className={cn(props.textTransform, "text-sm")}>{props.text}</span>
    </div>
  );
}

export default function LatestReleasesSlider() {
  const instance = useRef<SwiperRef>(null);
  const [realIndex, setRealIndex] = useState<number>(0);
  const [isEnded, setIsEnded] = useState(false);
  const [isStart, setIsStart] = useState(false);
  console.log(realIndex);

  return (
    <div>
      <Swiper
        // navigation={true}
        slidesPerView={"auto"}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        // loop={true}
        onSlideChange={(swiper) => setRealIndex(swiper.realIndex)}
        slidesOffsetBefore={160}
        slidesOffsetAfter={80}
        slidesPerGroup={2}
        spaceBetween={20}
        onReachBeginning={() => setIsStart(true)}
        onReachEnd={() => setIsEnded(true)}
        onFromEdge={() => {
          setIsEnded(false);
          setIsStart(false);
        }}
        modules={[Navigation, Autoplay]}
        className="relative isolate w-full"
        ref={instance}
      >
        {options.map((option, i) => (
          <SwiperSlide key={option.id} className="static !w-72 lg:!w-80">
            <div className="group transition-transform duration-300 hover:scale-[0.98]">
              <div className="relative aspect-square overflow-hidden rounded-xl border border-neutral-200">
                <Image
                  src={option.backgroundImage.imageUrl}
                  alt={option.backgroundImage.altText}
                  width={600}
                  height={600}
                  className="object-cover"
                />
                <div className="pointer pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100"></div>
                <div className="pointer pointer-events-none absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100"></div>
                {/* <Link href={option.href} className="absolute inset-0" /> */}

                {option.badge && <Badge {...option.badge} />}
              </div>
              <h5 className="mt-2">Artist Name</h5>
              <p>Track Name</p>
            </div>
          </SwiperSlide>
        ))}
        {!isStart && (
          <ControlButton
            direction="prev"
            onClick={() => instance.current?.swiper.slidePrev()}
            className="peer absolute left-5 top-1/2 -translate-y-1/2"
          >
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </ControlButton>
        )}
        {!isEnded && (
          <ControlButton
            direction="next"
            onClick={() => instance.current?.swiper.slideNext()}
            className="absolute right-5 top-1/2 -translate-y-1/2"
          >
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </ControlButton>
        )}
      </Swiper>
    </div>
  );
}
