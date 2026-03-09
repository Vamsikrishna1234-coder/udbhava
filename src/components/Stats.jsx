import { useState, useEffect, useRef } from "react";
import { Ruler, Lightbulb, PenTool, Monitor, Hammer } from "lucide-react";

const steps = [
  {
    icon: Ruler,
    title: "Site Analysis & Research",
    desc: "Understanding the site, climate, surroundings, client requirements, and feasibility.",
    number: "01",
  },
  {
    icon: Lightbulb,
    title: "Conceptual Design",
    desc: "Creating initial ideas, volumetric studies, and design concepts aligned with your vision.",
    number: "02",
  },
  {
    icon: PenTool,
    title: "Schematic Design",
    desc: "Floor plans, sections, elevations, and architectural detailing.",
    number: "03",
  },
  {
    icon: Monitor,
    title: "3D Walkthrough & Review",
    desc: "High-quality renders and walkthroughs to refine and finalize the design.",
    number: "04",
  },
  {
    icon: Hammer,
    title: "Execution & Project Management",
    desc: "Construction supervision, material checks, and on-site coordination until handover.",
    number: "05",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
}

function StepCard({ step, index, inView }) {
  const [hovered, setHovered] = useState(false);
  const Icon = step.icon;
  const delay = index * 120;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0px)" : "translateY(48px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      <div
        style={{
          background: hovered ? "#d85c26" : "#fff",
          borderRadius: "12px",
          padding: "32px 24px",
          boxShadow: hovered
            ? "0 20px 60px rgba(216,92,38,0.35)"
            : "0 4px 24px rgba(0,0,0,0.08)",
          transition: "background 0.38s ease, box-shadow 0.38s ease, transform 0.38s cubic-bezier(0.22,1,0.36,1)",
          transform: hovered ? "translateY(-8px) scale(1.03)" : "translateY(0) scale(1)",
          cursor: "default",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          height: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Step number watermark */}
        <span
          style={{
            position: "absolute",
            top: "10px",
            right: "14px",
            fontSize: "52px",
            fontWeight: "900",
            color: hovered ? "rgba(255,255,255,0.12)" : "rgba(216,92,38,0.07)",
            lineHeight: 1,
            letterSpacing: "-2px",
            transition: "color 0.38s ease",
            fontFamily: "'Georgia', serif",
            userSelect: "none",
          }}
        >
          {step.number}
        </span>

        {/* Icon circle */}
        <div
          style={{
            width: "76px",
            height: "76px",
            borderRadius: "50%",
            border: `2px solid ${hovered ? "rgba(255,255,255,0.7)" : "#d85c26"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: hovered ? "#fff" : "#d85c26",
            marginBottom: "20px",
            transition: "border-color 0.38s ease, color 0.38s ease, transform 0.38s ease",
            transform: hovered ? "rotate(8deg) scale(1.1)" : "rotate(0deg) scale(1)",
            flexShrink: 0,
          }}
        >
          <Icon size={32} strokeWidth={1.5} />
        </div>

        {/* Connector dot below icon */}
        <div
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: hovered ? "rgba(255,255,255,0.6)" : "#d85c26",
            marginBottom: "16px",
            transition: "background 0.38s ease",
          }}
        />

        <h3
          style={{
            fontSize: "14px",
            fontWeight: "800",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: hovered ? "#fff" : "#1a1a1a",
            marginBottom: "12px",
            lineHeight: 1.3,
            transition: "color 0.38s ease",
          }}
        >
          {step.title}
        </h3>

        <p
          style={{
            fontSize: "13px",
            lineHeight: "1.7",
            color: hovered ? "rgba(255,255,255,0.85)" : "#666",
            transition: "color 0.38s ease",
          }}
        >
          {step.desc}
        </p>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: hovered ? "translateX(-50%) scaleX(1)" : "translateX(-50%) scaleX(0)",
            width: "60%",
            height: "3px",
            background: "rgba(255,255,255,0.5)",
            borderRadius: "2px 2px 0 0",
            transition: "transform 0.4s cubic-bezier(0.22,1,0.36,1)",
            transformOrigin: "center",
          }}
        />
      </div>
    </div>
  );
}

export default function DetailedArchitectProcess() {
  const [sectionRef, inView] = useInView(0.1);

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "80px 0",
        background: "#ffffff",
        fontFamily: "'Trebuchet MS', 'Gill Sans', sans-serif",
      }}
    >
      <style>{`
        @keyframes lineGrow {
          from { width: 0; opacity: 0; }
          to { width: 56px; opacity: 1; }
        }
        @keyframes titleReveal {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes connectorExpand {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: "#1a1a1a",
              margin: 0,
              animation: inView ? "titleReveal 0.7s ease 0.15s both" : "none",
            }}
          >
            Our Architectural{" "}
            <span style={{ color: "#d85c26" }}>Process</span>
          </h2>
          <p
            style={{
              marginTop: "14px",
              color: "#888",
              fontSize: "15px",
              letterSpacing: "0.04em",
              animation: inView ? "titleReveal 0.7s ease 0.28s both" : "none",
              opacity: inView ? 1 : 0,
            }}
          >
            From vision to reality — five deliberate steps
          </p>
        </div>

        {/* Connector line (desktop) */}
        <div
          style={{
            position: "relative",
            marginBottom: "0",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "38px",
              left: "10%",
              right: "10%",
              height: "2px",
              background: "linear-gradient(90deg, transparent, #d85c26 20%, #d85c26 80%, transparent)",
              transformOrigin: "left center",
              transform: inView ? "scaleX(1)" : "scaleX(0)",
              transition: "transform 1.2s cubic-bezier(0.22,1,0.36,1) 0.3s",
              opacity: 0.3,
              zIndex: 0,
              pointerEvents: "none",
            }}
          />

          {/* Cards grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gap: "20px",
              position: "relative",
              zIndex: 1,
            }}
          >
            {steps.map((step, i) => (
              <StepCard key={i} step={step} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          .process-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 520px) {
          .process-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}