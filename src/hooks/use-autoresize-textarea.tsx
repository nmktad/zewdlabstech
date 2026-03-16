"use client";

import { useLayoutEffect } from "react";

export function useAutoSizeTextArea(
  textareaRef: React.RefObject<HTMLTextAreaElement | null>,
  maxRows = 5,
) {
  useLayoutEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const resize = () => {
      textarea.style.height = "auto";

      const style = window.getComputedStyle(textarea);
      const lineHeight = parseFloat(style.lineHeight);
      const maxHeight = lineHeight * maxRows;

      textarea.style.height = Math.min(textarea.scrollHeight, maxHeight) + "px";
    };

    resize();

    textarea.addEventListener("input", resize);

    return () => textarea.removeEventListener("input", resize);
  }, [textareaRef, maxRows]);
}
