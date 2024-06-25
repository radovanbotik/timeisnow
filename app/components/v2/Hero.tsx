"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import Image from "next/image";
import pill from "../../../public/assets/images/prozak250.png";
import { Container } from "../layout/Container";

// function Images() {
//   return (
//     <section className="flex h-full w-full flex-col lg:flex-row"></section>
//   );
// }
function Intro() {
  const container = useRef<HTMLElement | any>();
  const image = useRef<HTMLElement | any>();

  useGSAP(
    () => {
      const topRow = gsap.utils.toArray(".top-row") as HTMLElement[];
      const bottomRow = gsap.utils.toArray(".bottom-row") as HTMLElement[];

      console.log(bottomRow.slice(0, bottomRow.length - 1));

      const topRowWords = topRow.slice(1);
      const firstWord = topRow.slice(0, 1)[0];
      const bottomRowWords = bottomRow.slice(0, bottomRow.length - 1);
      const lastWord = bottomRow[bottomRow.length - 1];

      const tl = gsap.timeline();
      tl.fromTo(
        firstWord,
        { xPercent: -100, opacity: 0 },
        { xPercent: 0, opacity: 100, duration: 0.25 },
      );
      topRowWords.forEach((word) => {
        tl.fromTo(
          word,
          {
            xPercent: 100,
            opacity: 0,
          },
          { xPercent: 0, opacity: 100, duration: 0.25 },
        );
      });
      bottomRowWords.forEach((word) => {
        tl.fromTo(
          word,
          {
            xPercent: -100,
            opacity: 0,
            yPercent: 50,
          },
          { xPercent: 0, yPercent: 50, opacity: 100, duration: 0.25 },
        );
      });
      tl.fromTo(
        lastWord,
        { xPercent: 100, yPercent: 50, opacity: 0 },
        { xPercent: 0, yPercent: 50, opacity: 100, duration: 0.25 },
      );
      bottomRowWords.forEach((word) => {
        tl.to(word, {
          yPercent: 0,
          duration: 0.25,
        });
      });
      tl.to(lastWord, { yPercent: 0, duration: 0.25 });
      tl.fromTo(image.current, { yPercent: -100 }, { yPercent: 0 }, 0);
    },
    {
      scope: container.current,
    },
  );

  return (
    <section
      className="flex h-full w-full items-center justify-between"
      ref={container}
    >
      <h1 className="w-2/3 text-[clamp(4.5rem,15vw,12rem)] font-bold uppercase leading-[0.8]">
        <span className="top-row inline-block font-drukText">leave</span>
        <span className="top-row inline-block indent-2 font-drukCondensed lg:indent-6">
          the
        </span>
        <span className="top-row inline-block indent-2 font-drukCondensed lg:indent-6">
          past
        </span>
        <br className="block sm:hidden lg:block" />
        <span className="bottom-row inline-block indent-0 font-drukText font-black sm:indent-2 lg:indent-0">
          time
        </span>
        <span className="bottom-row inline-block indent-2 font-drukText font-black lg:indent-6">
          is
        </span>
        <span className="bottom-row inline-block indent-2 font-drukText font-black lg:indent-6">
          now
        </span>
      </h1>
      <div className="//-translate-x-1/2 flex aspect-square w-1/3 justify-center">
        <div className="relative overflow-hidden">
          <Image src={pill} alt="pill" ref={image} />
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <div className="//border-y-4 h-screen w-full space-y-10 border-black py-5">
      <Container className="h-full w-full">
        <Intro></Intro>
        {/* <Images></Images> */}
      </Container>
    </div>
  );
}
