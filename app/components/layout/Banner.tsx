import { XMarkIcon } from "@heroicons/react/20/solid";
import { Container } from "./Container";

export default function Banner() {
  return (
    <Container className="">
      <div className="flex items-center gap-x-6 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <p className="text-sm leading-6 text-black">
          <a href="#">
            <strong className="font-semibold">GeneriCon 2023</strong>
            <svg
              viewBox="0 0 2 2"
              className="mx-2 inline h-0.5 w-0.5 fill-current"
              aria-hidden="true"
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            SUMMER 2024 ☮ PAGAN ☮ MYSTICAL ☮ COSMIC ENERGY ☮&nbsp;
            <span aria-hidden="true">&rarr;</span>
          </a>
        </p>
        <div className="flex flex-1 justify-end">
          <button
            type="button"
            className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          >
            <span className="sr-only">Dismiss</span>
            <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </Container>
  );
}
