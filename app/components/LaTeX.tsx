"use client";

import React, { useEffect, useRef } from "react";
import katex from "katex";

interface LaTeXProps {
  children: string;
  block?: boolean;
  className?: string;
}

export const LaTeX: React.FC<LaTeXProps> = ({
  children,
  block = false,
  className = "",
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const container = block ? divRef.current : spanRef.current;
    if (container) {
      try {
        katex.render(children, container, {
          displayMode: block,
          throwOnError: false,
          trust: false,
        });
      } catch (error) {
        console.error("KaTeX rendering error:", error);
        container.textContent = children;
      }
    }
  }, [children, block]);

  if (block) {
    return <div ref={divRef} className={`katex-display ${className}`} />;
  }

  return <span ref={spanRef} className={className} />;
};
