import React, { useRef, useState, useEffect } from "react";

const projects = [
  {
    name: "Beerolls",
    description:
      "Innovative food delivery platform with real-time tracking and inventory management.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Engage Agent",
    description:
      "AI-powered customer engagement suite for modern businesses.",
    tech: ["Vue.js", "Python", "FastAPI"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Resume Scorer",
    description:
      "Automated resume analysis and scoring for recruiters and job seekers.",
    tech: ["Next.js", "Flask", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Habito",
    description:
      "Personal habit tracker with analytics and motivational insights.",
    tech: ["React Native", "Firebase"],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Focuso",
    description:
      "Productivity app for deep work and focus sessions.",
    tech: ["Svelte", "Supabase"],
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
  },
];

const clamp = (num: number, min: number, max: number) => Math.max(min, Math.min(num, max));

export const MarketLeadersSection: React.FC = () => {
  const [active, setActive] = useState(0);
  const [scrollLocked, setScrollLocked] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const numProjects = projects.length;

  // Handle scroll/hover with throttle
  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    if (scrollLocked) return;
    setScrollLocked(true);
    setTimeout(() => setScrollLocked(false), 400);
    if (e.deltaY > 0) {
      setActive((prev) => (prev + 1) % numProjects);
    } else if (e.deltaY < 0) {
      setActive((prev) => (prev - 1 + numProjects) % numProjects);
    }
  };

  useEffect(() => {
    const node = carouselRef.current;
    if (!node) return;
    node.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      node.removeEventListener("wheel", handleWheel);
    };
  }, [numProjects, scrollLocked]);

  const handleMouseEnter = () => {
    if (carouselRef.current) {
      carouselRef.current.style.cursor = "grab";
    }
  };

  // 3D carousel positions
  const getTransform = (idx: number) => {
    const offset = idx - active;
    const angle = offset * 30; // 30deg per item
    const z = -Math.abs(offset) * 80;
    return `rotateX(${angle}deg) translateZ(${300 + z}px)`;
  };

  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center bg-skin-beige dark:bg-gray-900 relative overflow-hidden"
      style={{ scrollSnapAlign: "start" }}
      id="market-leaders"
    >
      {/* Section Heading */}
      <div className="w-full max-w-7xl px-4 pt-16 pb-8 mx-auto text-center">
        <h2 className="font-manrope text-6xl md:text-7xl font-extrabold text-foreground mb-4">
          Market Leaders
        </h2>
        <p className="font-manrope text-2xl md:text-3xl text-muted-foreground mb-10">
          Experience our portfolio in an immersive vertical carousel - scroll to explore
        </p>
      </div>
      <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto items-center justify-center gap-8 px-4 md:gap-8 md:h-[480px]">
        {/* Left: Project Description */}
        <div className="flex-1 max-w-md rounded-2xl bg-white/90 dark:bg-black/70 backdrop-blur-md p-8 text-gray-900 dark:text-white shadow-2xl min-h-[320px] flex flex-col justify-center border border-gray-200 dark:border-gray-700 self-center md:h-[340px]">
          <div className="mb-2 text-teal font-semibold text-base">Currently Viewing</div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-[#5078f2]">
            {projects[active].name}
          </h2>
          <p className="mb-4 text-base md:text-lg text-gray-700 dark:text-skin-beige font-semibold">
            {projects[active].description}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {projects[active].tech.map((tech) => (
              <span
                key={tech}
                className="bg-teal text-white px-3 py-1 rounded-full text-xs font-semibold shadow"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right: 3D Vertical Carousel */}
        <div
          className="flex-1 flex items-center justify-center h-full relative md:h-[340px]"
          ref={carouselRef}
          style={{ perspective: 1200, minHeight: 320 }}
        >
          <div
            className="relative w-[320px] h-[200px] flex items-center justify-center"
            style={{ transformStyle: "preserve-3d", transition: "transform 0.7s cubic-bezier(.23,1.01,.32,1)" }}
          >
            {projects.map((project, idx) => (
              <img
                key={project.name}
                src={project.image}
                alt={project.name}
                className={`absolute left-0 top-0 w-[320px] h-[200px] object-cover rounded-2xl border-4 transition-all duration-700 shadow-2xl ${
                  idx === active
                    ? "z-20 scale-105 border-[#00bfa6] shadow-[0_0_24px_0_#5078f2]/60"
                    : "z-10 opacity-60 border-white/30"
                }`}
                style={{
                  transform: getTransform(idx),
                  filter: idx === active ? "none" : "blur(1.5px)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 