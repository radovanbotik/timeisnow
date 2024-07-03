"use client";

import Image, { StaticImageData } from "next/image";
import bakey from "../../../public/assets/artists/bakey.png";
import djcrisps from "../../../public/assets/artists/djcrisps.png";
import groovy from "../../../public/assets/artists/groovy.png";
import interplanetarycriminal from "../../../public/assets/artists/interplanetarycriminal.png";
import mainphase from "../../../public/assets/artists/mainphase.png";
import soulmasstransitsystem from "../../../public/assets/artists/soulmasstransitsystem.png";
import yosh from "../../../public/assets/artists/yosh.png";
import yuqt from "../../../public/assets/artists/yuqt.png";
import { cn } from "@/app/lib/helpers";
import { Container } from "./Container";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const artists = [
  {
    id: 1,
    artist: "bakey",
    imageUrl: bakey,
  },
  {
    id: 2,
    artist: "djcrisps",
    imageUrl: djcrisps,
  },
  {
    id: 3,
    artist: "groovy",
    imageUrl: groovy,
  },
  {
    id: 4,
    artist: "interplanetarycriminal",
    imageUrl: interplanetarycriminal,
  },
  {
    id: 5,
    artist: "mainphase",
    imageUrl: mainphase,
  },
  {
    id: 6,
    artist: "soulmasstransitsystem",
    imageUrl: soulmasstransitsystem,
  },
];

export default function ChooseHero() {
  const currentHeroWrap = useRef<HTMLElement | any>();
  const container = useRef<HTMLDivElement | any>(null);
  const [currentHero, setCurrentHero] = useState<{
    id: number;
    artist: string;
    imageUrl: StaticImageData;
  } | null>(null);

  // useGSAP(
  //   () => {
  //     const tl = gsap.timeline({
  //       repeat: -1,
  //       yoyo: true,
  //     });

  //     tl.fromTo(
  //       currentHeroWrap.current,
  //       {
  //         scale: 0.95,
  //         duration: 2,
  //       },
  //       { scale: 1, duration: 2 },
  //     );
  //   },
  //   { scope: container.current },
  // );

  return (
    <Container>
      <div className="flex w-full flex-col" ref={container}>
        {/* TOP */}
        <h2 className="text-center">CHOOSE YOUR WARRIOR</h2>

        {/* BODY */}
        <div className="body relative isolate flex h-full w-full flex-col justify-around gap-5 p-1 md:flex-row">
          {/* LEFT */}
          <div className="column-left h-full w-2/6 gap-5">
            <div className="//flex grid h-1/3 w-full grid-cols-3 grid-rows-2 gap-1">
              {artists.map((artist) => (
                <div className="relative aspect-square w-28 origin-bottom cursor-pointer rounded-xl border-2 bg-blue-400">
                  <Image
                    fill
                    src={artist.imageUrl}
                    alt={`image of ${artist.artist}`}
                    className="object-contain object-bottom"
                    onClick={() => setCurrentHero((prev) => artist)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="column-right flex h-full w-4/6">
            <div
              className="relative basis-full origin-bottom"
              ref={currentHeroWrap}
            >
              {currentHero !== null && (
                <Image
                  src={currentHero?.imageUrl}
                  alt={`image of ${currentHero?.artist}`}
                  fill
                  className="object-contain object-bottom"
                />
              )}
            </div>
            {currentHero !== null && (
              <div className="flex h-full w-full flex-col justify-between space-y-5 px-5">
                <h3 className="mb-0 pb-0">producer name</h3>
                <h6>something beneath</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur architecto optio, dicta laborum, delectus praesentium
                  animi nemo omnis magnam possimus perferendis officiis illum
                  libero perspiciatis, aperiam ullam rerum. Culpa, eum sed animi
                  quas delectus sapiente.
                </p>

                <div>
                  <p>line1</p>
                  <p>line2</p>
                  <p>line3</p>
                  <p>line4</p>
                  <p>line5</p>
                </div>

                <div className="flex gap-5">
                  <div className="aspect-square w-20 rounded-lg border-2 border-black"></div>
                  <div className="aspect-square w-20 rounded-lg border-2 border-black"></div>
                  <div className="aspect-square w-20 rounded-lg border-2 border-black"></div>
                  <div className="aspect-square w-20 rounded-lg border-2 border-black"></div>
                </div>
                {/* <button className="border-2 border-black">select</button> */}
              </div>
            )}
          </div>
        </div>
        {/* BODY */}

        {/* BOTTOM */}
        {/* <div className="navigation-bottom flex h-5 justify-center">
          <button>select</button>
        </div> */}
      </div>
    </Container>
  );
}
