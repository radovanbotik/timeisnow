import { ReactNode } from "react";

export default function FullBleed({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto mb-8 max-w-7xl px-4 last-of-type:mb-0 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}
