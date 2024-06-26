export default function Shape1() {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-10 z-20 h-full w-full"
      style={{ border: "none", outline: "none" }}
    >
      <g clipPath="url(#clip0_105_284)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H50V50H0V0ZM100 50H50V100H0V150H50V200H100V150H150V200H200V150H150V100H200V50H150V0H100V50ZM100 100H150V50H100V100ZM100 100V150H50V100H100Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_105_284"
          x1="100"
          y1="0"
          x2="100"
          y2="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A7B5FF" /> <stop offset="1" stopColor="#F3ACFF" />
        </linearGradient>
        <clipPath id="clip0_105_284">
          <rect width="200" height="200" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
