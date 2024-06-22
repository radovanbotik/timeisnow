"use client";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

//resources
import { drukWide, itcMachine, youth } from "@/app/lib/fonts";
import logo150 from "../../../public/assets/logo/logodark150.png";
import { Container } from "../layout/Container";
import Container3D from "../layout/Container3D";
import NavLink from "./NavLink";

const navigation = [
  { name: "News", href: "#" },
  { name: "Artists", href: "#" },
  { name: "Releases", href: "#" },
  { name: "Merch", href: "#" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className={`bg-white ${drukWide.className} my-8`}>
      <Container>
        <Container3D className="px-8 py-5">
          <nav
            // className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
            className="flex items-center justify-between"
            aria-label="Global"
          >
            <a href="#">
              <span className="sr-only">Your Company</span>
              <Image
                src={logo150}
                alt="Logo of Time is now music label"
                width={75}
                height={16.5}
              />
              {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /> */}
            </a>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-6">
              {navigation.map((item, i) => (
                <div key={item.name} className="space-x-6">
                  <a href={item.href} className="hover:text-violet-600">
                    <span className="text-sm font-semibold uppercase tracking-tighter">
                      {item.name}
                    </span>
                  </a>
                  <span className="self-center text-sm font-semibold uppercase tracking-tighter">
                    {" "}
                    /{" "}
                  </span>
                </div>
              ))}
              {/* <NavLink data={{ href: "#", name: "try me" }} /> */}
              <button className="space-x-1">
                <span>
                  <span className="text-sm font-semibold uppercase tracking-tighter">
                    More
                  </span>
                </span>
                <PlusIcon
                  className="inline h-5 w-5 -translate-y-0.5 text-sm"
                  aria-hidden="true"
                />
              </button>
            </div>
          </nav>
        </Container3D>
      </Container>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                src={logo150}
                alt="Logo of Time is now music label"
                width={150}
                height={33}
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    <span>{item.name}</span>
                    <span> / </span>
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
