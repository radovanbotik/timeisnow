type SVGProps = { className: string };

export default function Cancel({ className, ...props }: SVGProps) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={"h-10 w-10 stroke-[2] [&>path]:fill-black"}
      // {...props}
    >
      <g>
        <g>
          <path
            d="M9.636,28.812c-0.384,0-0.769-0.146-1.061-0.438l-4.949-4.949c-0.585-0.585-0.585-1.536,0-2.121
			l4.949-4.95c0.195-0.195,0.195-0.512,0-0.707l-4.949-4.95c-0.585-0.585-0.585-1.536,0-2.121l4.949-4.949
			c0.584-0.584,1.537-0.584,2.121,0l3.536,3.535c0.195,0.195,0.195,0.512,0,0.707s-0.512,0.195-0.707,0L9.989,4.333
			c-0.195-0.195-0.512-0.195-0.707,0L4.333,9.282c-0.195,0.195-0.195,0.512,0,0.707l4.949,4.95C9.565,15.223,9.722,15.6,9.722,16
			s-0.156,0.777-0.439,1.061l-4.949,4.95c-0.195,0.195-0.195,0.512,0,0.707l4.949,4.949c0.195,0.195,0.512,0.195,0.707,0l4.95-4.949
			c0.566-0.566,1.555-0.566,2.121,0l4.95,4.949c0.195,0.195,0.512,0.195,0.707,0l4.949-4.949c0.195-0.195,0.195-0.512,0-0.707
			l-4.949-4.95c-0.283-0.283-0.439-0.66-0.439-1.061s0.156-0.777,0.439-1.061l4.949-4.95c0.195-0.195,0.195-0.512,0-0.707
			l-4.949-4.949c-0.195-0.195-0.512-0.195-0.707,0l-5.402,5.402c-0.195,0.195-0.512,0.195-0.707,0s-0.195-0.512,0-0.707l5.402-5.402
			c0.584-0.584,1.537-0.584,2.121,0l4.949,4.949c0.585,0.585,0.585,1.536,0,2.121l-4.949,4.95c-0.195,0.195-0.195,0.512,0,0.707
			l4.949,4.95c0.585,0.585,0.585,1.536,0,2.121l-4.949,4.949c-0.584,0.584-1.537,0.584-2.121,0l-4.95-4.949
			c-0.195-0.195-0.512-0.195-0.707,0l-4.95,4.949C10.404,28.666,10.02,28.812,9.636,28.812z"
          />
        </g>
        <g>
          <path
            d="M9.636,28.812c-0.384,0-0.769-0.146-1.061-0.438l-4.949-4.949c-0.585-0.585-0.585-1.536,0-2.121
            l4.949-4.95c0.195-0.195,0.195-0.512,0-0.707l-4.949-4.95c-0.585-0.585-0.585-1.536,0-2.121l4.949-4.949
            c0.584-0.584,1.537-0.584,2.121,0l3.536,3.535c0.195,0.195,0.195,0.512,0,0.707s-0.512,0.195-0.707,0L9.989,4.333
            c-0.195-0.195-0.512-0.195-0.707,0L4.333,9.282c-0.195,0.195-0.195,0.512,0,0.707l4.949,4.95C9.565,15.223,9.722,15.6,9.722,16
            s-0.156,0.777-0.439,1.061l-4.949,4.95c-0.195,0.195-0.195,0.512,0,0.707l4.949,4.949c0.195,0.195,0.512,0.195,0.707,0l4.95-4.949
            c0.566-0.566,1.555-0.566,2.121,0l4.95,4.949c0.195,0.195,0.512,0.195,0.707,0l4.949-4.949c0.195-0.195,0.195-0.512,0-0.707
            l-4.949-4.95c-0.283-0.283-0.439-0.66-0.439-1.061s0.156-0.777,0.439-1.061l4.949-4.95c0.195-0.195,0.195-0.512,0-0.707
            l-4.949-4.949c-0.195-0.195-0.512-0.195-0.707,0l-5.402,5.402c-0.195,0.195-0.512,0.195-0.707,0s-0.195-0.512,0-0.707l5.402-5.402
            c0.584-0.584,1.537-0.584,2.121,0l4.949,4.949c0.585,0.585,0.585,1.536,0,2.121l-4.949,4.95c-0.195,0.195-0.195,0.512,0,0.707
            l4.949,4.95c0.585,0.585,0.585,1.536,0,2.121l-4.949,4.949c-0.584,0.584-1.537,0.584-2.121,0l-4.95-4.949
            c-0.195-0.195-0.512-0.195-0.707,0l-4.95,4.949C10.404,28.666,10.02,28.812,9.636,28.812z"
          />
        </g>
      </g>
    </svg>
  );
}