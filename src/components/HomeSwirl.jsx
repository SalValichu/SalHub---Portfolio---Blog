import React, { useRef, useEffect } from "react";

// Swirl effect: draws a smooth animated swirl following the mouse
export default function HomeSwirl({ darkMode }) {
  const canvasRef = useRef(null);
  const swirlColor = darkMode ? "rgba(200,200,200,0.7)" : "rgba(80,80,80,0.7)";

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    let swirl = { t: 0 };
    let animationFrame;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function drawSwirl() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.strokeStyle = swirlColor;
      ctx.lineWidth = 4;
      ctx.shadowColor = swirlColor;
      ctx.shadowBlur = 16;
      ctx.beginPath();
      // Swirl math: spiral curve following mouse
      let cx = mouse.x, cy = mouse.y;
      let points = 80;
      let radius = 120;
      let swirliness = 2.2;
      for (let i = 0; i < points; i++) {
        let angle = swirl.t + i * swirliness * Math.PI / points;
        let r = radius * (i / points);
        let x = cx + Math.cos(angle) * r;
        let y = cy + Math.sin(angle) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();
    }

    function animate() {
      swirl.t += 0.04;
      drawSwirl();
      animationFrame = requestAnimationFrame(animate);
    }
    animate();

    function onMouseMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, [darkMode, swirlColor]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        background: "transparent",
      }}
    />
  );
}
