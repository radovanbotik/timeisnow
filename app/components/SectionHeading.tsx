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
      <h3 className="//text-base //font-semibold //leading-6 text-gray-900">
        {children}
      </h3>
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
