import NextLink from "next/link";
import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<typeof NextLink>;

export default function Link({ href, children, ...props }: Props) {
  return (
    <NextLink href={href} {...props}>
      {children}
    </NextLink>
  );
}
