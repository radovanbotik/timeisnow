"use client";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import plus from "../../../public/assets/icons/plus.png";

//resources
import { Container } from "../v2/Container";
import NavLink from "./NavLink";
import Slideover from "./Slideover";

export const navigation = [
  { name: "Artists", href: "artists" },
  { name: "Releases", href: "releases" },
  { name: "Merch", href: "merch" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const container = useRef<HTMLElement | any>();

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".navlink",
        {
          opacity: 0,
          yPercent: -100,
        },
        { opacity: 1, yPercent: 0, ease: "back.out" },
      );
    },
    {
      scope: container.current,
    },
  );

  return (
    <>
      <Container>
        <header className="w-full" ref={container}>
          <nav className="py-auto flex w-full" aria-label="Global">
            <div className="mx-auto hidden gap-8 lg:flex">
              {navigation.map((item, i) => (
                <NavLink href={item.href} key={item.name}>
                  {item.name}
                </NavLink>
              ))}
            </div>
            {/* <button
              className={cn(
                "group fixed right-2 top-0 z-[9999] block sm:right-2.5 lg:right-5",
                mobileMenuOpen && "hidden",
              )}
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="font-druk text-5xl font-semibold uppercase">
                More?
              </span>
            </button> */}
          </nav>
        </header>
      </Container>
      <Slideover open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
    </>
  );
}
