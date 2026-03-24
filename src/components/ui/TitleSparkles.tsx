import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  opacity: number;
  opacitySpeed: number;
}

export default function TitleSparkles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      initParticles();
    };

    const w = () => canvas.offsetWidth;
    const h = () => canvas.offsetHeight;

    const initParticles = () => {
      const count = Math.floor((w() * h()) / 800);
      particlesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * w(),
        y: Math.random() * h(),
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.2 + 0.4,
        opacity: Math.random(),
        opacitySpeed:
          (Math.random() * 0.005 + 0.002) * (Math.random() < 0.5 ? 1 : -1),
      }));
    };

    resize();

    const draw = () => {
      const cw = w();
      const ch = h();
      ctx.clearRect(0, 0, cw, ch);

      const lineY = 2;
      const lineGrad = ctx.createLinearGradient(
        cw * 0.1,
        lineY,
        cw * 0.9,
        lineY,
      );
      lineGrad.addColorStop(0, "transparent");
      lineGrad.addColorStop(0.3, "rgba(124, 58, 237, 0.6)");
      lineGrad.addColorStop(0.5, "rgba(167, 139, 250, 1)");
      lineGrad.addColorStop(0.7, "rgba(124, 58, 237, 0.6)");
      lineGrad.addColorStop(1, "transparent");

      ctx.beginPath();
      ctx.moveTo(cw * 0.1, lineY);
      ctx.lineTo(cw * 0.9, lineY);
      ctx.strokeStyle = lineGrad;
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.save();
      ctx.filter = "blur(12px)";
      ctx.scale(1, 0.25);
      const glowGrad = ctx.createRadialGradient(
        cw / 2,
        lineY * 4,
        0,
        cw / 2,
        lineY * 4,
        200,
      );
      glowGrad.addColorStop(0, "rgba(167, 139, 250, 0.95)");
      glowGrad.addColorStop(0.5, "rgba(124, 58, 237, 0.4)");
      glowGrad.addColorStop(1, "transparent");
      ctx.fillStyle = glowGrad;
      ctx.fillRect(cw / 2 - 200, (lineY - 30) * 4, 400, 240);
      ctx.restore();

      particlesRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.opacity += p.opacitySpeed;

        if (p.x < 0 || p.x > cw) p.vx *= -1;
        if (p.y < 0 || p.y > ch) p.vy *= -1;
        if (p.opacity <= 0.05 || p.opacity >= 1) p.opacitySpeed *= -1;
        p.opacity = Math.max(0.05, Math.min(1, p.opacity));

        const cx = cw / 2;
        const cy = ch / 2;
        const dx = (p.x - cx) / (cw / 2);
        const dy = (p.y - cy) / (ch / 2.2);
        const edgeFade = Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(226, 232, 240, ${p.opacity * edgeFade})`;
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}
