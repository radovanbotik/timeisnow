import { ReactNode } from "react";

type SpacerProps = {
  children?: ReactNode;
};

export default function Spacer(props: SpacerProps) {
  return (
    <div
      className="aspect-[5/3] w-full bg-black md:aspect-[2/1] lg:aspect-[5/2] xl:aspect-[3/1]"
      {...props}
    ></div>
  );
}
