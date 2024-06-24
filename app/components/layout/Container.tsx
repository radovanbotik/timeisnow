import { cn } from "@/app/lib/helpers";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";

export const Container = forwardRef<
  ElementRef<"div">,
  ComponentPropsWithoutRef<"div">
>(function Container({ className, children, ...props }, ref) {
  return (
    <div
      className={cn(
        "mx-auto max-w-screen-2xl px-4 sm:px-5 lg:px-10",
        className,
      )}
    >
      {children}
    </div>
  );
});
