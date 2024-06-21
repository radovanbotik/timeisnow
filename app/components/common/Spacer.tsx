import { cn } from "@/app/lib/helpers";

export default function Spacer() {
  const skewLeft =
    "after:rounded-tr-sm after:absolute after:h-[calc(100%+2px)]  after:border-2 after:border-black after:top-[5px] after:-right-[calc(16px-2px)] after:w-[calc(16px-2px)] after:skew-y-[45deg]";
  const skewRight =
    "before:absolute before:w-[calc(100%+1px)] before:-right-[7px] before:h-[14px] before:-bottom-[14px] before:border-2 before:border-black before:-skew-x-[-45deg] ";

  return (
    <div
      className={cn(
        skewLeft,
        skewRight,
        "relative min-h-10 w-full border-2 border-black p-4",
      )}
    >
      <div className="h-full w-full text-6xl font-bold lg:text-4xl">
        HIGHLIGHTS:
      </div>
    </div>
  );
}
