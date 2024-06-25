import { ArrowUpRightIcon, PlayCircleIcon } from "@heroicons/react/24/outline";

export default function PinnedNav() {
  return (
    <div className="fixed bottom-[10%] left-1/2 z-50 -translate-x-1/2 rounded-xl border-2 border-black bg-black font-youth text-white">
      <div className="flex h-full w-full items-center justify-between gap-2 px-4 py-1">
        <div className="mr-5 grid grid-cols-[min-content_auto] items-center justify-between gap-1 font-bold">
          <PlayCircleIcon className="h-6 w-6 fill-black" />
          <span className="inline-block text-base capitalize">
            our relases
            {/* <sub className="ml-1 inline-block">only bangers.</sub> */}
          </span>

          <PlayCircleIcon className="h-6 w-6 fill-black" />
          <span className="text-base capitalize">artists</span>
        </div>

        <div className="flex flex-col items-center justify-center">
          <PlayCircleIcon className="h-10 w-10" />
          <sub className="inline-block text-[8px]">smoke</sub>
        </div>
        <div className="flex flex-col items-center justify-center">
          <ArrowUpRightIcon className="h-10 w-10" />
          <sub className="inline-block text-[8px]">smoke</sub>
        </div>
      </div>
    </div>
  );
}
