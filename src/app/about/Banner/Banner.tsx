// "use client";
// import * as React from "react";
// import { SlideContent } from "./SlideContent";
// import { SliderNavigation } from "./SliderNavigation";

// const slides = [
//   {
//     title: "INTEGRITY",
//     content:
//       "At Heromatic, we live by our principles, conducting business with honesty and transparency, making ethical choices clear and straightforward.",
//   },
//   {
//     title: "INNOVATION",
//     content:
//       "We constantly push boundaries, seeking creative solutions to drive progress and deliver exceptional results.",
//   },
//   {
//     title: "EXCELLENCE",
//     content:
//       "We strive for the highest standards in everything we do, ensuring quality and precision in every detail.",
//   },
//   {
//     title: "COLLABORATION",
//     content:
//       "Working together as one team, we combine our strengths to achieve remarkable outcomes.",
//   },
//   {
//     title: "RESPONSIBILITY",
//     content:
//       "We take ownership of our actions and commitments, ensuring sustainable and positive impact.",
//   },
//   {
//     title: "CUSTOMER FOCUS",
//     content:
//       "Our clients' success is our priority, delivering solutions that exceed expectations.",
//   },
//   {
//     title: "ADAPTABILITY",
//     content:
//       "We embrace change and evolve continuously to meet emerging challenges and opportunities.",
//   },
// ];

// export default function Banner() {
//   const [currentSlide, setCurrentSlide] = React.useState(0);

//   const handlePrevious = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   // Properly type the ref as HTMLDivElement
//   const containerRef = React.useRef<HTMLDivElement>(null);
//   const [slideWidth, setSlideWidth] = React.useState(0);

//   // Update slide width on component mount and window resize
//   React.useEffect(() => {
//     const updateWidth = () => {
//       if (containerRef.current) {
//         const slideElement = containerRef.current.querySelector('.slide-item') as HTMLElement;
//         if (slideElement) {
//           setSlideWidth(slideElement.offsetWidth + 32); // width + gap
//         }
//       }
//     };

//     updateWidth();
//     window.addEventListener('resize', updateWidth);
//     return () => window.removeEventListener('resize', updateWidth);
//   }, []);

//   return (
//     <section aria-label="Company Values Slider" className="flex flex-col justify-center items-center overflow-hidden">
//       <div className="w-full overflow-hidden" ref={containerRef}>
//         <div
//           className="flex gap-8 transition-transform duration-500"
//           style={{
//             transform: slideWidth ? `translateX(-${currentSlide * slideWidth}px)` : 'none',
//           }}
//         >
//           {slides.map((slide, index) => (
//             <div key={index} className="slide-item">
//               <SlideContent
//                 title={slide.title}
//                 content={slide.content}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//       <SliderNavigation
//         totalSlides={slides.length}
//         currentSlide={currentSlide}
//         onPrevious={handlePrevious}
//         onNext={handleNext}
//       />
//     </section>
//   );
// }


"use client";
import * as React from "react";
import { SlideContent } from "./SlideContent";
import { SliderNavigation } from "./SliderNavigation";

const slides = [
  {
    title: "INTEGRITY",
    content:
      "At Heromatic, we live by our principles, conducting business with honesty and transparency, making ethical choices clear and straightforward.",
  },
  {
    title: "INNOVATION",
    content:
      "We constantly push boundaries, seeking creative solutions to drive progress and deliver exceptional results.",
  },
  {
    title: "EXCELLENCE",
    content:
      "We strive for the highest standards in everything we do, ensuring quality and precision in every detail.",
  },
  {
    title: "COLLABORATION",
    content:
      "Working together as one team, we combine our strengths to achieve remarkable outcomes.",
  },
  {
    title: "RESPONSIBILITY",
    content:
      "We take ownership of our actions and commitments, ensuring sustainable and positive impact.",
  },
  {
    title: "CUSTOMER FOCUS",
    content:
      "Our clients' success is our priority, delivering solutions that exceed expectations.",
  },
  {
    title: "ADAPTABILITY",
    content:
      "We embrace change and evolve continuously to meet emerging challenges and opportunities.",
  },
  
];

export default function Banner() {
  const [currentSlide, setCurrentSlide] = React.useState(1);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const slidesContainerRef = React.useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = React.useState(0);
  const [containerWidth, setContainerWidth] = React.useState(0);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Update measurements on component mount and window resize
  React.useEffect(() => {
    const updateMeasurements = () => {
      if (containerRef.current && slidesContainerRef.current) {
        const container = containerRef.current;
        const slideElement = container.querySelector('.slide-item') as HTMLElement;
        
        if (slideElement) {
          const newSlideWidth = slideElement.offsetWidth;
          const gap = 32; // 8 en tailwind equivale a 32px
          setSlideWidth(newSlideWidth + gap);
          setContainerWidth(container.offsetWidth);
        }
      }
    };

    updateMeasurements();
    window.addEventListener('resize', updateMeasurements);
    return () => window.removeEventListener('resize', updateMeasurements);
  }, []);

  // Calculate transform to center active slide
  const getTransformValue = () => {
    if (!containerWidth || !slideWidth) return 'translateX(0)';
    
    // Calculate offset to center the current slide
    const centerOffset = (containerWidth - slideWidth + 32) / 2;
    
    // Calculate the transform value
    const transform = -currentSlide * slideWidth + centerOffset;
    
    return `translateX(${transform}px)`;
  };

  return (
    <section aria-label="Company Values Slider" className="flex flex-col justify-center items-center">
      <div className="w-full overflow-hidden" ref={containerRef}>
        <div
          ref={slidesContainerRef}
          className="flex gap-8 transition-transform duration-500"
          style={{
            transform: getTransformValue(),
          }}
        >
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className={`slide-item ${index === currentSlide ? 'opacity-100' : 'opacity-70'}`}
            >
              <SlideContent
                title={slide.title}
                content={slide.content}
              />
            </div>
          ))}
        </div>
      </div>
      <SliderNavigation
        totalSlides={slides.length}
        currentSlide={currentSlide}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </section>
  );
}