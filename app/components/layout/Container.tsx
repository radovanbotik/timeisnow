import { cn } from "@/app/lib/helpers";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

export const Container = forwardRef<
  ElementRef<"div">,
  ComponentPropsWithoutRef<"div">
>(function Container({ className, children, ...props }, ref) {
  return (
    // <div
    //   className={cn("container mx-auto px-4 sm:px-6 lg:px-8", className)}
    //   {...props}
    //   ref={ref}
    // >
    //   {children}
    // </div>

    <div className="mx-auto mb-10 max-w-7xl px-4 last-of-type:mb-0 sm:px-6 lg:px-8">
      {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
      <div className="mx-auto max-w-5xl">{children}</div>
    </div>
  );
});
