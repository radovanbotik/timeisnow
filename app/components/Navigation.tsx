"use client";
import { Container } from "./Container";
import { Bars2Icon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import Link from "next/link";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const container = useRef<HTMLElement | any>(null);

  useGSAP(
    () => {
      const showAnim = gsap
        .from(container.current, {
          top: -80,
          paused: true,
          duration: 0.2,
        })
        .progress(1);

      ScrollTrigger.create({
        start: "top top",
        end: "max",
        onUpdate: (self) => {
          self.direction === -1 ? showAnim.play() : showAnim.reverse();
        },
      });
    },
    { scope: container.current },
  );

  return (
    <header
      className="fixed top-0 z-50 h-10 w-full backdrop-blur-sm lg:backdrop-blur-sm"
      ref={container}
    >
      <nav
        aria-label="Global"
        className="box relative flex h-full w-full items-center"
      >
        <Container className="relative w-full">
          <div className="flex items-center justify-between">
            <div className="//lg:flex-1 flex">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">TIME IS NOW</span>
                <span className="bg-black pl-2 pr-8 font-druk text-2xl text-gray-50">
                  <span className="font-drukWide uppercase">Time</span>
                  <span className="font-drukText text-2xl uppercase">
                    is now
                  </span>
                </span>
              </Link>
            </div>
            <div className="flex">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="ml-auto inline-flex items-center justify-center rounded-md p-2.5 text-gray-800"
              >
                <span className="sr-only">Open main menu</span>
                <Bars2Icon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
}
