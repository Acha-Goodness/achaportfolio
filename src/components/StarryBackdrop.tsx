"use client";

import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  blinkSpeed: number;
  angle: number;
}

export default function StarryBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];

    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    // Initialize stars based on viewport size
    const initStars = () => {
      stars = [];
      const density = 0.00015; // stars per pixel
      const starCount = Math.floor(canvas.width * canvas.height * density);

      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5, // sizes from 0.5 to 2.0px
          speed: Math.random() * 0.05 + 0.01,
          opacity: Math.random() * 0.7 + 0.3,
          blinkSpeed: Math.random() * 0.015 + 0.005,
          angle: Math.random() * Math.PI * 2,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Mouse events
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
      mouseRef.current.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Render space-like radial glow in the center
      const radialGlow = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height)
      );
      radialGlow.addColorStop(0, "#081024"); // deep slate-blue glow
      radialGlow.addColorStop(0.6, "#030712"); // black slate background
      radialGlow.addColorStop(1, "#02040a");
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Render and update stars
      stars.forEach((star) => {
        // Star blinking animation
        star.opacity += Math.sin(star.angle) * star.blinkSpeed;
        star.angle += star.blinkSpeed;

        // Keep opacity within bounds
        if (star.opacity < 0.1) star.opacity = 0.1;
        if (star.opacity > 0.9) star.opacity = 0.9;

        // Move stars slowly downwards
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }

        let starX = star.x;
        let starY = star.y;

        // Mouse displacement effect
        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - star.x;
          const dy = mouseRef.current.y - star.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 150;

          if (distance < maxDistance) {
            // Push stars slightly away from the mouse cursor
            const force = (maxDistance - distance) / maxDistance;
            const pushX = (dx / distance) * force * 15;
            const pushY = (dy / distance) * force * 15;
            starX -= pushX;
            starY -= pushY;
          }
        }

        // Draw star
        ctx.fillStyle = `rgba(248, 250, 252, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(starX, starY, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw soft glow around slightly larger stars
        if (star.size > 1.2 && star.opacity > 0.5) {
          ctx.fillStyle = `rgba(249, 192, 75, ${star.opacity * 0.25})`; // golden subtle glow
          ctx.beginPath();
          ctx.arc(starX, starY, star.size * 3, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Draw cursor aura if active
      if (mouseRef.current.active) {
        const auraGlow = ctx.createRadialGradient(
          mouseRef.current.x,
          mouseRef.current.y,
          0,
          mouseRef.current.x,
          mouseRef.current.y,
          100
        );
        auraGlow.addColorStop(0, "rgba(249, 192, 75, 0.05)");
        auraGlow.addColorStop(1, "rgba(249, 192, 75, 0)");
        ctx.fillStyle = auraGlow;
        ctx.beginPath();
        ctx.arc(mouseRef.current.x, mouseRef.current.y, 100, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-50"
    />
  );
}
