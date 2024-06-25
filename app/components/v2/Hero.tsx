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
        { xPercent: 0, opacity: 100, duration: 0.1 },
      );
      topRowWords.forEach((word) => {
        tl.fromTo(
          word,
          {
            xPercent: 100,
            opacity: 0,
          },
          { xPercent: 0, opacity: 100, duration: 0.1 },
        );
      });
      bottomRowWords.forEach((word) => {
        tl.fromTo(
          word,
          {
            xPercent: -50,
            opacity: 0,
            yPercent: 25,
          },
          { xPercent: 0, yPercent: 25, opacity: 100, duration: 0.1 },
        );
      });
      tl.fromTo(
        lastWord,
        { xPercent: 50, yPercent: 25, opacity: 0 },
        { xPercent: 0, yPercent: 25, opacity: 100, duration: 0.1 },
      );
      bottomRowWords.forEach((word) => {
        tl.to(word, {
          yPercent: 0,
          duration: 0.1,
        });
      });
      tl.to(lastWord, { yPercent: 0, duration: 0.1 });
      tl.fromTo(
        image.current,
        { xPercent: 50, scale: 0.75, opacity: 0 },
        {
          xPercent: 0,
          opacity: 100,
          duration: 0.5,
          ease: "back.out",
        },
        0,
      );
      tl.to(image.current, {
        scale: 1,
        duration: 0.25,
      });
    },
    {
      scope: container.current,
    },
  );

  return (
    <section
      className="//lg:pb-20 flex h-full w-full flex-col content-center items-center justify-center gap-10 sm:flex-row sm:justify-between sm:gap-5 lg:items-end"
      ref={container}
    >
      {/* <div className="danger-tape my-auto h-1/2 w-10 "></div> */}
      <h1 className="w-2/3 text-center text-[clamp(4.5rem,13vw,12rem)] uppercase leading-[0.8] sm:text-start">
        <span className="top-row inline-block font-drukText">leave</span>
        <span className="top-row inline-block indent-2 font-druk lg:indent-6 lg:font-drukXCondensed">
          the
        </span>
        <span className="top-row inline-block indent-2 font-druk lg:indent-6 lg:font-drukXCondensed">
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
      <div className="//-translate-x-1/2 flex aspect-square w-1/3 items-end justify-end">
        <div className="relative overflow-hidden sm:max-w-xl">
          <Image src={pill} alt="pill" ref={image} />
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <Container className="lex h-[calc(100vh-48px)] max-h-[768px] w-full items-center p-0 pl-0 sm:pl-0 lg:h-[calc(100vh-48px)] lg:pl-0">
      <Intro />
    </Container>
  );
}
