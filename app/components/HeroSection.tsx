"use client";
import { StaticImageData } from "next/image";
import React, {
  ComponentPropsWithoutRef,
  useEffect,
  useRef,
  useState,
} from "react";
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
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Container } from "./Container";

type Slide = {
  _id: string;
  title: string;
  artists: string[];
  slug: string;
  releaseDate: string;
  catno: string;
  image: StaticImageData | string;
};

type UI = {
  cta1Text: string;
  cta1href: string;
  cta2Text: string;
  cta2href: string;
};

const TIMEOUT = 2500;
const slides: Slide[] = [
  {
    _id: "a",
    title: "Lorem Lorem",
    artists: ["Lorem Lorem"],
    slug: "#",
    releaseDate: "2020-05-05",
    catno: "TIN045",
    image:
      "https://geo-media.beatport.com/image_size/1400x1400/e71908bc-6fab-4a20-94c5-12254f5fbe1c.jpg",
  },
  {
    _id: "b",
    title: "Lorem Lorem",
    artists: ["Lorem Lorem"],
    slug: "#",
    releaseDate: "2020-05-05",
    catno: "TIN045",
    image:
      "https://geo-media.beatport.com/image_size/1400x1400/22ed9910-4b65-4bb2-8299-90abf1b66e06.jpg",
  },
  {
    _id: "c",
    title: "Lorem Lorem",
    artists: ["Lorem Lorem"],
    slug: "#",
    releaseDate: "2020-05-05",
    catno: "TIN045",
    image:
      "https://geo-media.beatport.com/image_size/1400x1400/a1c62219-2051-4898-b229-49e8edddea9c.jpg",
  },
  {
    _id: "d",
    title: "Lorem Lorem",
    artists: ["Lorem Lorem", "Lorem Lorem"],
    slug: "#",
    releaseDate: "2020-05-05",
    catno: "TIN045",
    image:
      "https://geo-media.beatport.com/image_size/1400x1400/2735df18-cc9c-4535-9187-c592e75e5acd.jpg",
  },
];

function Button({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"button">) {
  return (
    <button
      className={cn(
        "absolute top-1/2 z-10 hidden -translate-y-1/2 place-content-center rounded-full bg-black/10 p-2 backdrop-blur-sm sm:grid",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

function Timers({
  realIndex,
  progress,
}: {
  realIndex: number;
  progress: number;
}) {
  const timers: {
    _id: string;
    artists: string[];
    title: string;
    index: number;
  }[] = [
    {
      _id: "a",
      artists: ["Lorem Lorem"],
      title: "Lorem LoremLorem Lorem",
      index: 0,
    },
    {
      _id: "b",
      artists: ["Lorem Lorem", "Lorem Lorem"],
      title: "Lorem LoremLorem Lorem",
      index: 1,
    },
    {
      _id: "c",
      artists: ["Lorem Lorem", "Lorem Lorem"],
      title: "Lorem LoremLorem Lorem",
      index: 2,
    },
    {
      _id: "d",
      artists: ["Lorem Lorem", "Lorem Lorem"],
      title: "Lorem LoremLorem Lorem Lorem Lorem ",
      index: 3,
    },
  ];

  useEffect(() => {}, [progress]);
  const progressBarStyles =
    "[&::-webkit-progress-bar]:bg-transparent [&::-webkit-progress-value]:bg-white [&::-moz-progress-bar]:bg-white";

  return (
    <div className="absolute left-1/2 top-20 z-10 h-20 w-full -translate-x-1/2 overflow-hidden">
      <Container>
        <ul className="grid w-full grid-cols-1 gap-5 uppercase text-white md:grid-cols-4">
          {timers.map((timer, i, arr) => (
            <li
              key={timer._id}
              className={cn(
                realIndex === timer.index ? "block" : "hidden",
                "md:block",
              )}
            >
              <div className="relative h-2 w-full border border-white">
                <div
                  className="absolute inset-0 rotate-180 bg-white"
                  style={{
                    clipPath: `${realIndex === timer.index ? `polygon(${progress * 100}% 0, 100% 0, 100% 100%, ${progress * 100}% 100%)` : "polygon(0 0, 0 0, 0 100%, 0 100%)"}`,
                  }}
                ></div>
              </div>
              <span className="hidden sm:line-clamp-1">{timer.title}</span>
              <span className="hidden sm:line-clamp-1">
                {timer.artists.length > 1
                  ? timer.artists.join(", ")
                  : timer.artists[0]}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

export default function HeroSection() {
  const swiperInstance = useRef<SwiperRef>(null);
  const [realIndex, setRealIndex] = useState<number>(0);
  const [progress, setProgress] = useState(1);

  return (
    <section className="relative">
      <Timers realIndex={realIndex} progress={progress} />
      <Swiper
        modules={[Pagination, Navigation, Keyboard, EffectFade, Autoplay]}
        loop={true}
        grabCursor={true}
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        // autoplay={{
        //   delay: TIMEOUT,
        // }}
        onAutoplayTimeLeft={(swiper, timeleft, percentage) =>
          setProgress(percentage)
        }
        onSlideChange={(swiper) => setRealIndex(swiper.realIndex)}
        keyboard={{
          enabled: true,
        }}
        className="relative isolate h-full !w-full text-black"
        ref={swiperInstance}
      >
        {slides.map((object, i) => (
          <SwiperSlide
            key={object._id}
            className="pointer-events-none !isolate flex h-full w-full items-center justify-center !overflow-hidden"
          >
            {/* BACKGROUND */}
            <div className="absolute inset-0 origin-top-left scale-[1.5] blur-[6px] brightness-[0.6]">
              <Image
                src={object.image}
                alt={object.title}
                fill
                className="pointer-events-none object-cover"
              />
              <div className="pointer pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              <div className="pointer pointer-events-none absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* FOREGROUND */}
            <div className="relative z-20 h-full w-full">
              <Container size="md">
                <div className="//items-center isolate flex min-h-dvh flex-col justify-center p-5 pt-32 sm:pt-40 lg:flex-row lg:items-end lg:justify-start">
                  {/* IMAGE */}
                  <div className="flex flex-col self-center sm:flex-row">
                    <div className="relative order-1 aspect-square w-64 shrink-0 sm:order-2 sm:w-[60vw] sm:max-w-lg lg:w-[440px] xl:w-[32rem]">
                      <Image
                        src={object.image}
                        alt={object.title}
                        fill
                        className="pointer-events-none object-cover"
                      />
                    </div>
                    <h6 className="z-20 order-2 self-center font-semibold text-white sm:order-1 sm:rotate-180 sm:self-end sm:indent-5 sm:[writing-mode:vertical-lr] md:-ml-10">
                      <span className="uppercase text-violet-700">
                        {object.catno}{" "}
                      </span>
                      <span className="capitalize">Released - </span>
                      <span>
                        {new Date(object.releaseDate).toLocaleDateString(
                          undefined,
                          {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          },
                        )}
                      </span>
                    </h6>
                  </div>
                  {/* DETAILS */}
                  <div className="relative self-center sm:text-center lg:z-10 lg:-ml-24 lg:text-start">
                    <span
                      className="bold mt-2.5 block text-2xl uppercase text-white sm:text-3xl sm:text-transparent md:text-4xl lg:text-5xl xl:text-6xl"
                      style={{
                        WebkitTextStrokeWidth: "2px",
                        WebkitTextStrokeColor: "white",
                      }}
                    >
                      {object.title}
                    </span>
                    <span className="bold mb-2.5 block text-xl uppercase text-white sm:truncate sm:whitespace-nowrap sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                      {object.artists.length > 1
                        ? object.artists.join(", ")
                        : object.artists[0]}
                    </span>

                    <div className="flex flex-col gap-5 sm:flex-row">
                      <button className="inline-block bg-violet-700 px-9 py-3 font-semibold uppercase text-white md:px-12 md:py-4">
                        view release
                      </button>
                      <button className="inline-block border border-white px-9 py-3 font-semibold uppercase text-white md:px-12 md:py-4">
                        play music
                      </button>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Button
        onClick={() => swiperInstance.current?.swiper.slidePrev()}
        className="left-10"
      >
        <ChevronLeftIcon className="h-6 w-6 -translate-x-px text-white" />
      </Button>
      <Button
        onClick={() => swiperInstance.current?.swiper.slideNext()}
        className="right-10"
      >
        <ChevronRightIcon className="h-6 w-6 translate-x-px text-white" />
      </Button>
    </section>
  );
}
