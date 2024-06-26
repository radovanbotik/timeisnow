"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Button from "../common/Button";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { Container } from "./Container";
import { cn } from "@/app/lib/helpers";

import Image from "next/image";
import amen from "../../../public/assets/images/card1/amen.png";
import ableton from "../../../public/assets/images/card1/ableton.png";
import sampler from "../../../public/assets/images/card1/sampler.jpg";
import echo from "../../../public/assets/images/card1/echo.webp";
import tr9092 from "../../../public/assets/images/card1/tr9092.png";
import garage from "../../../public/assets/images/card1/garage.png";

gsap.registerPlugin(ScrollTrigger);

type CardProps = {
  id: number;
  title: string;
  subtitle: string;
  href: string;
  buttonText: string;
  mask?: boolean;
  imageUrl: string;
  mediaSrc2?: string;
  rotate?: "left" | "right" | "normal";
};

function Card({ data }: { data: CardProps }) {
  const container = useRef<HTMLElement | any>();
  const title = useRef<HTMLElement | any>();
  const subtitle = useRef<HTMLElement | any>();
  const button = useRef<HTMLElement | any>();
  const image1 = useRef<HTMLElement | any>();
  const image2 = useRef<HTMLElement | any>();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top center",
          // end: "bottom top",
          toggleActions: "play pause pause none",
        },
      });
      tl.fromTo(
        title.current,
        {
          xPercent: -100,
          opacity: 0,
          scale: 3,
        },
        {
          xPercent: 0,
          opacity: 100,
          scale: 1,
        },
      );
      tl.fromTo(
        image1.current,
        {
          xPercent: 100,
          opacity: 0,
        },
        {
          xPercent: 0,
          opacity: 100,
        },
      );
      tl.fromTo(
        image2.current,
        {
          yPercent: 100,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 100,
        },
      );
    },
    {
      scope: container.current,
    },
  );

  return (
    <div
      className={cn(
        "panel relative h-[500px] w-full origin-[top_center]",
        data.rotate === "left" && "rotate-2",
        data.rotate === "right" && "-rotate-2",
      )}
      ref={container}
    >
      <div className="flex h-full w-full flex-col rounded-xl border-2 border-black bg-white md:flex-row-reverse">
        {/* <div className="relative h-full w-full max-w-lg basis-full lg:translate-x-1">
          <div className="absolute left-1/2 top-0 isolate h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 lg:top-1/2 lg:h-[600px] lg:w-[600px]">
            <Image
              fill
              alt="gif"
              src={"/assets/gifs/mdma.gif"}
              className="nonagon"
              aria-hidden
            />
          </div>
        </div> */}

        <div className="relative basis-full">
          <div
            className="absolute inset-0 left-0 top-0 ml-20 w-full"
            ref={image1}
          >
            <Image
              fill
              alt="gif"
              src={tr9092}
              aria-hidden
              className="object-contain"
            />
          </div>
          <div
            className="absolute bottom-0 right-0 h-48 w-48 rotate-12"
            ref={image2}
          >
            <Image
              fill
              alt="gif"
              src={echo}
              aria-hidden
              className="object-contain"
            />
          </div>
        </div>
        <div className="h-full w-full basis-full px-5 py-10 lg:px-10 lg:py-20">
          <div className="flex h-full w-full max-w-xl flex-col space-y-5">
            <h2 ref={title}>{data.title}</h2>
            <p className="line-clamp-3 sm:line-clamp-none" ref={subtitle}>
              {data.subtitle}
            </p>
            <Button is3d={true} ref={button}>
              <span className="inline-block">{data.buttonText}</span>
              <span>
                <ArrowUpRightIcon className="ml-2 inline-block h-3 w-3 stroke-[4px] transition-transform group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
const rawpanels = [
  {
    id: 1,
    imageUrl: "/assets/gifs/mdma.gif",
    title: "RIMSHOTS AND THEM TINGS",
    subtitle:
      "Subtitle and subtitle.this is also subtitle.subtitle andubtitle.this is also subtitle.subtitle and subtitle.this isalso subtitle.subtitle and subtitle.this is alsosubtitle.subtitle and subtitle.this is also subtitle",
    buttonText: "View more",
    href: "#",
    mask: true,
    rotate: "left",
  },
  {
    id: 2,
    imageUrl: "/assets/gifs/mdma.gif",
    title: "FILTHY BASSLINES",
    subtitle:
      "Subtitle and subtitle.this is also subtitle.subtitle andubtitle.this is also subtitle.subtitle and subtitle.this isalso subtitle.subtitle and subtitle.this is alsosubtitle.subtitle and subtitle.this is also subtitle",
    buttonText: "Woooah! more",
    href: "#",
    mask: true,
    rotate: "right",
  },
  {
    id: 3,
    imageUrl: "/assets/gifs/mdma.gif",
    title: "GET YOUR STANK FACE READY",
    subtitle:
      "Subtitle and subtitle.this is also subtitle.subtitle andubtitle.this is also subtitle.subtitle and subtitle.this isalso subtitle.subtitle and subtitle.this is alsosubtitle.subtitle and subtitle.this is also subtitle",
    buttonText: "View more",
    href: "#",
    mask: true,
  },
];

export default function StackedPanels() {
  const parent = useRef<HTMLElement | any>();
  const endElement = useRef<HTMLElement | any>();
  const wordsLeft = useRef<HTMLElement | any>();
  const wordsRight = useRef<HTMLElement | any>();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: parent.current,
          start: "top center",
          // end: "bottom top",
          toggleActions: "play pause pause none",
        },
      });
      tl.fromTo(
        wordsLeft.current,
        {
          xPercent: -100,
          opacity: 0,
          scale: 3,
        },
        {
          xPercent: 0,
          opacity: 100,
          scale: 1,
        },
      );
      tl.fromTo(
        wordsRight.current,
        {
          xPercent: 100,
          opacity: 0,
          scale: 3,
        },
        {
          xPercent: 0,
          opacity: 100,
          scale: 1,
        },
      );

      const panels = gsap.utils.toArray(".panel") as HTMLElement[];
      panels.forEach((panel, i, array) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "center 50%",
          end: "top bottom",
          endTrigger: endElement.current,
          animation:
            panels[i - 1] &&
            gsap.to(array[i - 1], {
              filter: "blur(2px)",
            }),
          pin: true,
          pinSpacing: false,
          // markers: true,
          id: "panel-" + i,
          toggleActions: "play none reverse reverse",
          onUpdate: (self) => console.log(self.progress),
        });
      });
    },
    { scope: parent.current },
  );

  return (
    <Container>
      <div className="relative" ref={parent}>
        <div className="sticky top-0 grid h-96 w-full place-content-center">
          <h2 className="relative space-x-2">
            <span className="inline-block" ref={wordsLeft}>
              CONTENT
            </span>
            <span className="inline-block" ref={wordsRight}>
              BENEATH
            </span>
          </h2>
        </div>
        <div className="h-full w-full flex-col space-y-32 lg:px-10 lg:py-20">
          {rawpanels.map((panel) => (
            <Card key={panel.id} data={panel} />
          ))}
        </div>
        <div ref={endElement} className=""></div>
      </div>
    </Container>
  );
}
