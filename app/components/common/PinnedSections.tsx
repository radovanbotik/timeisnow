"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Button from "./Button";
gsap.registerPlugin(ScrollTrigger);

function Card(data: {
  data: {
    title: string;
    subtitle: string;
    href: string;
    buttonText: string;
    mask: "";
    mediaSrc: string;
  };
}) {
  <div className="panel"></div>;
}

export default function PinnedSections() {
  const parent = useRef<HTMLElement | any>();
  const firstSlide = useRef<HTMLElement | any>();
  const endElement = useRef<HTMLElement | any>();

  useGSAP(
    () => {
      const panels = gsap.utils.toArray(".panel") as HTMLElement[];
      panels.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "center 40%",
          end: "center bottom",
          endTrigger: endElement.current,
          pin: true,
          pinSpacing: false,
          markers: true,
          id: "panel-" + i,
        });
      });
    },
    { scope: parent.current },
  );

  return (
    <div className="relative" ref={parent}>
      <div ref={endElement} className="sticky top-0 h-96 w-full bg-blue-700">
        start
      </div>
      <div className="h-full w-full">
        <div className="panel w-ful relative h-[600px] bg-transparent p-10">
          <div className="flex h-full w-full flex-col overflow-hidden rounded-[80px] md:flex-row">
            <div className="h-full w-full bg-amber-300 p-20">
              <div className="flex h-full w-full max-w-xl flex-col justify-around">
                <h2>banging tunes</h2>
                <p>
                  Subtitle and subtitle.this is also subtitle.subtitle and
                  subtitle.this is also subtitle.subtitle and subtitle.this is
                  also subtitle.subtitle and subtitle.this is also
                  subtitle.subtitle and subtitle.this is also subtitle
                </p>
                <Button>View more</Button>
              </div>
            </div>
            <div className="h-full w-full bg-amber-500">aa</div>
          </div>
        </div>
        <div className="panel relative h-96 w-full bg-pink-700"> stuff</div>
        <div className="panel relative h-96 w-full bg-teal-700"> stuff</div>
      </div>
      <div ref={endElement} className="h-96 w-full bg-blue-700">
        end
      </div>
    </div>
  );
}
