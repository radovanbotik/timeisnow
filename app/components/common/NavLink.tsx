"use client";
import { cn } from "@/app/lib/helpers";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentPropsWithoutRef, forwardRef } from "react";

type Props = ComponentPropsWithoutRef<typeof Link>;

const NavLink = forwardRef<HTMLAnchorElement, Props>(function NavLink(
  { href, children, className, ...props },
  ref,
) {
  const pathname = usePathname();

  function isActive(href: string) {
    if (href.length === 1) {
      return href === pathname;
    }
    return pathname.split("/")[1] === href;
  }

  return (
    <Link
      href={href}
      className={cn(
        "navlink font-drukCondensed text-4xl font-semibold uppercase",
        isActive(href.toString()) && "text-violet-800",
        "hover:text-violet-600",
        className,
      )}
      {...props}
      ref={ref}
    >
      {children}
    </Link>
  );
});
export default NavLink;
