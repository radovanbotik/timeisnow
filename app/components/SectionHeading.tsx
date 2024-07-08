import Link from "next/link";
import { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
  href?: string;
  anchorText?: string;
};

export default function SectionHeading({
  children,
  href,
  anchorText,
}: SectionHeadingProps) {
  return (
    <div className="pb-5 sm:flex sm:items-center sm:justify-between">
      <h2 className="inline-block shrink-0 font-drukCondensed text-7xl uppercase italic text-black">
        {children}
      </h2>
      {/* <div className="shrink-1 h-[2px] w-full bg-black sm:ml-10"></div> */}
      {href && (
        <div className="mt-3 sm:ml-4 sm:mt-0">
          <Link
            href={href}
            className="//text-sm //font-semibold inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {anchorText}
          </Link>
        </div>
      )}
    </div>
  );
}
