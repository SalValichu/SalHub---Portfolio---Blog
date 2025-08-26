import React, { useEffect, useRef } from "react";

// Chameleon Cursor: dot by default, I-beam over text, pill outline on links/buttons
export default function ChameleonCursor() {
  const cursorRef = useRef();
  const pillRef = useRef();

  useEffect(() => {
    const cursor = cursorRef.current;
    const pill = pillRef.current;
    let lastType = "dot";

    function updateCursor(e) {
      const x = e.clientX;
      const y = e.clientY;
      cursor.style.transform = `translate3d(${x}px,${y}px,0)`;
      pill.style.transform = `translate3d(${x}px,${y}px,0)`;
    }

    function morphCursor(e) {
      let type = "dot";
      let pillStyle = "none";
      let pillWidth = 0;
      let pillHeight = 0;
      let pillRadius = 0;
      let pillOpacity = 0;
      let pillColor = "#FAFAFA";
      let pillBorder = "2px solid #FAFAFA";
      let pillShadow = "0 0 16px #FAFAFA44";
      let cursorColor = "#FAFAFA";
      let cursorSize = 10;
      let cursorBorder = "none";
      let cursorShadow = "0 0 8px #FAFAFA44";

      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el) {
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable) {
          type = "ibeam";
          cursorSize = 2;
          cursorColor = "#FAFAFA";
          cursorBorder = "none";
          cursorShadow = "none";
        } else if (el.tagName === "A" || el.tagName === "BUTTON" || el.classList.contains("cursor-pill")) {
          type = "pill";
          pillStyle = "block";
          pillWidth = el.offsetWidth + 24;
          pillHeight = el.offsetHeight + 12;
          pillRadius = pillHeight / 2;
          pillOpacity = 0.5;
          pillColor = "#FAFAFA";
          pillBorder = "2px solid #FAFAFA";
          pillShadow = "0 0 24px #FAFAFA44";
        }
      }
      // Animate cursor
      cursor.style.width = `${cursorSize}px`;
      cursor.style.height = `${type === "ibeam" ? 32 : cursorSize}px`;
      cursor.style.borderRadius = `${type === "ibeam" ? 1 : 50}%`;
      cursor.style.background = cursorColor;
      cursor.style.border = cursorBorder;
      cursor.style.boxShadow = cursorShadow;
      cursor.style.opacity = type === "dot" ? 1 : 0.9;
      // Animate pill
      pill.style.display = pillStyle;
      pill.style.width = `${pillWidth}px`;
      pill.style.height = `${pillHeight}px`;
      pill.style.borderRadius = `${pillRadius}px`;
      pill.style.background = pillColor;
      pill.style.border = pillBorder;
      pill.style.boxShadow = pillShadow;
      pill.style.opacity = pillOpacity;
    }

    document.addEventListener("mousemove", updateCursor);
    document.addEventListener("mousemove", morphCursor);
    return () => {
      document.removeEventListener("mousemove", updateCursor);
      document.removeEventListener("mousemove", morphCursor);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: "#FAFAFA",
          pointerEvents: "none",
          zIndex: 9999,
          transition: "all 0.18s cubic-bezier(.4,0,.2,1)",
          boxShadow: "0 0 8px #FAFAFA44",
          opacity: 1,
          mixBlendMode: "difference"
        }}
      />
      <div
        ref={pillRef}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: 0,
          height: 0,
          borderRadius: 9999,
          background: "#FAFAFA",
          border: "2px solid #FAFAFA",
          pointerEvents: "none",
          zIndex: 9998,
          transition: "all 0.22s cubic-bezier(.4,0,.2,1)",
          boxShadow: "0 0 24px #FAFAFA44",
          opacity: 0,
          mixBlendMode: "difference"
        }}
      />
    </>
  );
}
