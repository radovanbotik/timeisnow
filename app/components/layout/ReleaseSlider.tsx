"use client";
import React, { ComponentPropsWithoutRef, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Release } from "@/app/lib/types";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Button from "../common/Button";
import Container3D from "./Container3D";

const releases: Release[] = [
  {
    id: 1,
    title: "Flashback",
    artists: ["Jeremy Sylvester", "Maria Labelle"],
    releaseDate: "2024-03-22",
    href: "TIN056",
    catalog: "TIN056",
    imageUrl:
      "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg",
    tracks: [
      {
        id: 1,
        title: "90s man",
        artists: ["Jeremy Sylvester"],
        length: 348,
        BPM: 132,
        key: "G Minor",
      },
      {
        id: 1,
        title: "Flashback",
        artists: ["Jeremy Sylvester"],
        length: 330,
        BPM: 130,
        key: "G Minor",
      },
    ],
  },
  {
    id: 2,
    title: "Flashback",
    artists: ["Jeremy Sylvester", "Maria Labelle"],
    releaseDate: "2024-03-22",
    href: "TIN056",
    catalog: "TIN056",
    imageUrl:
      "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg",
    tracks: [
      {
        id: 1,
        title: "90s man",
        artists: ["Jeremy Sylvester"],
        length: 348,
        BPM: 132,
        key: "G Minor",
      },
      {
        id: 1,
        title: "Flashback",
        artists: ["Jeremy Sylvester"],
        length: 330,
        BPM: 130,
        key: "G Minor",
      },
    ],
  },
  {
    id: 3,
    title: "Flashback",
    artists: ["Jeremy Sylvester", "Maria Labelle"],
    releaseDate: "2024-03-22",
    href: "TIN056",
    catalog: "TIN056",
    imageUrl:
      "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg",
    tracks: [
      {
        id: 1,
        title: "90s man",
        artists: ["Jeremy Sylvester"],
        length: 348,
        BPM: 132,
        key: "G Minor",
      },
      {
        id: 1,
        title: "Flashback",
        artists: ["Jeremy Sylvester"],
        length: 330,
        BPM: 130,
        key: "G Minor",
      },
    ],
  },
  {
    id: 4,
    title: "Flashback",
    artists: ["Jeremy Sylvester", "Maria Labelle"],
    releaseDate: "2024-03-22",
    href: "TIN056",
    catalog: "TIN056",
    imageUrl:
      "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg",
    tracks: [
      {
        id: 1,
        title: "90s man",
        artists: ["Jeremy Sylvester"],
        length: 348,
        BPM: 132,
        key: "G Minor",
      },
      {
        id: 1,
        title: "Flashback",
        artists: ["Jeremy Sylvester"],
        length: 330,
        BPM: 130,
        key: "G Minor",
      },
    ],
  },
  {
    id: 5,
    title: "Flashback",
    artists: ["Jeremy Sylvester", "Maria Labelle"],
    releaseDate: "2024-03-22",
    href: "TIN056",
    catalog: "TIN056",
    imageUrl:
      "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg",
    tracks: [
      {
        id: 1,
        title: "90s man",
        artists: ["Jeremy Sylvester"],
        length: 348,
        BPM: 132,
        key: "G Minor",
      },
      {
        id: 1,
        title: "Flashback",
        artists: ["Jeremy Sylvester"],
        length: 330,
        BPM: 130,
        key: "G Minor",
      },
    ],
  },
  {
    id: 10,
    title: "Flashback",
    artists: ["Jeremy Sylvester", "Maria Labelle"],
    releaseDate: "2024-03-22",
    href: "TIN056",
    catalog: "TIN056",
    imageUrl:
      "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg",
    tracks: [
      {
        id: 1,
        title: "90s man",
        artists: ["Jeremy Sylvester"],
        length: 348,
        BPM: 132,
        key: "G Minor",
      },
      {
        id: 1,
        title: "Flashback",
        artists: ["Jeremy Sylvester"],
        length: 330,
        BPM: 130,
        key: "G Minor",
      },
    ],
  },
  {
    id: 20,
    title: "Flashback",
    artists: ["Jeremy Sylvester", "Maria Labelle"],
    releaseDate: "2024-03-22",
    href: "TIN056",
    catalog: "TIN056",
    imageUrl:
      "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg",
    tracks: [
      {
        id: 1,
        title: "90s man",
        artists: ["Jeremy Sylvester"],
        length: 348,
        BPM: 132,
        key: "G Minor",
      },
      {
        id: 1,
        title: "Flashback",
        artists: ["Jeremy Sylvester"],
        length: 330,
        BPM: 130,
        key: "G Minor",
      },
    ],
  },
  {
    id: 30,
    title: "Flashback",
    artists: ["Jeremy Sylvester", "Maria Labelle"],
    releaseDate: "2024-03-22",
    href: "TIN056",
    catalog: "TIN056",
    imageUrl:
      "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg",
    tracks: [
      {
        id: 1,
        title: "90s man",
        artists: ["Jeremy Sylvester"],
        length: 348,
        BPM: 132,
        key: "G Minor",
      },
      {
        id: 1,
        title: "Flashback",
        artists: ["Jeremy Sylvester"],
        length: 330,
        BPM: 130,
        key: "G Minor",
      },
    ],
  },
  {
    id: 40,
    title: "Flashback",
    artists: ["Jeremy Sylvester", "Maria Labelle"],
    releaseDate: "2024-03-22",
    href: "TIN056",
    catalog: "TIN056",
    imageUrl:
      "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg",
    tracks: [
      {
        id: 1,
        title: "90s man",
        artists: ["Jeremy Sylvester"],
        length: 348,
        BPM: 132,
        key: "G Minor",
      },
      {
        id: 1,
        title: "Flashback",
        artists: ["Jeremy Sylvester"],
        length: 330,
        BPM: 130,
        key: "G Minor",
      },
    ],
  },
  {
    id: 50,
    title: "Flashback",
    artists: ["Jeremy Sylvester", "Maria Labelle"],
    releaseDate: "2024-03-22",
    href: "TIN056",
    catalog: "TIN056",
    imageUrl:
      "https://geo-media.beatport.com/image_size/1400x1400/8962c817-9e8f-4b5c-b3ea-5ad62d92d07f.jpg",
    tracks: [
      {
        id: 1,
        title: "90s man",
        artists: ["Jeremy Sylvester"],
        length: 348,
        BPM: 132,
        key: "G Minor",
      },
      {
        id: 1,
        title: "Flashback",
        artists: ["Jeremy Sylvester"],
        length: 330,
        BPM: 130,
        key: "G Minor",
      },
    ],
  },
];

function PrevButton(props: ComponentPropsWithoutRef<"button">) {
  return (
    <button
      type="button"
      className="absolute left-0 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black p-2 text-white shadow-sm hover:bg-black/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
      {...props}
    >
      <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}

function NextButton(props: ComponentPropsWithoutRef<"button">) {
  return (
    <button
      type="button"
      className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-1/2 rounded-full bg-black p-2 text-white shadow-sm hover:bg-black/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
      {...props}
    >
      <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}

export default function ReleaseSlider() {
  const instance = useRef<SwiperRef>(null);

  return (
    <div className="relative flex h-full w-full flex-col">
      <h3 className="font-druk mb-4 text-6xl uppercase">
        the choice
        <span className="font-drukCondensed mx-3">is</span>
        yours
      </h3>
      <Swiper
        // navigation={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={10}
        modules={[Navigation, Autoplay]}
        className="!h-64 !w-full py-1"
        ref={instance}
      >
        {releases.map((release, i) => (
          <SwiperSlide
            key={release.id}
            className="group !relative !flex !h-full !w-48 flex-col hover:bg-black/10"
          >
            <Container3D className="h-full w-full">
              <div className="p-1">
                <div className="relative aspect-square h-full w-full">
                  <a href={release.href}>
                    <Image
                      src={release.imageUrl}
                      alt={`Artwork for release ${release.title}`}
                      fill
                      sizes="160px"
                    />
                  </a>
                  <div className="pointer pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  <div className="pointer pointer-events-none absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              </div>

              <div className="w-full px-2">
                <Button className="mt-1 w-full p-0 lg:mt-2">Check</Button>
                {/* <div>
                  <h5 className="inline-block w-fit group-hover:shadow-[0_1px_0_0_rgb(0,0,0)]">
                    <a href={release.href}>
                      <span>{release.title}</span>
                    </a>
                  </h5>
                  <sup className="ml-2">{`[${release.catalog}]`}</sup>
                </div> */}
                <div>
                  {/* <div className="lg:inline-block">
                  <span className="mr-1 text-xs">by</span>
                  {release.artists.map((artist, i) => (
                    <h6 key={artist} className="inline-block">
                      <a href={artist}>
                        <span>{artist}</span>
                        {release.artists.length > 1 &&
                          i !== release.artists.length - 1 && (
                            <span className="mr-1 text-xs">,</span>
                          )}
                      </a>
                    </h6>
                  ))}
                </div> */}
                  {/* <div className="lg:inline-block">
                  <h6>
                    <span>Tracks: {release.tracks.length}</span>
                    <span className="mx-2">|</span>
                    <span>{release.releaseDate}</span>
                  </h6>
                </div> */}
                </div>
              </div>
            </Container3D>
          </SwiperSlide>
        ))}
      </Swiper>
      <PrevButton onClick={() => instance.current?.swiper.slidePrev()} />
      <NextButton onClick={() => instance.current?.swiper.slideNext()} />
    </div>
  );
}
