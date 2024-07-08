"use client";
import { Container } from "./Container";
import { Bars2Icon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import Link from "next/link";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "../lib/helpers";
import SocialLinksList from "./SocialLinksList";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "News", href: "#", current: false },
  { name: "Releases", href: "#", current: false },
  { name: "Artists", href: "#", current: false },
  { name: "Merch", href: "#", current: false },
  // { name: "Reports", href: "#", current: false },
];

function VerticalNavigation() {
  return (
    <nav aria-label="Sidebar" className="flex flex-1 flex-col">
      <ul role="list" className="-mx-2 space-y-1">
        {navigation.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={cn(
                item.current
                  ? "bg-black text-gray-200"
                  : "text-black hover:bg-gray-50 hover:text-black/80",
                "group flex gap-x-3 rounded-md p-2 pl-3 text-4xl uppercase",
              )}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Drawer({
  drawerOpen,
  setDrawerOpen,
}: {
  drawerOpen: boolean;
  setDrawerOpen: (arg: boolean) => void;
}) {
  return (
    <Dialog open={drawerOpen} onClose={setDrawerOpen} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-gray-100 py-6 shadow-xl">
                <div className="px-4 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-base font-semibold leading-6 text-gray-900">
                      <Link href="/">
                        <span className="sr-only">TIME IS NOW</span>
                        <span className="bg-black pl-2 pr-8 font-druk text-2xl text-gray-50">
                          <span className="font-drukWide uppercase">Time</span>
                          <span className="font-drukText text-2xl uppercase">
                            is now
                          </span>
                        </span>
                      </Link>
                    </DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => setDrawerOpen(false)}
                        className="focus:black relative rounded-md bg-gray-100 text-black ring-black hover:text-black/80 focus:outline-none focus:ring-2 focus:ring-offset-2"
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative mt-6 flex h-full flex-1 flex-col space-y-5 px-4 sm:px-6">
                  <VerticalNavigation />

                  <p className="!mt-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero quae laborum placeat adipisci minima doloribus tenetur
                    sit? Dolorum, pariatur perferendis.
                  </p>
                  <SocialLinksList />
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default function Navigation() {
  const [drawerOpen, setDrawerOpen] = useState(false);
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
    <>
      <header className="fixed top-0 isolate z-40 h-10 w-full" ref={container}>
        <nav
          aria-label="Global"
          className="box relative z-0 flex h-full w-full items-center backdrop-blur-sm lg:backdrop-blur-sm"
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
                  onClick={() => setDrawerOpen(true)}
                  className={cn(
                    "ml-auto inline-flex items-center justify-center rounded-md p-2.5 text-gray-800",
                    drawerOpen && "hidden",
                  )}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars2Icon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
            </div>
          </Container>
        </nav>
      </header>
      <Drawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
    </>
  );
}
