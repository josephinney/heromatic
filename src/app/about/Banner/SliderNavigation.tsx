import * as React from "react";
import { NavigationArrow } from "./NavigationArrow";
import { NavigationDot } from "./NavigationDot";

interface SliderNavigationProps {
  totalSlides: number;
  currentSlide: number;
  onPrevious: () => void;
  onNext: () => void;
}

export function SliderNavigation({
  totalSlides,
  currentSlide,
  onPrevious,
  onNext,
}: SliderNavigationProps) {
  return (
    <nav
      className="flex gap-8 justify-center items-center mt-4 max-sm:gap-4"
      aria-label="Slider navigation"
    >
      <NavigationArrow direction="previous" onClick={onPrevious} />
      <div className="flex gap-2 items-center" role="tablist">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <NavigationDot
            key={index}
            index={index}
            isActive={currentSlide === index}
          />
        ))}
      </div>
      <NavigationArrow direction="next" onClick={onNext} />
    </nav>
  );
}
