import { useState, useEffect } from "react";

/**
 * Custom hook to determine if the current screen is considered "mobile" based on a breakpoint.
 * Uses the modern `matchMedia` API for efficient media query handling.
 */
const MOBILE_BREAKPOINT = 768; // Point (in pixels) at which screen is considered mobile

export function useIsMobile(): boolean {
  // Initialize state with false; we'll update it once the component mounts on the client
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    /**
     * Create a media query list for the mobile breakpoint.
     * This listens for changes when the screen width crosses the 768px threshold.
     */
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);

    /**
     * Handler function that updates the isMobile state based on media query matches.
     * This is more efficient than listening to all resize events.
     */
    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    // Set initial value based on current media query match
    setIsMobile(mediaQuery.matches);

    // Add listener for future changes
    mediaQuery.addEventListener("change", handleChange);

    /**
     * Cleanup function to remove the event listener when the component unmounts.
     * This prevents memory leaks and ensures the listener isn't duplicated.
     */
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount/unmount

  // Return the current mobile status
  return isMobile;
}