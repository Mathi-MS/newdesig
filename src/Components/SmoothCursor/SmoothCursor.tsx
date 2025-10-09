import { useEffect, useRef, useState } from "react";
import "./SmoothCursor.css";

const SmoothCursor = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile/tablet
    const checkMobile = () => {
      const mobile =
        window.matchMedia("(max-width: 1024px)").matches ||
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const cursorDot = cursorDotRef.current;
    const cursorOutline = cursorOutlineRef.current;

    if (!cursorDot || !cursorOutline) return;

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Move dot immediately (normal cursor speed)
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    };

    const handleMouseEnter = () => {
      cursorDot.style.opacity = "1";
      cursorOutline.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      cursorDot.style.opacity = "0";
      cursorOutline.style.opacity = "0";
    };

    // Animate outline with smooth trailing effect
    const animateOutline = () => {
      // Smooth interpolation for trailing effect
      outlineX += (mouseX - outlineX) * 0.15;
      outlineY += (mouseY - outlineY) * 0.15;

      cursorOutline.style.left = `${outlineX}px`;
      cursorOutline.style.top = `${outlineY}px`;

      requestAnimationFrame(animateOutline);
    };

    // Add hover effect for interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, select, [role="button"], .clickable, .MuiButton-root, .MuiIconButton-root'
      );

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleElementHover);
        el.addEventListener("mouseleave", handleElementLeave);
      });
    };

    const handleElementHover = () => {
      setIsHovering(true);
    };

    const handleElementLeave = () => {
      setIsHovering(false);
    };

    // Initialize
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    addHoverListeners();
    animateOutline();

    // Re-add listeners when DOM changes (for dynamically added elements)
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();

      const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, select, [role="button"], .clickable, .MuiButton-root, .MuiIconButton-root'
      );
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleElementHover);
        el.removeEventListener("mouseleave", handleElementLeave);
      });
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div
        ref={cursorDotRef}
        className={`cursor-dot ${isHovering ? "hovering" : ""}`}
      />
      <div
        ref={cursorOutlineRef}
        className={`cursor-outline ${isHovering ? "hovering" : ""}`}
      />
    </>
  );
};

export default SmoothCursor;
