import * as React from "react";

interface NavigationDotProps {
  isActive?: boolean;
  onClick?: () => void;
  index: number;
}

export function NavigationDot({
  isActive,
  onClick,
  index,
}: NavigationDotProps) {
  return (
    <button
      onClick={onClick}
      className={`w-6 h-6 rounded-full border-2 border-cyan-800 border-solid max-sm:w-5 max-sm:h-5 ${
        isActive ? "bg-cyan-800" : ""
      }`}
      aria-label={`Go to slide ${index + 1}`}
      aria-current={isActive ? "true" : "false"}
    />
  );
}
