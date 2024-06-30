import { cn } from "@/app/lib/helpers";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

export const Container = forwardRef<
  ElementRef<"div">,
  ComponentPropsWithoutRef<"div">
>(function Container({ className, children, ...props }, ref) {
  return (
    <div className={cn("mx-auto max-w-7xl px-6 lg:px-8", className)} ref={ref}>
      <div className="mx-auto max-w-2xl lg:max-w-none">{children}</div>
    </div>

    // <div
    //   className={cn(
    //     "mx-auto max-w-screen-2xl px-4 sm:px-5 lg:px-10",
    //     className,
    //   )}
    // >
    //   {children}
    // </div>
  );
});
