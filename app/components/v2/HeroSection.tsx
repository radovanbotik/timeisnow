"use client";
import Button from "../common/Button";
import Navigation from "../common/Navigation";
import { Container } from "./Container";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

export default function HeroSection() {
  const rawHeading = "time is now records";

  const container = useRef<HTMLElement | any>();
  const heading = useRef<HTMLElement | any>();
  const subheading = useRef<HTMLElement | any>();
  const button = useRef<HTMLElement | any>();

  useGSAP(
    () => {
      const headingSpans = gsap.utils.toArray(
        ".heading-word",
      ) as HTMLSpanElement[];

      const tl = gsap.timeline();
      tl.fromTo(
        ".heading-word",
        {
          opacity: 0,
          yPercent: 100,
        },
        { opacity: 1, yPercent: 0 },
      );
      tl.fromTo(
        subheading.current,
        {
          opacity: 0,
          yPercent: 100,
        },
        { opacity: 1, yPercent: 0 },
      );
      tl.fromTo(
        button.current,
        {
          opacity: 0,
          yPercent: 100,
        },
        { opacity: 1, yPercent: 0 },
      );
    },
    {
      scope: container.current,
    },
  );

  const splitHeading = rawHeading.split(" ").map((word) => {
    return (
      <span key={word} className="heading-word inline-block">
        {word}&nbsp;
      </span>
    );
  });

  return (
    <section className="flex w-full flex-col py-48 md:pb-36 md:pt-24">
      <Navigation />
      <Container className="my-auto" ref={container}>
        <div className="flex flex-col pb-5">
          <div className="grow-1 shrink-0">
            {/* <h1 className="text-center" ref={heading}>time is now records</h1> */}
            <h1 className="overflow-hidden px-1 text-center" ref={heading}>
              {splitHeading}
            </h1>
          </div>
          <div className="max-w-md space-y-5 self-center">
            <p className="line-clamp-3 text-center" ref={subheading}>
              TIME IS NOW is especially a new platform for other artists. The
              style is a bit different and oscillates between House - tech house
              and techno.
            </p>
            <Button
              is3d={true}
              className="mx-auto inline-block w-full"
              onClick={() => {
                gsap.to(window, {
                  duration: 0.5,
                  // scrollTo: window.innerHeight + window.innerHeight / 2,
                  scrollTo: { y: "#slider", offsetY: 50 },
                });
              }}
              ref={button}
            >
              <span className="inline-block">EXPLORE</span>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
