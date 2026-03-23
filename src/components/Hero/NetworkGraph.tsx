import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  label?: string;
  color: string;
  glow: string;
}

const LABELED_NODES: { label: string; color: string; glow: string }[] = [
  { label: "TypeScript",    color: "#a78bfa", glow: "#a78bfa" },
  { label: "React",         color: "#e2e8f0", glow: "rgba(226,232,240,0.4)" },
  { label: "Design System", color: "#e2e8f0", glow: "rgba(226,232,240,0.4)" },
  { label: "CI/CD",         color: "#60a5fa", glow: "#60a5fa" },
  { label: "Storybook",     color: "#a78bfa", glow: "#a78bfa" },
  { label: "Performance",   color: "#e2e8f0", glow: "rgba(226,232,240,0.4)" },
  { label: "Accessibility", color: "#e2e8f0", glow: "rgba(226,232,240,0.4)" },
  { label: "Figma",         color: "#34d399", glow: "#34d399" },
  { label: "Claude Code",   color: "#60a5fa", glow: "#60a5fa" },
  { label: "AWS",           color: "#34d399", glow: "#34d399" },
];

export default function NetworkGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>();
  const nodesRef = useRef<Node[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const logicalW = () => canvas.offsetWidth;
    const logicalH = () => canvas.offsetHeight;

    const initNodes = () => {
      const w = logicalW();
      const h = logicalH();
      const nodes: Node[] = [];

      LABELED_NODES.forEach(({ label, color, glow }) => {
        nodes.push({
          x: 0.1 * w + Math.random() * 0.8 * w,
          y: 0.1 * h + Math.random() * 0.8 * h,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          radius: 5,
          label,
          color,
          glow,
        });
      });

      for (let i = 0; i < 28; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 2 + 1.5,
          color: "rgba(148, 163, 184, 0.5)",
          glow: "none",
        });
      }

      nodesRef.current = nodes;
    };

    resize();
    initNodes();

    const MAX_DIST = 130;

    const draw = () => {
      const w = logicalW();
      const h = logicalH();

      ctx.clearRect(0, 0, w, h);

      const nodes = nodesRef.current;

      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > w) node.vx *= -1;
        if (node.y < 0 || node.y > h) node.vy *= -1;
        node.x = Math.max(0, Math.min(w, node.x));
        node.y = Math.max(0, Math.min(h, node.y));
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.22;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(148, 163, 184, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        if (node.glow !== "none") {
          ctx.shadowColor = node.glow;
          ctx.shadowBlur = 10;
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.fill();
        ctx.shadowBlur = 0;

        if (node.label) {
          ctx.font = "12px Inter, ui-sans-serif, system-ui";
          ctx.fillStyle = "rgba(226, 232, 240, 0.8)";
          ctx.fillText(node.label, node.x + node.radius + 6, node.y + 4);
        }
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    const ro = new ResizeObserver(() => { resize(); });
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
