import * as React from "react";

interface NavigationArrowProps {
  direction: "previous" | "next";
  onClick: () => void;
}

export function NavigationArrow({ direction, onClick }: NavigationArrowProps) {
  const path =
    direction === "previous"
      ? "M23.6838 24.5L32.8838 15.3L30.0838 12.5L18.0838 24.5L30.0838 36.5L32.8838 33.7L23.6838 24.5Z"
      : "M26.0838 24.5L16.8838 15.3L19.6838 12.5L31.6838 24.5L19.6838 36.5L16.8838 33.7L26.0838 24.5Z";

  return (
    <button
      onClick={onClick}
      className="w-12 h-12 cursor-pointer max-sm:w-10 max-sm:h-10"
      aria-label={`${direction} slide`}
    >
      <svg
        width="49"
        height="49"
        viewBox="0 0 49 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%" }}
      >
        <path d={path} fill="#296285" />
      </svg>
    </button>
  );
}
