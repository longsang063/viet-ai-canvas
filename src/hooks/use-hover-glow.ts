import { useState, useCallback } from "react";

export function useHoverGlow() {
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  const glowProps = {
    onMouseEnter,
    onMouseLeave,
  };

  const glowClass = isHovered
    ? "shadow-[0_0_30px_rgba(108,99,255,0.6)] border-primary/40"
    : "";

  return {
    isHovered,
    glowProps,
    glowClass,
  };
}
