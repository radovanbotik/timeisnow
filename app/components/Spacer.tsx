import { ReactNode } from "react";
import { Container } from "./Container";
import { cn } from "../lib/helpers";

type SpacerProps = {
  children: ReactNode;
  className?: string;
};

export default function Spacer({ children, className, ...props }: SpacerProps) {
  return (
    <section className={cn("mt-16 sm:mt-24 lg:mt-32", className)}>
      <Container className="">
        <div
          className="//bg-gray-600 relative aspect-[5/3] w-full overflow-hidden sm:aspect-[2/1] lg:aspect-[5/2] xl:aspect-[3/1]"
          {...props}
        >
          {children}
        </div>
      </Container>
    </section>
  );
}
