"use client";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import plus from "../../../public/assets/icons/plus.png";

//resources
import { drukWide, itcMachine, youth } from "@/app/lib/fonts";
import logo150 from "../../../public/assets/logo/logodark150.png";
import { Container } from "../layout/Container";
import Container3D from "../layout/Container3D";
import NavLink from "./NavLink";
import Slideover from "./Slideover";
import Plus from "@/public/assets/svg/Plus";

export const navigation = [
  { name: "News", href: "/" },
  { name: "Artists", href: "artists" },
  { name: "Releases", href: "releases" },
  { name: "Merch", href: "merch" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <Container className="">
        <Container3D className="px-8 py-8">
          <header className={`bg-white ${drukWide.className} h-8`}>
            <nav
              // className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
              className="flex items-center justify-between"
              aria-label="Global"
            >
              <NavLink href={"/"}>
                <span className="sr-only">Time is now</span>
                <Image
                  src={logo150}
                  alt="Logo of Time is now music label"
                  width={75}
                  height={16.5}
                />
              </NavLink>

              <div className="ml-auto hidden lg:flex lg:gap-6">
                {navigation.map((item, i) => (
                  <div key={item.name} className="space-x-6">
                    <NavLink href={item.href}>
                      <span className="text-xl font-semibold uppercase tracking-tighter">
                        {item.name}
                      </span>
                    </NavLink>
                    <span className="self-center text-xl font-semibold uppercase tracking-tighter">
                      {" "}
                      /{" "}
                    </span>
                  </div>
                ))}
              </div>
              <button
                className="group ml-6 space-x-2"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span>
                  <span className="text-xl font-semibold uppercase tracking-tighter">
                    More
                  </span>
                </span>
                {/* aria-hidden="true" */}
                <Image
                  sizes="24px"
                  width={24}
                  height={24}
                  alt="close menu"
                  src={plus}
                  className="inline-block -translate-y-1"
                />
                {/* <Plus className="box-border inline h-5 w-5 -translate-y-0.5" /> */}
              </button>
            </nav>
          </header>
        </Container3D>
      </Container>
      <Slideover open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
    </>
  );
}
