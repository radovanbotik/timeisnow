"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { releases } from "@/app/lib/data";
import { Release } from "@/app/lib/types";
import Image from "next/image";
import Container3D from "./ShadowWrap";
import { Container } from "./Container";

function Card({ data }: { data: Release }) {
  return (
    <Container3D className="card aspect-[4/4] h-64">
      <div>
        <div className="relative aspect-square max-w-lg rounded-sm border">
          <a href={data.href} aria-hidden={true}>
            <Image
              src={data.imageUrl}
              alt={`Image of ${data.title}`}
              sizes="(max-width: 512px) 320px, 384px"
              fill
            />
          </a>
        </div>
      </div>
    </Container3D>
  );
}

export default function ReleasesToScroll() {
  const wrap = useRef<HTMLElement | any>();
  const container = useRef<HTMLElement | any>();

  useGSAP(
    () => {
      function getScrollAmount() {
        let trackWidth = container.current.scrollWidth;
        return -(trackWidth - window.innerWidth);
      }

      const t = gsap.to(".card", { x: -925, paused: true, ease: "none" });

      ScrollTrigger.create({
        trigger: wrap.current,
        // pin: true,
        start: "top center",
        end: "+=400px",
        // end: () => `+=${getScrollAmount() * -1}`,
        pinSpacing: false,
        fastScrollEnd: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          gsap.to(t, { progress: self.progress, duration: 1 });
        },
      });
    },
    { scope: wrap.current },
  );

  return (
    <Container>
      <div
        className="relative flex w-full items-center justify-center overflow-y-clip"
        ref={wrap}
      >
        <section className="relative w-full" ref={container}>
          <div className="flex w-full gap-10">
            <div className="w-1/3 shrink-0">
              <h2>check out these:</h2>
              <p className="line-clamp-5">
                whole bunch of text. whole bunch of text. whole bunch of text.
                whole bunch of text. whole bunch of text. whole bunch of text.
                whole bunch of text. whole bunch of text. whole bunch of text.
                whole bunch of text. whole bunch of text. whole bunch of text.
                whole bunch of text. whole bunch of text. whole bunch of text.
                whole bunch of text. whole bunch of text. whole bunch of text.
                whole bunch of text. whole bunch of text. whole bunch of text.
                whole bunch of text.
              </p>
            </div>
            <div className="inline-flex w-2/3 gap-5 overflow-hidden p-1">
              {releases.map((release, i) => (
                <Card key={release.id} data={release} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}
