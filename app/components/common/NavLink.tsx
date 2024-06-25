"use client";
import { cn } from "@/app/lib/helpers";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<typeof Link>;

export default function NavLink({
  href,
  children,
  className,
  ...props
}: Props) {
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
        "font-drukText text-4xl",
        isActive(href.toString()) && "text-violet-800",
        "hover:text-violet-600",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
