import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./SmoothCursor.css";

interface SmoothCursorProps {
  className?: string;
}

export const SmoothCursor: React.FC<SmoothCursorProps> = ({
  className = "",
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Add hover effects for interactive elements
    const handleElementHover = (isHover: boolean) => {
      setIsHovering(isHover);
    };

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, select, [role="button"], .cursor-pointer'
      );

      interactiveElements.forEach((element) => {
        element.addEventListener("mouseenter", () => handleElementHover(true));
        element.addEventListener("mouseleave", () => handleElementHover(false));
      });
    };

    // Initial setup
    addHoverListeners();

    // Set up observers for dynamically added elements
    const observer = new MutationObserver(() => {
      addHoverListeners();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
    };
  }, [isVisible]);

  // Hide on mobile devices
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  if (isMobile) return null;

  return (
    <>
      {/* Arrow cursor */}
      <motion.div
        className={`smooth-cursor-arrow ${className}`}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovering ? 1.2 : 1,
        }}
        transition={{
          type: "tween",
          duration: 0,
          ease: "linear",
        }}
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2L14 8L8 8.5L6 14L2 2Z"
            fill="currentColor"
            stroke="rgba(255, 255, 255, 0.8)"
            strokeWidth="0.5"
          />
        </svg>
      </motion.div>

      {/* Trailing dot */}
      <motion.div
        className={`smooth-cursor-trail ${className}`}
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
          scale: isHovering ? 0.8 : 1,
        }}
        transition={{
          type: "tween",
          duration: 0,
          ease: "linear",
        }}
        style={{
          opacity: isVisible ? 0.4 : 0,
        }}
      />
    </>
  );
};

export default SmoothCursor;


