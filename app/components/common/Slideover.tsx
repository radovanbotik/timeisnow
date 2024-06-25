"use client";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo150 from "../../../public/assets/logo/logodark150.png";

import Cancel from "@/public/assets/svg/Cancel";
import multiply from "../../../public/assets/icons/multiply.png";
import { navigation } from "./Navigation";
import Link from "./Link";
import NavLink from "./NavLink";

export default function Slideover({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (arg: boolean) => void;
}) {
  return (
    <Dialog className={`relative z-10`} open={open} onClose={setOpen}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/75 bg-opacity-75 transition-opacity duration-150 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-sm transform transition duration-150 ease-in-out data-[closed]:translate-x-full sm:duration-150"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-violet-600 py-6 shadow-xl">
                <div className="px-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    {/* LOGO */}
                    <DialogTitle
                      className="flex text-base font-semibold leading-6"
                      as="div"
                    >
                      <a href="#">
                        <span className="sr-only">Your Company</span>
                        <Image
                          src={logo150}
                          alt="Logo of Time is now music label"
                          width={75}
                          height={16.5}
                        />
                      </a>
                    </DialogTitle>
                    {/* CLOSE BUTTON */}
                    <div className="ml-3 flex items-center">
                      <button
                        type="button"
                        className="relative"
                        // className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => setOpen(false)}
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <Image
                          sizes="32px"
                          width={32}
                          height={32}
                          alt="close menu"
                          src={multiply}
                          className=""
                        />
                        {/* <Cancel className="box-border inline h-10 w-10" /> */}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                  <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-black/10">
                      <div className="space-y-2 py-6">
                        {navigation.map((item) => (
                          <NavLink
                            key={item.name}
                            href={item.href}
                            className="-mx-3 block rounded-lg px-3 py-5 leading-7 text-gray-900 hover:bg-violet-500"
                          >
                            <span className="tfont-drukCondensed font-semibold uppercase">
                              {item.name}
                            </span>
                          </NavLink>
                        ))}
                      </div>
                      {/* <div className="py-6">
                        <a
                          href="#"
                          className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          Log in
                        </a>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
