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
import Container3D from "./ShadowWrap";

import { cn } from "@/app/lib/helpers";
import Link from "next/link";
import { Container } from "./Container";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "../common/Button";

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
  {
    id: 6,
    title: {
      text: "DANCE TONIGHT",
      textTransform: "uppercase",
      position: "center",
      textColor: "black",
    },
    href: "#",
    backgroundColor: "white",
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
          "group/link absolute flex items-center justify-center rounded-sm border border-black px-2 py-1 font-drukTextWide group-hover:bg-white group-hover:text-black",
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
        "absolute flex items-center justify-center rounded-sm border border-black px-2 py-1 font-drukTextWide group-hover:bg-white group-hover:text-black",
      )}
    >
      <span className={cn(props.textTransform, "text-sm")}>{props.text}</span>
    </div>
  );
}

export default function MenuSlider() {
  const instance = useRef<SwiperRef>(null);
  const container = useRef<HTMLElement | any>();
  const eyebrow = useRef<HTMLElement | any>();
  const titleWrap = useRef<HTMLElement | any>();
  const underline1 = useRef<HTMLElement | any>();
  const underline2 = useRef<HTMLElement | any>();
  const controlPanel = useRef<HTMLElement | any>();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top center",
          toggleActions: "restart pause pause none",
        },
      });

      tl.fromTo(
        ".heading-word-slider",
        {
          yPercent: -100,
          opacity: 0,
        },
        { yPercent: 0, opacity: 1, ease: "back.out" },
      );
      tl.fromTo(
        underline1.current,
        {
          right: "100%",
        },
        { right: 0, ease: "power1.inOut" },
      );
      tl.fromTo(
        underline2.current,
        {
          left: "100%",
        },
        { left: 0, ease: "power1.inOut" },
      );
      tl.fromTo(
        eyebrow.current,
        {
          xPercent: -100,
          opacity: 0,
        },
        { xPercent: 0, opacity: 1 },
      );
      tl.fromTo(
        controlPanel.current,
        {
          yPercent: 100,
          opacity: 0,
        },
        { yPercent: 0, opacity: 1, duration: 1 },
      );
      tl.fromTo(
        ".slide",
        {
          xPercent: -100,
          opacity: 0,
        },
        { xPercent: 0, opacity: 1, duration: 1, stager: 0.2 },
        0,
      );
    },
    { scope: container.current },
  );

  return (
    // <div className="rounded-4xl mt-24 bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
    <Container>
      <div
        className="relative flex h-screen w-full flex-col justify-center"
        ref={container}
      >
        <div
          className={cn("relative mb-5 flex items-end pb-5")}
          ref={titleWrap}
        >
          <div
            className="absolute bottom-3 left-0 h-[2px] bg-black"
            ref={underline1}
          ></div>
          <div
            className="absolute bottom-2 right-0 h-[2px] bg-black"
            ref={underline2}
          ></div>
          <h3 className="mb-0 inline-block font-druk text-6xl uppercase">
            <span className="heading-word-slider inline-block">the choice</span>
            <span className="heading-word-slider mx-3 inline-block font-drukCondensed">
              is
            </span>
            <span className="heading-word-slider inline-block">yours</span>
          </h3>
          <Button
            className="ml-auto inline-block p-0 font-drukText text-2xl uppercase"
            is3d={false}
            ref={eyebrow}
          >
            <span className="inline-block">get more</span>
            <ChevronRightIcon className="ml-px inline-block h-4 w-4 -translate-y-[1px]" />
          </Button>
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
              className="slide !relative !flex !h-full !w-72 flex-col pb-1"
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
                        "absolute font-drukTextWide text-2xl",
                        option.title.position === "center" &&
                          "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center",
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
        <div className="mt-10 flex justify-between" ref={controlPanel}>
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
    </Container>
    // </div>
  );
}
