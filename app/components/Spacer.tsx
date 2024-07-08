import { ReactNode } from "react";
import { Container } from "./Container";

type SpacerProps = {
  children: ReactNode;
};

export default function Spacer({ children, ...props }: SpacerProps) {
  return (
    <section className="mt-16 sm:mt-24 lg:mt-32">
      <Container>
        <div
          className="//bg-gray-600 relative aspect-[5/3] w-full overflow-hidden sm:aspect-[4/3] md:aspect-[2/1] lg:aspect-[5/2] xl:aspect-[3/1]"
          {...props}
        >
          {children}
        </div>
      </Container>
    </section>
  );
}
