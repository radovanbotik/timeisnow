import { cn } from "@/app/lib/helpers";
import { ComponentPropsWithoutRef } from "react";

export default function Button({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"button">) {
  return (
    <button
      className={cn(
        className,
        "group/button font-youth relative inline-block w-fit px-6 py-2",
      )}
      {...props}
    >
      <span className="absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-black transition duration-300 ease-out group-hover/button:-translate-x-0 group-hover/button:-translate-y-0"></span>
      <span className="absolute inset-0 h-full w-full border-2 border-black bg-white group-hover/button:bg-black"></span>
      <span className="relative text-black group-hover/button:text-white">
        {children}
      </span>
    </button>
  );
}
