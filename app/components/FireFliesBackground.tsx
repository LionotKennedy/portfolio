// "use client";
// import type React from "react";
// import { useEffect, useState } from "react";

// interface Firefly {
//   id: number;
//   top: string;
//   left: string;
//   animationDuration: string;
// }

// const createFirefly = (): Firefly => ({
//   id: Math.random(),
//   top: `${Math.random() * 100}%`,
//   left: `${Math.random() * 100}%`,
//   animationDuration: `${Math.random() * 5 + 5}s`,
// });

// const FireFliesBackground: React.FC = () => {
//   const [fireflies, setFireflies] = useState<Firefly[]>([]);

//   useEffect(() => {
//     const addFireflyPeriodically = (): void => {
//       const newFirefly = createFirefly();
//       setFireflies((currentFireflies) => [
//         ...currentFireflies.slice(-14),
//         newFirefly,
//       ]);
//     };

//     const interval = setInterval(addFireflyPeriodically, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
//       {fireflies.map((firefly) => {
//         return (
//           <div
//             key={firefly.id}
//             className="absolute roudned-full w-[10px] h-[10px] bg-firefly-radial"
//             style={{
//               top: firefly.top,
//               left: firefly.left,
//               animation: `move ${firefly.animationDuration} infinite alternate`,
//             }}
//           ></div>
//         );
//       })}
//     </div>
//   );
// };

// export default FireFliesBackground;
























"use client";
import { useEffect, useRef } from "react";
import "../components/style/fireFlies.css"; // ton fichier styles des lucioles

export default function FireFliesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    // ----  particles logic  ----
    const particles: any[] = [];
    const particleCount = 60;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0 || p.x > w) p.speedX *= -1;
        if (p.y < 0 || p.y > h) p.speedY *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.globalAlpha = p.opacity;
        // ctx.fillStyle = "#ffcc00"; // couleur luciole
        ctx.fillStyle = "#0099ff"; // bleu du BackgroundHome
        ctx.fill();
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fireFliesCanvas"
      aria-hidden="true"
    />
  );
}