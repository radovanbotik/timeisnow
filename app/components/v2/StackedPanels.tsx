"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Button from "../common/Button";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Image from "next/image";
import { Container } from "./Container";
import Shape2 from "@/public/assets/svg/Shape2";
import { cn } from "@/app/lib/helpers";
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
  return (
    <div
      className={cn(
        "panel relative h-[500px] w-full origin-[top_center]",
        data.rotate === "left" && "rotate-2",
        data.rotate === "right" && "-rotate-2",
      )}
    >
      <div className="flex h-full w-full flex-col rounded-xl border-2 border-black bg-white md:flex-row-reverse">
        <div className="relative h-full w-full max-w-lg basis-full lg:translate-x-1">
          <div className="absolute left-1/2 top-0 isolate h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 lg:top-1/2 lg:h-[600px] lg:w-[600px]">
            <Image
              fill
              alt="gif"
              src={"/assets/gifs/mdma.gif"}
              className="nonagon"
              aria-hidden
            />
          </div>
        </div>
        <div className="h-full w-full basis-full px-10 py-20">
          <div className="flex h-full w-full max-w-xl flex-col space-y-5">
            <h3>{data.title}</h3>
            <p>{data.subtitle}</p>
            <Button>
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
    title: "RIMSHOTS AND THEM TINGS BRUV",
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
    title: "BANGERS ALL AROUND MATE",
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
          end: "bottom top",
          toggleActions: "restart restart restart restart",
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
        <div className="h-full w-full flex-col gap-10 px-10 py-20">
          {rawpanels.map((panel) => (
            <Card key={panel.id} data={panel} />
          ))}

          {/* <div className="panel //bg-transparent relative h-[500px] w-full origin-[top_center] rotate-2">
            <div className="flex h-full w-full flex-col rounded-3xl border-4 border-black bg-white md:flex-row-reverse">
              <div className="relative h-full w-full max-w-lg basis-full lg:translate-x-1">
                <div className="absolute left-1/2 top-0 isolate h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 lg:top-1/2 lg:h-[600px] lg:w-[600px]">
                  <Image
                    fill
                    alt="gif"
                    src={"/assets/gifs/mdma.gif"}
                    className="nonagon"
                    aria-hidden
                  />
                </div>
              </div>
              <div className="h-full w-full basis-full px-10 py-20">
                <div className="flex h-full w-full max-w-xl flex-col space-y-5">
                  <h3>RIMSHOTS AND THEM TINGS BRUV'</h3>
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
            </div>
          </div> */}

          {/* <div className="panel relative h-[600px] w-full origin-[top_center] -rotate-2 bg-transparent">
            <Container className="h-full w-full">
              <div className="flex h-full w-full flex-col overflow-hidden rounded-3xl border-4 border-black bg-white md:flex-row-reverse">
                <div className="h-full w-full p-20">
                  <div className="flex h-full w-full max-w-xl flex-col justify-around">
                    <h2>NASTY BASS</h2>
                    <p>
                      Subtitle and subtitle.this is also subtitle.subtitle and
                      subtitle.this is also subtitle.subtitle and subtitle.this
                      is also subtitle.subtitle and subtitle.this is also
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
                    <h2>Banging Tunes</h2>
                    <p>
                      Subtitle and subtitle.this is also subtitle.subtitle and
                      subtitle.this is also subtitle.subtitle and subtitle.this
                      is also subtitle.subtitle and subtitle.this is also
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
          </div> */}
        </div>
        <div ref={endElement} className=""></div>
      </div>
    </Container>
  );
}
