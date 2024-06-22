"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Link from "next/link";
import { useRef } from "react";

export default function NavLink({
  data,
}: {
  data: { href: string; name: string };
}) {
  const container = useRef<HTMLElement | any>();
  const initialText = useRef<HTMLElement | any>();
  const flippedText = useRef<HTMLElement | any>();

  function moveUp(target: HTMLElement) {
    gsap.to(target, {
      yPercent: -100,
    });
  }
  function moveToBaseline(target: HTMLElement) {
    gsap.to(target, {
      yPercent: 0,
    });
  }

  return (
    <div
      className="relative overflow-hidden"
      ref={container}
      onMouseEnter={(e) => {
        // console.log([...initialText.current.children]);
        [...initialText.current.children].map((span) => {
          gsap.to(span, {
            yPercent: -100,
            duration: 1,
          });
        });
      }}
      //   onMouseLeave={(e) => {
      //     console.log(e.currentTarget);
      //     moveToBaseline(e.currentTarget);
      //   }}
    >
      <Link href={data.href} className="inline-block hover:text-violet-600">
        <span
          className="inline-block text-sm font-semibold uppercase tracking-tighter"
          ref={initialText}
        >
          {data.name.split("").map((character, i) => (
            <span key={i} className="inline-block">
              {character}
            </span>
          ))}
        </span>
      </Link>
      {/* <Link
        href={data.href}
        className="absolute inset-0 translate-y-full hover:text-violet-600"
      >
        <span
          className="text-sm font-semibold uppercase tracking-tighter"
          ref={flippedText}
        >
          {data.name}
        </span>
      </Link> */}
    </div>
  );
}
