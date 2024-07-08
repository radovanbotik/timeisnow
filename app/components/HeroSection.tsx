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
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";
import { Container } from "./Container";
import { ReleaseProps } from "../page";
import { urlFor } from "../sanity/helpers";
import Link from "next/link";
import mesh from "../../public/assets/images/mesh.jpg";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

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

const TIMEOUT = 5000;
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
        "//top-1/2 //-translate-y-1/2 //rounded-full //bg-black/10 //backdrop-blur-sm z-10 place-content-center p-1 sm:grid",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

function Timers({
  data,
  realIndex,
  progress,
}: {
  realIndex: number;
  progress: number;
  data: ReleaseProps[];
}) {
  useEffect(() => {}, [progress]);

  return (
    <div className="absolute left-1/2 top-20 z-10 h-20 w-full -translate-x-1/2 overflow-hidden">
      <Container>
        <ul className="grid w-full grid-cols-1 gap-5 uppercase text-black md:grid-cols-4">
          {data.map(({ _id, artist, title }, i, arr) => (
            <li
              key={_id}
              className={cn(realIndex === i ? "block" : "hidden", "md:block")}
            >
              <div className="relative mb-2 h-2 w-full border border-black">
                <div
                  className="absolute inset-0 rotate-180 bg-black"
                  style={{
                    clipPath: `${realIndex === i ? `polygon(${progress * 100}% 0, 100% 0, 100% 100%, ${progress * 100}% 100%)` : "polygon(0 0, 0 0, 0 100%, 0 100%)"}`,
                  }}
                ></div>
              </div>
              <span className="hidden text-lg leading-[0.95] tracking-tighter sm:line-clamp-1">
                {title}
              </span>
              <span className="hidden text-lg leading-[0.95] tracking-tighter sm:line-clamp-1">
                {artist.length > 1
                  ? artist.map((a) => a.artistName).join(", ")
                  : artist[0].artistName}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

export default function HeroSection({ data }: { data: ReleaseProps[] }) {
  const swiperInstance = useRef<SwiperRef>(null);
  const [realIndex, setRealIndex] = useState<number>(0);
  const [progress, setProgress] = useState(1);
  const container = useRef();

  // useGSAP(
  //   () => {
  //     const slides = gsap.utils.toArray("[data-id='heroslide']");

  //     slides.forEach((slide) => {
  //       ScrollTrigger.create({
  //         trigger: slide,
  //         animation: gsap.fromTo(
  //           slide,
  //           {
  //             opacity: 0,
  //           },
  //           {
  //             opacity: 100,
  //             duration: 200,
  //             scrollTrigger: {},
  //           },
  //         ),
  //       });
  //     });
  //   },
  //   { scope: swiperInstance.current },
  // );

  return (
    <section className="relative">
      <Timers realIndex={realIndex} progress={progress} data={data} />
      <Swiper
        modules={[Pagination, Navigation, Keyboard, EffectFade, Autoplay]}
        loop={true}
        grabCursor={true}
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: TIMEOUT,
        }}
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
        {data.map(({ _id, image, title, catno, date, artist, slug }, i) => (
          <SwiperSlide
            key={_id}
            className="!isolate flex h-full w-full cursor-grab items-center justify-center !overflow-hidden active:cursor-grabbing"
            data-id={"heroslide"}
          >
            {/* BACKGROUND */}
            {/* <div className="absolute inset-0 origin-top-left scale-[1.5] blur-[6px] brightness-[0.6]">
              <Image
                src={
                  urlFor(image)?.url() || "https://via.placeholder.com/550x310"
                }
                alt={title}
                fill
                className="pointer-events-none object-cover"
              />
              <div className="pointer pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              <div className="pointer pointer-events-none absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black/30 to-transparent"></div>
            </div> */}

            {/* FOREGROUND */}
            <div className="relative z-20 h-full w-full">
              <Container size="md">
                <div className="//items-center isolate flex min-h-dvh flex-col justify-center p-5 pt-32 sm:pt-40 lg:flex-row lg:items-end lg:justify-start">
                  {/* IMAGE */}
                  <div className="group flex flex-col self-center drop-shadow-md sm:flex-row">
                    <div className="relative order-1 aspect-square w-64 shrink-0 cursor-pointer sm:order-2 sm:w-[60vw] sm:max-w-lg lg:w-[440px] xl:w-[32rem]">
                      <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/10 p-6 opacity-0 shadow-lg backdrop-blur-[2px] group-hover:opacity-100">
                        <PlayIcon className="h-8 w-8 translate-x-[2px] text-black/50 md:h-12 md:w-12" />
                      </div>
                      <Image
                        src={
                          urlFor(image)?.url() ||
                          "https://via.placeholder.com/550x310"
                        }
                        alt={title}
                        fill
                        className="pointer-events-none object-cover"
                      />
                      <div className="pointer pointer-events-none absolute inset-0 bg-gradient-to-l from-black/10 via-transparent to-transparent"></div>
                    </div>
                    <h6 className="z-20 order-2 self-center font-semibold italic text-black sm:order-1 sm:rotate-180 sm:self-end sm:indent-5 sm:[writing-mode:vertical-lr] md:-ml-10">
                      <span className="uppercase text-black">{catno}</span>
                      <span className="capitalize"> - Released - </span>
                      <span>
                        {new Date(date).toLocaleDateString(undefined, {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </h6>
                  </div>
                  {/* DETAILS */}
                  <div className="relative self-center text-center lg:z-10 lg:-ml-24 lg:text-start">
                    <span
                      className="bold //sm:text-transparent mt-2.5 block font-drukTextWide text-2xl uppercase text-black sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
                      style={{
                        WebkitTextStrokeWidth: "1px",
                        WebkitTextStrokeColor: "black",
                        textShadow: "2px 2px black",
                      }}
                    >
                      {title}
                    </span>
                    <span
                      className="bold space-nowrap text-gray-303 text-l1 mb-2.5 block font-drukTextWide uppercase sm:truncate sm:text-xl sm:text-gray-100 md:text-2xl lg:mb-5 lg:text-4xl xl:text-5xl"
                      style={{
                        WebkitTextStrokeWidth: "1px",
                        WebkitTextStrokeColor: "black",
                        textShadow: "2px 2px black",
                      }}
                    >
                      {artist.length > 1
                        ? artist.map((a) => a.artistName).join(", ")
                        : artist[0].artistName}
                    </span>

                    <div className="flex flex-col gap-5 sm:flex-row">
                      <Link
                        href={`/releases/${slug.current}`}
                        className="apperance-none inline-block bg-black px-10 py-5 font-semibold uppercase text-gray-100 shadow-xl md:px-12 md:py-6"
                      >
                        view release
                      </Link>
                      <button className="inline-block border border-black px-10 py-5 font-semibold uppercase leading-[0] text-black shadow-xl md:px-12 md:py-6">
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
      {/* XS */}
      <Button
        onClick={() => swiperInstance.current?.swiper.slidePrev()}
        className="absolute left-2 top-1/2 inline-block -translate-y-1/2 bg-black lg:hidden"
      >
        <ChevronLeftIcon className="h-6 w-6 -translate-x-px text-gray-100" />
      </Button>
      <Button
        onClick={() => swiperInstance.current?.swiper.slideNext()}
        className="absolute right-2 top-1/2 inline-block -translate-y-1/2 bg-black lg:hidden"
      >
        <ChevronRightIcon className="h-6 w-6 translate-x-px text-gray-100" />
      </Button>

      <div className="absolute bottom-5 right-40 z-10 hidden items-center gap-5 lg:flex lg:flex-row">
        <div className="hidden text-center font-druk text-5xl italic text-black lg:flex lg:flex-row lg:justify-center">
          <div>
            <span
              className="text-gray-200"
              style={{
                WebkitTextStrokeWidth: "1px",
                WebkitTextStrokeColor: "black",
                textShadow: "2px 2px black",
              }}
            >
              {(realIndex + 1).toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}
            </span>
          </div>
          <div
            className="mx-2 text-gray-200"
            style={{
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "black",
              textShadow: "2px 2px black",
            }}
          >
            <span>-</span>
          </div>
          <div>
            <span
              className="text-gray-200"
              style={{
                WebkitTextStrokeWidth: "1px",
                WebkitTextStrokeColor: "black",
                textShadow: "2px 2px black",
              }}
            >
              {data.length.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}
            </span>
          </div>
        </div>
        <div className="hidden flex-col justify-between lg:flex">
          <Button
            onClick={() => swiperInstance.current?.swiper.slidePrev()}
            className="hidden lg:block"
          >
            <ChevronUpIcon className="h-5 w-5 text-black" />
          </Button>
          <Button
            onClick={() => swiperInstance.current?.swiper.slideNext()}
            className="hidden lg:block"
          >
            <ChevronDownIcon className="h-5 w-5 text-black" />
          </Button>
        </div>
      </div>
    </section>
  );
}
