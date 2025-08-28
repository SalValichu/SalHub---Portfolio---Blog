import React, { useRef, useEffect } from "react";

// Particle trail effect inspired by mousetrail-particle4
export default function MouseTrailParticles({ darkMode }) {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const colors = darkMode
      ? ["#fff", "#bbb", "#666"]
      : ["#222", "#888", "#eee"];
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener("resize", resize);

    function addParticle(x, y) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      particles.current.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        alpha: 1,
        radius: 8 + Math.random() * 8,
        color,
      });
      if (particles.current.length > 60) particles.current.shift();
    }

    function drawParticles() {
      ctx.clearRect(0, 0, width, height);
      for (let p of particles.current) {
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 16;
        ctx.fill();
        ctx.restore();
        p.x += p.vx;
        p.y += p.vy;
        p.alpha *= 0.96;
        p.radius *= 0.98;
      }
      particles.current = particles.current.filter((p) => p.alpha > 0.05 && p.radius > 1);
    }

    function animate() {
      drawParticles();
      requestAnimationFrame(animate);
    }
    animate();

    function onMouseMove(e) {
      addParticle(e.clientX, e.clientY);
    }
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [darkMode]);

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