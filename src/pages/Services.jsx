import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

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
    image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1775814063/S1_jmbjmi.png",
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
    image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1775814066/S2_haqrlg.jpg",
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
    image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1775814077/S4_egmjqc.jpg",
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
    image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1775814072/S3_dx59ou.png",
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
    image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1775814097/S5_udi3aj.png",
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
    image: "https://res.cloudinary.com/djnyc9yqk/image/upload/v1775814272/S6_pq2emg.png",
    accent: "#d85c26",
  },
];

function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1280
  );
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return width;
}

export default function Services() {
  const [active, setActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const prevActive = useRef(0);
  const intervalRef = useRef(null);
  const width = useWindowWidth();

  // Breakpoints
  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1025;
  const isDesktop = width >= 1025;

  useEffect(() => {
    if (document.getElementById("svc-fonts")) { setFontsLoaded(true); return; }
    const link = document.createElement("link");
    link.id = "svc-fonts";
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Raleway:wght@300;400;500;600;700&display=swap";
    link.onload = () => setFontsLoaded(true);
    document.head.appendChild(link);
  }, []);

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
  }, []);

  const handleSelect = (i) => {
    if (i === active) return;
    prevActive.current = active;
    setActive(i);
    setAnimKey(k => k + 1);
    startAutoPlay();
  };

  const svc = SERVICES[active];

  // ── MOBILE / TABLET LAYOUT ─────────────────────────────────────────────────
  if (!isDesktop) {
    return (
      <section style={{
        width: "100%",
        background: "#f4f0eb",
        fontFamily: fontsLoaded ? "'Raleway', sans-serif" : "sans-serif",
        overflow: "hidden",
      }}>
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

        {/* HEADER */}
        <div style={{
          padding: isMobile ? "48px 20px 32px" : "56px 40px 36px",
          borderBottom: "1px solid #ddd6cc",
        }}>
          <p style={{
            fontSize: 11, fontWeight: 700, letterSpacing: "0.3em",
            textTransform: "uppercase", color: "#c8922a", marginBottom: 10,
          }}>
            What We Do
          </p>
          <h2 style={{
            fontFamily: fontsLoaded ? "'Cormorant Garamond', serif" : "serif",
            fontSize: isMobile ? "clamp(34px, 9vw, 48px)" : "clamp(40px, 6vw, 58px)",
            fontWeight: 300, lineHeight: 1.05, color: "#1a1a1a", margin: "0 0 12px",marginTop: 30,
          }}>
            Our <em style={{ fontStyle: "italic", color: "#d85c26" }}>Services</em>
          </h2>
          <p style={{
            fontSize: 13, lineHeight: 1.8, color: "#555", fontWeight: 300, margin: 0,
          }}>
            Six specialised disciplines, one unified vision — delivering architecture that endures.
          </p>
        </div>

        {/* TABS — 2×3 grid on mobile, horizontal scroll on tablet */}
        {isMobile ? (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            borderBottom: "1px solid #ddd6cc",
          }}>
            {SERVICES.map((s, i) => {
              const isActive = active === i;
              // add right border to left column items, bottom border to all but last row
              const isLeftCol = i % 2 === 0;
              const isLastRow = i >= SERVICES.length - 2;
              return (
                <button
                  key={s.id}
                  onClick={() => handleSelect(i)}
                  style={{
                    padding: "16px 14px",
                    border: "none",
                    borderRight: isLeftCol ? "1px solid #ddd6cc" : "none",
                    borderBottom: isLastRow ? "none" : "1px solid #ddd6cc",
                    background: isActive ? "#1a1a1a" : "transparent",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    transition: "background 0.3s",
                    position: "relative",
                    textAlign: "left",
                  }}
                >
                  <span style={{
                    fontFamily: fontsLoaded ? "'Cormorant Garamond', serif" : "serif",
                    fontSize: 11,
                    color: isActive ? s.accent : "#bbb",
                    flexShrink: 0,
                  }}>
                    {s.id}
                  </span>
                  <span style={{
                    fontSize: 11,
                    fontWeight: isActive ? 700 : 500,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: isActive ? "#fff" : "#555",
                    lineHeight: 1.2,
                  }}>
                    {s.title}
                  </span>
                  {/* active bottom accent */}
                  {isActive && (
                    <div style={{
                      position: "absolute",
                      bottom: 0, left: 0, right: 0,
                      height: 2,
                      background: s.accent,
                      animation: "tabProgress 3s linear forwards",
                    }} />
                  )}
                </button>
              );
            })}
          </div>
        ) : (
          /* Tablet: horizontal scroll tabs */
          <div style={{
            overflowX: "auto",
            display: "flex",
            borderBottom: "1px solid #ddd6cc",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}>
            {SERVICES.map((s, i) => {
              const isActive = active === i;
              return (
                <button
                  key={s.id}
                  onClick={() => handleSelect(i)}
                  style={{
                    flexShrink: 0,
                    padding: "16px 24px",
                    border: "none",
                    borderBottom: isActive ? `3px solid ${s.accent}` : "3px solid transparent",
                    background: "transparent",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    transition: "all 0.3s",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span style={{
                    fontFamily: fontsLoaded ? "'Cormorant Garamond', serif" : "serif",
                    fontSize: 11, color: isActive ? s.accent : "#bbb",
                  }}>
                    {s.id}
                  </span>
                  <span style={{
                    fontSize: 12,
                    fontWeight: isActive ? 700 : 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: isActive ? "#1a1a1a" : "#777",
                  }}>
                    {s.title}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* CONTENT */}
        <div
          key={animKey}
          style={{ animation: "svcFadeIn 0.45s ease forwards" }}
        >
          {/* IMAGE */}
          <div style={{ position: "relative", width: "100%", aspectRatio: isTablet ? "16/7" : "16/9", overflow: "hidden" }}>
            <img
                key={animKey + "-img"}
                src={svc.image}
                alt={svc.title}
                loading="lazy"
                decoding="async"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  animation: "imgReveal 0.6s cubic-bezier(0.77,0,0.18,1) forwards",
                }}
              />
            {/* Overlay number */}
            <div style={{
              position: "absolute", bottom: 20, left: 20,
              fontFamily: fontsLoaded ? "'Cormorant Garamond', serif" : "serif",
              fontSize: isMobile ? 56 : 72,
              fontWeight: 300, color: "rgba(255,255,255,0.15)", lineHeight: 1, userSelect: "none",
            }}>
              {svc.id}
            </div>
            {/* Accent bar */}
            <div style={{
              position: "absolute", top: 0, left: 0,
              width: 4, height: "100%", background: svc.accent,
            }} />
          </div>

          {/* TEXT BLOCK */}
          <div style={{ padding: isMobile ? "28px 20px" : "36px 40px", borderBottom: "1px solid #ddd6cc" }}>
            <p style={{
              fontSize: 11, fontWeight: 700, letterSpacing: "0.25em",
              textTransform: "uppercase", color: svc.accent, marginBottom: 10,
            }}>
              {svc.tag}
            </p>
            <h3 style={{
              fontFamily: fontsLoaded ? "'Cormorant Garamond', serif" : "serif",
              fontSize: isMobile ? "clamp(22px, 6vw, 28px)" : "clamp(24px, 3vw, 32px)",
              fontWeight: 300, lineHeight: 1.2, color: "#1a1a1a",
              margin: "0 0 16px", fontStyle: "italic",
            }}>
              {svc.headline}
            </h3>
            <p style={{ fontSize: isMobile ? 13 : 14, lineHeight: 1.85, color: "#333", fontWeight: 300, margin: 0 }}>
              {svc.description}
            </p>
          </div>

          {/* FEATURES */}
          <div style={{ padding: isMobile ? "24px 20px" : "28px 40px", borderBottom: "1px solid #ddd6cc" }}>
            <p style={{
              fontSize: 10, fontWeight: 700, letterSpacing: "0.25em",
              textTransform: "uppercase", color: "#d85c26", marginBottom: 14,
            }}>
              Scope of Work
            </p>
            <ul style={{
              listStyle: "none", margin: 0, padding: 0,
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(3, 1fr)",
              gap: "10px 16px",
            }}>
              {svc.features.map((f, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ width: 16, height: 1, background: svc.accent, flexShrink: 0, display: "inline-block" }} />
                  <span style={{ fontSize: isMobile ? 12 : 13, color: "#333", fontWeight: 400 }}>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* STATS + CTA */}
          <div style={{
            padding: isMobile ? "24px 20px" : "28px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
          }}>
            <div style={{ display: "flex", gap: isMobile ? 28 : 40 }}>
              {[svc.stat1, svc.stat2].map((st, i) => (
                <div key={i}>
                  <div style={{
                    fontFamily: fontsLoaded ? "'Cormorant Garamond', serif" : "serif",
                    fontSize: isMobile ? 30 : 36,
                    fontWeight: 300, color: "#1a1a1a", lineHeight: 1, marginBottom: 4,
                  }}>
                    {st.value}
                  </div>
                  <div style={{
                    fontSize: 9, fontWeight: 700, letterSpacing: "0.2em",
                    textTransform: "uppercase", color: "#918d8d",
                  }}>
                    {st.label}
                  </div>
                </div>
              ))}
            </div>
            <Link to="/portfolio">
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
          </Link>
          </div>
        </div>

        {/* DOTS */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: 10, padding: "24px 0", borderTop: "1px solid #ddd6cc",
        }}>
          {SERVICES.map((s, i) => (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              style={{
                width: active === i ? 32 : 8, height: 3,
                background: active === i ? s.accent : "#ccc",
                border: "none", cursor: "pointer",
                transition: "all 0.35s ease", padding: 0,
              }}
            />
          ))}
        </div>
      </section>
    );
  }

  // ── DESKTOP LAYOUT — completely unchanged ──────────────────────────────────
  return (
    <section style={{
      width: "100%",
      background: "#f4f0eb",
      fontFamily: fontsLoaded ? "'Raleway', sans-serif" : "sans-serif",
      overflow: "hidden",
    }}>

      {/* SECTION HEADER */}
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
            fontSize: 11, fontWeight: 700, letterSpacing: "0.3em",
            textTransform: "uppercase", color: "#c8922a", marginBottom: 12,
          }}>
            What We Do
          </p>
          <h2 style={{
            fontFamily: fontsLoaded ? "'Cormorant Garamond', serif" : "serif",
            fontSize: "clamp(42px, 5vw, 68px)",
            fontWeight: 300, lineHeight: 1.05, color: "#1a1a1a", margin: 0,
          }}>
            Our <em style={{ fontStyle: "italic", color: "#d85c26" }}>Services</em>
          </h2>
        </div>
        <p style={{
          maxWidth: 340, fontSize: 14, lineHeight: 1.8, color: "#000000",
          textAlign: "right", fontWeight: 300,
        }}>
          Six specialised disciplines, one unified vision — delivering architecture that endures.
        </p>
      </div>

      {/* MAIN LAYOUT */}
      <div style={{ display: "flex", minHeight: 680 }}>

        {/* LEFT — service tabs */}
        <div style={{
          width: 320, flexShrink: 0,
          borderRight: "1px solid #ddd6cc",
          display: "flex", flexDirection: "column",
        }}>
          {SERVICES.map((s, i) => {
            const isActive = active === i;
            return (
              <button
                key={s.id}
                onClick={() => handleSelect(i)}
                style={{
                  display: "flex", alignItems: "center", gap: 18,
                  padding: "22px 32px", border: "none",
                  borderBottom: "1px solid #ddd6cc",
                  background: isActive ? "#1a1a1a" : "transparent",
                  cursor: "pointer", textAlign: "left",
                  transition: "background 0.3s ease",
                  position: "relative", overflow: "hidden",
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = "#ede8e2"; }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = "transparent"; }}
              >
                <span style={{
                  fontFamily: fontsLoaded ? "'Cormorant Garamond', serif" : "serif",
                  fontSize: 13, fontWeight: 400,
                  color: isActive ? s.accent : "#bbb",
                  letterSpacing: "0.05em", transition: "color 0.3s", flexShrink: 0,
                }}>
                  {s.id}
                </span>
                <span style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: 13, fontWeight: isActive ? 700 : 500,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  color: isActive ? "#fff" : "#444",
                  transition: "color 0.3s, font-weight 0.3s",
                }}>
                  {s.title}
                </span>
                {isActive && (
                  <div style={{
                    position: "absolute", right: 0, top: 0, bottom: 0,
                    width: 3, background: s.accent,
                  }} />
                )}
                {isActive && (
                  <div style={{
                    position: "absolute", bottom: 0, left: 0,
                    height: 2, background: s.accent,
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
            flex: 1, display: "grid",
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

          {/* IMAGE */}
          <div style={{ gridColumn: "2", gridRow: "1 / 3", position: "relative", overflow: "hidden" }}>
            <img
              key={animKey + "-img"}
              src={svc.image}
              alt={svc.title}
              loading="lazy"
              decoding="async"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                animation: "imgReveal 0.6s cubic-bezier(0.77,0,0.18,1) forwards",
              }}
            />
            <div style={{
              position: "absolute", bottom: 28, left: 28,
              fontFamily: fontsLoaded ? "'Cormorant Garamond', serif" : "serif",
              fontSize: 80, fontWeight: 300,
              color: "rgba(255,255,255,0.15)", lineHeight: 1, userSelect: "none",
            }}>
              {svc.id}
            </div>
            <div style={{
              position: "absolute", top: 0, left: 0,
              width: 4, height: "100%", background: svc.accent,
            }} />
          </div>

          {/* TOP-LEFT */}
          <div style={{
            gridColumn: "1", gridRow: "1",
            padding: "48px 48px 32px",
            borderBottom: "1px solid #ddd6cc",
            borderRight: "1px solid #ddd6cc",
          }}>
            <p style={{
              fontSize: 15, fontWeight: 700, letterSpacing: "0.25em",
              textTransform: "uppercase", color: svc.accent, marginBottom: 14,
            }}>
              {svc.tag}
            </p>
            <h3 style={{
              fontFamily: fontsLoaded ? "'Cormorant Garamond', serif" : "serif",
              fontSize: "clamp(26px, 2.5vw, 36px)",
              fontWeight: 300, lineHeight: 1.2, color: "#1a1a1a",
              margin: "0 0 20px 0", fontStyle: "italic",
            }}>
              {svc.headline}
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: "#000000", fontWeight: 300, margin: 0 }}>
              {svc.description}
            </p>
          </div>

          {/* BOTTOM-LEFT */}
          <div style={{
            gridColumn: "1", gridRow: "2",
            padding: "36px 48px 48px",
            borderRight: "1px solid #ddd6cc",
            display: "flex", flexDirection: "column", justifyContent: "space-between",
          }}>
            <div>
              <p style={{
                fontSize: 15, fontWeight: 700, letterSpacing: "0.25em",
                textTransform: "uppercase", color: "#d85c26", marginBottom: 16,
              }}>
                Scope of Work
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {svc.features.map((f, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{
                      width: 20, height: 1, background: svc.accent,
                      flexShrink: 0, display: "inline-block",
                    }} />
                    <span style={{ fontSize: 13, color: "#000000", fontWeight: 400, letterSpacing: "0.03em" }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{
              display: "flex", gap: 40, marginTop: 36,
              paddingTop: 28, borderTop: "1px solid #ddd6cc",
            }}>
              {[svc.stat1, svc.stat2].map((st, i) => (
                <div key={i}>
                  <div style={{
                    fontFamily: fontsLoaded ? "'Cormorant Garamond', serif" : "serif",
                    fontSize: 38, fontWeight: 300, color: "#1a1a1a",
                    lineHeight: 1, marginBottom: 6,
                  }}>
                    {st.value}
                  </div>
                  <div style={{
                    fontSize: 10, fontWeight: 700, letterSpacing: "0.2em",
                    textTransform: "uppercase", color: "#918d8d",
                  }}>
                    {st.label}
                  </div>
                </div>
              ))}

              <div style={{ marginLeft: "auto", display: "flex", alignItems: "flex-end" }}>
                <Link to="/portfolio">
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
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM DOTS */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        gap: 10, padding: "28px 0", borderTop: "1px solid #ddd6cc",
      }}>
        {SERVICES.map((s, i) => (
          <button
            key={i}
            onClick={() => handleSelect(i)}
            style={{
              width: active === i ? 32 : 8, height: 3,
              background: active === i ? s.accent : "#ccc",
              border: "none", cursor: "pointer",
              transition: "all 0.35s ease", padding: 0,
            }}
          />
        ))}
      </div>
    </section>
  );
}
