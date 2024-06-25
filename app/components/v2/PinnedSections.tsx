"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Button from "../common/Button";
import {
  ArrowUpRightIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Shape1 from "@/public/assets/svg/Shape1";
import { Container } from "../layout/Container";
gsap.registerPlugin(ScrollTrigger);

function Card(data: {
  data: {
    title: string;
    subtitle: string;
    href: string;
    buttonText: string;
    mask: "";
    mediaSrc: string;
    mediaSrc2?: string;
  };
  mediaPosition: "left" | "right";
}) {
  <div className="panel"></div>;
}

export default function PinnedSections() {
  const parent = useRef<HTMLElement | any>();
  const endElement = useRef<HTMLElement | any>();
  const wordsLeft = useRef<HTMLElement | any>();
  const wordsRight = useRef<HTMLElement | any>();

  useGSAP(
    () => {
      gsap.fromTo(
        wordsLeft.current,
        {
          xPercent: -100,
          opacity: 0,
          scale: 2,
        },
        {
          xPercent: 0,
          opacity: 100,
          scale: 1,
          scrollTrigger: {
            trigger: parent.current,
            start: "top center",
            toggleActions: "restart restart restart restart",
          },
        },
      );
      gsap.fromTo(
        wordsRight.current,
        {
          xPercent: 100,
          opacity: 0,
          scale: 2,
        },
        {
          xPercent: 0,
          opacity: 100,
          scale: 1,
          scrollTrigger: {
            trigger: parent.current,
            start: "top center",
            end: "bottom top",
            toggleActions: "restart restart restart restart",
          },
        },
      );

      const panels = gsap.utils.toArray(".panel") as HTMLElement[];
      panels.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "center 50%",
          end: "top bottom",
          endTrigger: endElement.current,
          animation: gsap.to(panel, {
            filter: "blur(2px)",
            delay: 1,
          }),
          pin: true,
          pinSpacing: false,
          // markers: true,
          id: "panel-" + i,
          toggleActions: "play none reverse reverse",
        });
      });
    },
    { scope: parent.current },
  );

  return (
    <div className="relative" ref={parent}>
      <Container className="sticky top-0">
        <div className="grid h-[768px] w-full place-content-center">
          <h2 className="relative space-x-2">
            <span className="inline-block" ref={wordsLeft}>
              CONTENT
            </span>
            <span className="inline-block" ref={wordsRight}>
              BENEATH
            </span>
          </h2>
        </div>
      </Container>
      <div className="h-full w-full flex-col gap-10 overflow-y-hidden px-10 py-20">
        <div className="panel relative h-[600px] w-full origin-[top_center] rotate-2 bg-transparent">
          <Container className="h-full w-full">
            <div className="flex h-full w-full flex-col overflow-hidden rounded-3xl border-4 border-black bg-white md:flex-row">
              <div className="h-full w-full p-20">
                <div className="flex h-full w-full max-w-xl flex-col justify-around">
                  <h2>banging tunes</h2>
                  <p>
                    Subtitle and subtitle.this is also subtitle.subtitle and
                    subtitle.this is also subtitle.subtitle and subtitle.this is
                    also subtitle.subtitle and subtitle.this is also
                    subtitle.subtitle and subtitle.this is also subtitle
                  </p>
                  <Button>
                    <span className="inline-block">View more</span>
                    <span>
                      <ArrowUpRightIcon className="ml-2 inline-block h-3 w-3 stroke-[4px] transition-transform group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />
                    </span>
                  </Button>
                </div>
              </div>
              <div className="relative -top-10 h-full w-full overflow-hidden">
                <div className="absolute inset-0 isolate h-[120%] w-[120%]">
                  <Image
                    fill
                    alt="gif"
                    src={"/assets/gifs/mdma.gif"}
                    aria-hidden
                  />
                  <Shape1 />
                </div>
              </div>
            </div>
          </Container>
        </div>

        <div className="panel relative h-[600px] w-full origin-[top_center] -rotate-2 bg-transparent">
          <Container className="h-full w-full">
            <div className="flex h-full w-full flex-col overflow-hidden rounded-3xl border-4 border-black bg-white md:flex-row-reverse">
              <div className="h-full w-full p-20">
                <div className="flex h-full w-full max-w-xl flex-col justify-around">
                  <h2>NASTY BASS CONTENT</h2>
                  <p>
                    Subtitle and subtitle.this is also subtitle.subtitle and
                    subtitle.this is also subtitle.subtitle and subtitle.this is
                    also subtitle.subtitle and subtitle.this is also
                    subtitle.subtitle and subtitle.this is also subtitle
                  </p>
                  <Button>
                    <span className="inline-block">View more</span>
                    <span>
                      <ArrowUpRightIcon className="ml-2 inline-block h-3 w-3 stroke-[4px] transition-transform group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />
                    </span>
                  </Button>
                </div>
              </div>
              <div className="relative -top-10 h-full w-full overflow-hidden">
                <div className="absolute inset-0 isolate h-[120%] w-[120%] overflow-hidden">
                  <Image
                    fill
                    alt="gif"
                    src={"/assets/gifs/mdma.gif"}
                    aria-hidden
                  />
                  <Shape1 />
                </div>
              </div>
            </div>
          </Container>
        </div>

        <div className="panel relative h-[600px] w-full origin-[top_center] bg-transparent">
          <Container className="h-full w-full">
            <div className="flex h-full w-full flex-col overflow-hidden rounded-3xl border-4 border-black bg-white md:flex-row-reverse">
              <div className="h-full w-full p-20">
                <div className="flex h-full w-full max-w-xl flex-col justify-around">
                  <h2>RIMSHOTS AND THEM TINGS BRUV'</h2>
                  <p>
                    Subtitle and subtitle.this is also subtitle.subtitle and
                    subtitle.this is also subtitle.subtitle and subtitle.this is
                    also subtitle.subtitle and subtitle.this is also
                    subtitle.subtitle and subtitle.this is also subtitle
                  </p>
                  <Button>
                    <span className="inline-block">View more</span>
                    <span>
                      <ArrowUpRightIcon className="ml-2 inline-block h-3 w-3 stroke-[4px] transition-transform group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />
                    </span>
                  </Button>
                </div>
              </div>
              <div className="relative -top-10 h-full w-full overflow-hidden">
                <div className="absolute inset-0 isolate h-[120%] w-[120%] overflow-hidden">
                  <Image
                    fill
                    alt="gif"
                    src={"/assets/gifs/mdma.gif"}
                    aria-hidden
                  />
                  <Shape1 />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div ref={endElement} className=""></div>
    </div>
  );
}
