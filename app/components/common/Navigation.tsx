"use client";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import plus from "../../../public/assets/icons/plus.png";

//resources
import logo150 from "../../../public/assets/logo/logodark150.png";
import { Container } from "../layout/Container";
import Container3D from "../layout/Container3D";
import NavLink from "./NavLink";
import Slideover from "./Slideover";
import Plus from "@/public/assets/svg/Plus";

export const navigation = [
  { name: "Artists", href: "artists" },
  { name: "Releases", href: "releases" },
  { name: "Merch", href: "merch" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <header className="font-drukText">
        <nav
          className="py-auto flex items-center justify-between"
          aria-label="Global"
        >
          <div className="hidden flex-1 lg:flex lg:gap-8">
            {navigation.map((item, i) => (
              <div key={item.name}>
                <NavLink href={item.href}>
                  <span className="text-base font-semibold uppercase tracking-tighter">
                    {item.name}
                  </span>
                </NavLink>
              </div>
            ))}
          </div>
          <NavLink href={"/"} className="-m-1.5 p-1.5">
            <span className="sr-only">TIME IS NOW</span>
            <span className="text-xl font-semibold uppercase tracking-tighter">
              time is now
            </span>
          </NavLink>
          <div className="flex flex-1 justify-end">
            <button
              className="font-drukTextWide group"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span>
                <span className="text-xl font-semibold uppercase tracking-tighter">
                  More
                </span>
              </span>
              <PlusIcon className="box-border inline h-5 w-5 -translate-y-1 stroke-black stroke-[3px] text-black" />
            </button>
          </div>
        </nav>
      </header>
      <Slideover open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
    </>
  );
}
