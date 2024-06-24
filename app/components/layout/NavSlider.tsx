"use client";
import React, { ComponentPropsWithoutRef, useRef } from "react";
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
import Container3D from "./Container3D";

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
  title?: {
    text: string;
    textTransform?: "lowercase" | "uppercase" | "capitalize";
    position: Position;
    textColor?: Color;
    backgroundColor?: Color;
  };
  href: string;
  backgroundColor?: Color;
  backgroundImage?: {
    imageUrl: string;
    altText: string;
  };
  badge?: BadgeProps;
};

const options: Option[] = [
  {
    id: 1,
    title: {
      text: "SOUND",
      textTransform: "uppercase",
      position: "center",
      textColor: "black",
    },
    href: "#",
    backgroundColor: "white",
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
  },
  {
    id: 3,
    title: {
      text: "RELEASES",
      textTransform: "uppercase",
      position: "center",
      textColor: "black",
    },
    href: "#",
    backgroundColor: "white",
  },
  {
    id: 4,
    href: "#",
    badge: {
      text: "new",
      textTransform: "uppercase",
      position: "top-right",
      backgroundColor: "black",
    },
  },
  {
    id: 5,
    href: "#",
    badge: {
      text: "listen",
      textTransform: "uppercase",
      position: "top-right",
      backgroundColor: "black",
    },
  },
];

function ControlButton({ className, ...props }: ControlButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "z-10 p-3 shadow-sm focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-violet-600",
        className,
      )}
      {...props}
    >
      {props.direction === "prev" && (
        <ChevronLeftIcon className="h-3 w-3" aria-hidden="true" />
      )}
      {props.direction === "next" && (
        <ChevronRightIcon className="h-3 w-3" aria-hidden="true" />
      )}
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
          "font-drukTextWide group/link absolute flex items-center justify-center rounded-sm border border-black px-2 py-1 group-hover:bg-white group-hover:text-black",
        )}
      >
        <span className={cn(props.textTransform, "text-sm")}>{props.text}</span>
        <ArrowUpRightIcon className="ml-2 inline-block h-3 w-3 translate-y-[0.5px] stroke-[4px] transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
      </Link>
    );
  }
  return (
    <div
      className={cn(
        props.position === "center" &&
          "-transform-y-1/2 left-1/2 top-1/2 -translate-x-1/2",
        props.position === "top-right" && "right-2 top-2",
        "font-drukTextWide absolute flex items-center justify-center rounded-sm border border-black px-2 py-1 group-hover:bg-white group-hover:text-black",
      )}
    >
      <span className={cn(props.textTransform, "text-sm")}>{props.text}</span>
    </div>
  );
}

export default function NavSlider() {
  const instance = useRef<SwiperRef>(null);

  return (
    <div className="relative flex h-full w-full flex-col">
      <div className="mb-5 flex items-end border-b-8 border-double border-black pb-5">
        <h3 className="font-druk mb-0 inline-block text-6xl uppercase">
          the choice
          <span className="font-drukCondensed mx-3">is</span>
          yours
        </h3>
        <h6 className="ml-auto inline-block">
          <span className="inline-block">view more</span>
          <ChevronRightIcon className="inline-block h-3 w-3 -translate-y-[1px]" />
        </h6>
      </div>
      <Swiper
        // navigation={true}
        slidesPerView={"auto"}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        loop={true}
        spaceBetween={20}
        modules={[Navigation, Autoplay]}
        className="!h-96 !w-full py-1"
        ref={instance}
      >
        {options.map((option, i) => (
          <SwiperSlide
            key={option.id}
            className="!relative !flex !h-full !w-72 flex-col pb-1"
          >
            <Container3D className="group h-full w-full transition-transform duration-300 hover:scale-95">
              <div className="relative h-full w-full p-1">
                {option.backgroundImage && (
                  <div className="absolute inset-0 h-full w-full">
                    <a
                      href={option.href}
                      className="relative block h-full w-full"
                    >
                      <Image
                        src={option.backgroundImage.imageUrl}
                        alt={option.backgroundImage.altText}
                        fill
                        sizes="160px"
                      />
                    </a>
                    <div className="pointer pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                    <div className="pointer pointer-events-none absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                )}

                {option.badge && <Badge {...option.badge} />}
                {option.title && (
                  <p
                    className={cn(
                      option.title.position === "center" &&
                        "-transform-y-1/2 left-1/2 top-1/2 -translate-x-1/2",
                      "font-drukTextWide absolute text-2xl",
                    )}
                  >
                    {option.title.text}
                  </p>
                )}
              </div>
            </Container3D>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-10 flex justify-between">
        <p className="max-w-sm text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          doloribus eligendi enim at natus magni
        </p>
        <div className="group flex gap-2">
          <ControlButton
            direction="prev"
            onClick={() => instance.current?.swiper.slidePrev()}
            className="peer border border-black bg-white text-black hover:bg-black hover:text-white"
          />
          <ControlButton
            direction="next"
            onClick={() => instance.current?.swiper.slideNext()}
            className="border border-black bg-black text-white hover:bg-white hover:text-black peer-hover:bg-white peer-hover:text-black"
          />
        </div>
      </div>
    </div>
  );
}
