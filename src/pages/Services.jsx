import { useState, useEffect, useRef } from "react";
import img1 from "../assets/images/S1.png";
import img2 from "../assets/images/S2.jpg";
import img3 from "../assets/images/S3.png";
import img4 from "../assets/images/S4.jpg";
import img5 from "../assets/images/S5.png";
import img6 from "../assets/images/S6.png";
const SERVICES = [
  {
    id: "01",
    title: "Plan & Design",
    tag: "Strategy · Blueprint · Vision",
    headline: "Where every great space begins.",
    description:
      "Great architecture starts long before the first brick is laid. Our planning and design phase is a deep collaborative process — we immerse ourselves in your vision, lifestyle, and goals to produce master plans that are as rigorous as they are inspired. Every square foot is intentional.",
    features: ["Site Analysis & Feasibility", "Concept Development", "Space Programming", "Budget Alignment", "Regulatory Compliance"],
    stat1: { value: "2,400+", label: "Projects Planned" },
    stat2: { value: "98%", label: "Client Satisfaction" },
    image: img1,
    accent: "#d85c26",
  },
  {
    id: "02",
    title: "Architecture",
    tag: "Structure · Form · Legacy",
    headline: "Buildings that outlive their era.",
    description:
      "We design structures that balance bold expression with structural intelligence. Our architectural practice draws on global influences while remaining deeply rooted in local context — resulting in buildings that feel both timeless and unmistakably of their moment.",
    features: ["Schematic Design", "Construction Documentation", "Material Specification", "Structural Coordination", "Sustainable Design"],
    stat1: { value: "150+", label: "Awards Won" },
    stat2: { value: "35", label: "Countries Built In" },
    image: img2,
    accent: "#d85c26",
  },
  {
    id: "03",
    title: "Interior Design",
    tag: "Atmosphere · Comfort · Detail",
    headline: "Spaces that feel like home.",
    description:
      "Interiors are where architecture becomes personal. We curate every material, texture, and light source to create environments that are deeply livable yet visually extraordinary. From minimalist sanctuaries to richly layered spaces — we design for how you actually live.",
    features: ["Furniture & FF&E", "Lighting Design", "Custom Millwork", "Art Curation", "Material Sourcing"],
    stat1: { value: "600+", label: "Interiors Designed" },
    stat2: { value: "12", label: "Design Awards" },
    image: img4,
    accent: "#d85c26",
  },
  {
    id: "04",
    title: "Project Planning",
    tag: "Timeline · Budget · Execution",
    headline: "Precision from concept to handover.",
    description:
      "Complex projects demand disciplined planning. Our project management team brings military-grade scheduling and financial oversight to every build — ensuring nothing falls through the cracks, timelines are met, and budgets are respected without compromising quality.",
    features: ["Master Scheduling", "Cost Estimation", "Contractor Coordination", "Risk Management", "Progress Reporting"],
    stat1: { value: "100%", label: "On-Time Delivery" },
    stat2: { value: "€2B+", label: "Projects Managed" },
    image: img3,
    accent: "#d85c26",
  },
  {
    id: "05",
    title: "3D Rendering",
    tag: "Visualisation · Clarity · Confidence",
    headline: "See it before it's built.",
    description:
      "Our photorealistic 3D visualisation studio transforms architectural drawings into immersive, lifelike environments. Walk through your project virtually before a single wall goes up — refine materials, lighting, and layouts with complete confidence and zero cost.",
    features: ["Photorealistic Stills", "Virtual Walkthroughs", "Daylight Simulation", "Material Previews", "Animation & Film"],
    stat1: { value: "4K", label: "Resolution Output" },
    stat2: { value: "48hr", label: "Turnaround Time" },
    image: img5,
    accent: "#d85c26",
  },
  {
    id: "06",
    title: "Renovation",
    tag: "Transform · Restore · Reimagine",
    headline: "New life for existing spaces.",
    description:
      "Every existing structure holds untapped potential. Our renovation specialists combine forensic analysis of existing conditions with bold creative vision — revealing hidden spatial opportunities and transforming dated buildings into contemporary masterpieces.",
    features: ["Heritage Restoration", "Adaptive Reuse", "Structural Upgrades", "MEP Modernisation", "Phased Construction"],
    stat1: { value: "300+", label: "Renovations Complete" },
    stat2: { value: "40yr", label: "Oldest Project Restored" },
    image: img6,
    accent: "#d85c26",
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const prevActive = useRef(0);
  // Ref to hold the interval so we can clear + restart it on manual click
  const intervalRef = useRef(null);

  useEffect(() => {
    if (document.getElementById("svc-fonts")) { setFontsLoaded(true); return; }
    const link = document.createElement("link");
    link.id = "svc-fonts";
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Raleway:wght@300;400;500;600;700&display=swap";
    link.onload = () => setFontsLoaded(true);
    document.head.appendChild(link);
  }, []);

  // ── AUTO-ADVANCE every 3 seconds ──────────────────────────────────────────
  // Extracted into a function so it can be called both on mount and after
  // a manual click (to restart the 3-second timer from zero).
  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive(prev => {
        const next = (prev + 1) % SERVICES.length;
        prevActive.current = prev;
        setAnimKey(k => k + 1);
        return next;
      });
    }, 3000);
  };

  useEffect(() => {
    startAutoPlay();
    return () => clearInterval(intervalRef.current);
  }, []); // runs once on mount

  // ── MANUAL SELECT ─────────────────────────────────────────────────────────
  // Clicking any tab or dot resets the 3s countdown from that moment.
  const handleSelect = (i) => {
    if (i === active) return;
    prevActive.current = active;
    setActive(i);
    setAnimKey(k => k + 1);
    startAutoPlay(); // restart timer so it counts 3s from the click
  };

  const svc = SERVICES[active];

  return (
    <section style={{
      width: "100%",
      background: "#f4f0eb",
      fontFamily: fontsLoaded ? "'Raleway', sans-serif" : "sans-serif",
      overflow: "hidden",
    }}>

      {/* ── SECTION HEADER ── */}
      <div style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        padding: "72px 72px 48px",
        borderBottom: "1px solid #ddd6cc",
      }}>
        <div>
          <p style={{
            fontFamily: "'Raleway', sans-serif",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#c8922a",
            marginBottom: 12,
          }}>
            What We Do
          </p>
          <h2 style={{
            fontFamily: fontsLoaded ? "'Cormorant Garamond', serif" : "serif",
            fontSize: "clamp(42px, 5vw, 68px)",
            fontWeight: 300,
            lineHeight: 1.05,
            color: "#1a1a1a",
            margin: 0,
          }}>
            Our <em style={{ fontStyle: "italic", color: "#d85c26" }}>Services</em>
          </h2>
        </div>
        <p style={{
          maxWidth: 340,
          fontSize: 14,
          lineHeight: 1.8,
          color: "#000000",
          textAlign: "right",
          fontWeight: 300,
        }}>
          Six specialised disciplines, one unified vision — delivering architecture that endures.
        </p>
      </div>

      {/* ── MAIN LAYOUT ── */}
      <div style={{ display: "flex", minHeight: 680 }}>

        {/* LEFT — service tabs */}
        <div style={{
          width: 320,
          flexShrink: 0,
          borderRight: "1px solid #ddd6cc",
          display: "flex",
          flexDirection: "column",
        }}>
          {SERVICES.map((s, i) => {
            const isActive = active === i;
            return (
              <button
                key={s.id}
                onClick={() => handleSelect(i)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                  padding: "22px 32px",
                  border: "none",
                  borderBottom: "1px solid #ddd6cc",
                  background: isActive ? "#1a1a1a" : "transparent",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "background 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = "#ede8e2"; }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = "transparent"; }}
              >
                {/* Number */}
                <span style={{
                  fontFamily: fontsLoaded ? "'Cormorant Garamond', serif" : "serif",
                  fontSize: 13,
                  fontWeight: 400,
                  color: isActive ? s.accent : "#bbb",
                  letterSpacing: "0.05em",
                  transition: "color 0.3s",
                  flexShrink: 0,
                }}>
                  {s.id}
                </span>

                {/* Title */}
                <span style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: 13,
                  fontWeight: isActive ? 700 : 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: isActive ? "#fff" : "#444",
                  transition: "color 0.3s, font-weight 0.3s",
                }}>
                  {s.title}
                </span>

                {/* Active indicator bar */}
                {isActive && (
                  <div style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    bottom: 0,
                    width: 3,
                    background: s.accent,
                  }} />
                )}

                {/* Progress bar that fills over 3 seconds for the active tab */}
                {isActive && (
                  <div style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    height: 2,
                    background: s.accent,
                    animation: "tabProgress 3s linear forwards",
                  }} />
                )}
              </button>
            );
          })}
        </div>

        {/* RIGHT — content panel */}
        <div
          key={animKey}
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "auto 1fr",
            animation: "svcFadeIn 0.45s ease forwards",
          }}
        >
          <style>{`
            @keyframes svcFadeIn {
              from { opacity: 0; transform: translateY(16px); }
              to   { opacity: 1; transform: translateY(0); }
            }
            @keyframes imgReveal {
              from { clip-path: inset(0 100% 0 0); }
              to   { clip-path: inset(0 0% 0 0); }
            }
            @keyframes tabProgress {
              from { width: 0%; }
              to   { width: 100%; }
            }
          `}</style>

          {/* IMAGE — spans both rows on right column */}
          <div style={{
            gridColumn: "2",
            gridRow: "1 / 3",
            position: "relative",
            overflow: "hidden",
          }}>
            <img
              key={animKey + "-img"}
              src={svc.image}
              alt={svc.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                animation: "imgReveal 0.6s cubic-bezier(0.77,0,0.18,1) forwards",
              }}
            />
            {/* Overlay with service number */}
            <div style={{
              position: "absolute",
              bottom: 28,
              left: 28,
              fontFamily: fontsLoaded ? "'Cormorant Garamond', serif" : "serif",
              fontSize: 80,
              fontWeight: 300,
              color: "rgba(255,255,255,0.15)",
              lineHeight: 1,
              userSelect: "none",
            }}>
              {svc.id}
            </div>
            {/* Accent bar */}
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 4,
              height: "100%",
              background: svc.accent,
            }} />
          </div>

          {/* TOP-LEFT — headline block */}
          <div style={{
            gridColumn: "1",
            gridRow: "1",
            padding: "48px 48px 32px",
            borderBottom: "1px solid #ddd6cc",
            borderRight: "1px solid #ddd6cc",
          }}>
            <p style={{
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: svc.accent,
              marginBottom: 14,
              transition: "color 0.3s",
            }}>
              {svc.tag}
            </p>
            <h3 style={{
              fontFamily: fontsLoaded ? "'Cormorant Garamond', serif" : "serif",
              fontSize: "clamp(26px, 2.5vw, 36px)",
              fontWeight: 300,
              lineHeight: 1.2,
              color: "#1a1a1a",
              margin: "0 0 20px 0",
              fontStyle: "italic",
            }}>
              {svc.headline}
            </h3>
            <p style={{
              fontSize: 15,
              lineHeight: 1.85,
              color: "#000000",
              fontWeight: 300,
              margin: 0,
            }}>
              {svc.description}
            </p>
          </div>

          {/* BOTTOM-LEFT — features + stats */}
          <div style={{
            gridColumn: "1",
            gridRow: "2",
            padding: "36px 48px 48px",
            borderRight: "1px solid #ddd6cc",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}>
            {/* Feature list */}
            <div>
              <p style={{
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#d85c26",
                marginBottom: 16,
              }}>
                Scope of Work
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {svc.features.map((f, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{
                      width: 20,
                      height: 1,
                      background: svc.accent,
                      flexShrink: 0,
                      display: "inline-block",
                    }} />
                    <span style={{ fontSize: 13, color: "#000000", fontWeight: 400, letterSpacing: "0.03em" }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats row */}
            <div style={{
              display: "flex",
              gap: 40,
              marginTop: 36,
              paddingTop: 28,
              borderTop: "1px solid #ddd6cc",
            }}>
              {[svc.stat1, svc.stat2].map((st, i) => (
                <div key={i}>
                  <div style={{
                    fontFamily: fontsLoaded ? "'Cormorant Garamond', serif" : "serif",
                    fontSize: 38,
                    fontWeight: 300,
                    color: "#1a1a1a",
                    lineHeight: 1,
                    marginBottom: 6,
                  }}>
                    {st.value}
                  </div>
                  <div style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#918d8d",
                  }}>
                    {st.label}
                  </div>
                </div>
              ))}

              {/* CTA */}
              <div style={{ marginLeft: "auto", display: "flex", alignItems: "flex-end" }}>
                <button
                  style={{
                    background: "#d85c26",
                    color: "#ffffff",
                    border: "none",
                    padding: "12px 24px",
                    fontSize: 10,
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = svc.accent; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#d85c26"; }}
                >
                  Our Works
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="12" height="12">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── BOTTOM STRIP — mini nav dots ── */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        padding: "28px 0",
        borderTop: "1px solid #ddd6cc",
      }}>
        {SERVICES.map((s, i) => (
          <button
            key={i}
            onClick={() => handleSelect(i)}
            style={{
              width: active === i ? 32 : 8,
              height: 3,
              background: active === i ? s.accent : "#ccc",
              border: "none",
              cursor: "pointer",
              transition: "all 0.35s ease",
              padding: 0,
            }}
          />
        ))}
      </div>

    </section>
  );
}





