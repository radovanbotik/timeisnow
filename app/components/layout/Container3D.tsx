import { cn } from "@/app/lib/helpers";
import { ReactNode } from "react";

export default function Container3D({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      <span className="absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-black transition duration-300 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span className="absolute inset-0 h-full w-full border-2 border-black bg-white"></span>
      <div className="relative text-black">{children}</div>
    </div>
  );
}

{
  /* <div className={cn("group relative", className)}>
<span className="absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-black transition duration-300 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
<span className="absolute inset-0 h-full w-full border-2 border-black bg-white group-hover:bg-black"></span>
<div className="relative text-black group-hover:text-white">
  {children}
</div>
</div> */
}
