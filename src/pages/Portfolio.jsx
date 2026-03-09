import { useState, useEffect, useCallback } from "react";

// ─── FONT LOADER ───────────────────────────────────────────────────────────────
function useFonts() {
  useEffect(() => {
    if (document.getElementById("port-fonts")) return;
    const link = document.createElement("link");
    link.id = "port-fonts";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;600;700;800;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Raleway:wght@300;400;500;600;700&display=swap";
    document.head.appendChild(link);
  }, []);
}

const ACCENT = "#d85c26";

// ─── PROJECT DATA (from LatestWorksSection, 6 total) ──────────────────────────
const PROJECTS = [
  {
    id: "01",
    title: "Modern Skyscraper",
    category: "Building",
    tag: "Architecture",
    year: "2024",
    location: "New York, USA",
    description:
      "A 72-storey glass tower that redefines the city skyline. The faceted façade dynamically responds to light conditions, creating a living landmark that shifts character from dawn to dusk.",
    cover: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=85",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    ],
  },
  {
    id: "02",
    title: "European Complex",
    category: "Commercial",
    tag: "Architecture",
    year: "2023",
    location: "Paris, France",
    description:
      "A 12-building campus that reinterprets European urban density. Stone, glass, and bronze define each elevation — a network of covered arcades and courtyards creates a pedestrian-friendly quarter within the city.",
    cover: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1400&q=85",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
    ],
  },
  {
    id: "03",
    title: "Villa Serena",
    category: "Residential",
    tag: "Luxury",
    year: "2023",
    location: "Amalfi Coast, Italy",
    description:
      "A cliff-side villa where every room frames the Tyrrhenian Sea. Hand-plastered walls, reclaimed olive wood, and bespoke ironwork create a dialogue between ancient craft and contemporary living.",
    cover: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1400&q=85",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80",
    ],
  },
  {
    id: "04",
    title: "Grand Business Center",
    category: "Commercial",
    tag: "Corporate",
    year: "2022",
    location: "Frankfurt, Germany",
    description:
      "The financial district's new centrepiece — a 200,000 m² campus integrating offices, conference centre, and public plaza. The double-skin glass facade achieves LEED Platinum certification.",
    cover: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1400&q=85",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      "https://images.unsplash.com/photo-1554435493-93422e8220c8?w=800&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    ],
  },
  {
    id: "05",
    title: "Sunset Hills Villa",
    category: "Residential",
    tag: "Luxury",
    year: "2022",
    location: "Malibu, USA",
    description:
      "A 1,200 m² cliff-top villa commanding 270° ocean views. Cantilevered terraces, an infinity pool that meets the horizon, and a seamless indoor-outdoor floor plan define this Pacific benchmark.",
    cover: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1400&q=85",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=800&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    ],
  },
  {
    id: "06",
    title: "Blue Horizon",
    category: "Commercial",
    tag: "Interior",
    year: "2022",
    location: "Barcelona, Spain",
    description:
      "A waterfront commercial hub where every workspace commands a view of the Mediterranean. Curved glazing, marine-grade materials, and a rooftop garden blur the boundary between work and leisure.",
    cover: "https://images.unsplash.com/photo-1554435493-93422e8220c8?w=1400&q=85",
    images: [
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    ],
  },
];

const ALL_TAGS = ["All", ...Array.from(new Set(PROJECTS.map(p => p.category)))];

// ─── ICONS ─────────────────────────────────────────────────────────────────────
const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" width="16" height="16">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const ZoomInIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="16" height="16">
    <circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
  </svg>
);
const ZoomOutIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="16" height="16">
    <circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>
);
const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="13" height="13">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

// ─── CTRL BUTTON ───────────────────────────────────────────────────────────────
function CtrlBtn({ onClick, children, title, disabled, danger }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick} disabled={disabled} title={title}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        width: 34, height: 34, border: `1px solid ${hov && danger ? ACCENT : "rgba(255,255,255,0.1)"}`,
        background: hov ? (danger ? ACCENT : "rgba(255,255,255,0.08)") : "transparent",
        color: disabled ? "rgba(255,255,255,0.18)" : "#fff",
        cursor: disabled ? "not-allowed" : "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        borderRadius: 3, transition: "all 0.18s",
      }}
    >{children}</button>
  );
}

// ─── PROJECT DETAIL OVERLAY ────────────────────────────────────────────────────
function ProjectDetail({ project, onClose }) {
  const [activeImg, setActiveImg] = useState(project.cover);
  const [zoom, setZoom] = useState(1);
  const allImgs = [project.cover, ...project.images];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const esc = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", esc);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", esc); };
  }, [onClose]);

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "rgba(8,8,8,0.97)",
      display: "flex", flexDirection: "column",
      animation: "detailIn 0.32s cubic-bezier(0.22,1,0.36,1) forwards",
      overflowY: "auto",
    }}>
      <style>{`
        @keyframes detailIn { from{opacity:0;transform:scale(0.97)} to{opacity:1;transform:scale(1)} }
        @keyframes thumbIn  { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
        @keyframes imgSwap  { from{opacity:0} to{opacity:1} }
      `}</style>

      {/* TOP BAR */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "16px 28px", borderBottom: "1px solid rgba(255,255,255,0.07)",
        flexShrink: 0, flexWrap: "wrap", gap: 12,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
          <div style={{
            background: ACCENT, padding: "4px 12px",
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 10, fontWeight: 900, letterSpacing: "0.3em", color: "#fff",
            textTransform: "uppercase",
          }}>
            {project.category}
          </div>
          <h3 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "clamp(18px, 3vw, 26px)", fontWeight: 900,
            letterSpacing: "0.06em", color: "#fff", margin: 0, textTransform: "uppercase",
          }}>
            {project.title}
          </h3>
          <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.3)" }}>
            {project.location} · {project.year}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.3)", marginRight: 4 }}>
            {Math.round(zoom * 100)}%
          </span>
          <CtrlBtn onClick={() => setZoom(z => Math.max(0.5, z - 0.25))} disabled={zoom <= 0.5} title="Zoom Out"><ZoomOutIcon /></CtrlBtn>
          <CtrlBtn onClick={() => setZoom(1)} title="Reset zoom">
            <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: 9, fontWeight: 700 }}>1:1</span>
          </CtrlBtn>
          <CtrlBtn onClick={() => setZoom(z => Math.min(3, z + 0.25))} disabled={zoom >= 3} title="Zoom In"><ZoomInIcon /></CtrlBtn>
          <div style={{ width: 1, height: 26, background: "rgba(255,255,255,0.1)", margin: "0 4px" }} />
          <CtrlBtn onClick={onClose} title="Close (Esc)" danger><CloseIcon /></CtrlBtn>
        </div>
      </div>

      {/* MAIN IMAGE */}
      <div style={{
        flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
        padding: "28px 28px 16px",
        overflow: zoom > 1 ? "auto" : "hidden", minHeight: 300,
      }}>
        <div style={{
          position: "relative",
          maxWidth: zoom === 1 ? "min(900px, 90vw)" : "none",
          width: zoom > 1 ? `${zoom * 70}vw` : "auto",
          transition: "width 0.3s",
        }}>
          <img
            key={activeImg}
            src={activeImg} alt={project.title}
            style={{
              width: "100%",
              maxHeight: zoom === 1 ? "55vh" : "none",
              height: "auto", objectFit: "contain", display: "block",
              borderLeft: `4px solid ${ACCENT}`,
              animation: "imgSwap 0.3s ease",
            }}
          />
          {/* sub-tag overlay */}
          <div style={{
            position: "absolute", bottom: 0, left: 4, right: 0,
            background: "linear-gradient(transparent, rgba(0,0,0,0.72))",
            padding: "24px 16px 10px",
            display: "flex", alignItems: "center", gap: 10,
          }}>
            <div style={{ width: 24, height: 2, background: ACCENT }} />
            <span style={{
              fontFamily: "'Raleway', sans-serif", fontSize: 10, fontWeight: 700,
              letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)",
            }}>
              {project.tag}
            </span>
          </div>
        </div>
      </div>

      {/* DESCRIPTION ROW */}
      <div style={{ padding: "0 28px 16px", display: "flex", gap: 32, flexWrap: "wrap" }}>
        <p style={{
          fontFamily: "'Raleway', sans-serif", fontSize: 13, lineHeight: 1.85,
          color: "rgba(255,255,255,0.42)", fontWeight: 300, margin: 0,
          maxWidth: 580, flex: "1 1 260px",
        }}>
          {project.description}
        </p>
        <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
          {[["Category", project.category], ["Type", project.tag], ["Location", project.location], ["Year", project.year]].map(([l, v]) => (
            <div key={l}>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", marginBottom: 4, fontFamily: "'Raleway', sans-serif" }}>{l}</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#fff", fontFamily: "'Raleway', sans-serif" }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* THUMBNAIL STRIP */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "16px 28px 28px", flexShrink: 0 }}>
        <p style={{
          fontFamily: "'Raleway', sans-serif", fontSize: 9, fontWeight: 700,
          letterSpacing: "0.3em", textTransform: "uppercase",
          color: "rgba(255,255,255,0.2)", marginBottom: 12,
        }}>
          Project Gallery — {allImgs.length} images
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
          gap: 8,
        }}>
          {allImgs.map((img, i) => {
            const isActive = activeImg === img;
            return (
              <button key={i} onClick={() => { setActiveImg(img); setZoom(1); }}
                style={{
                  padding: 0, border: "none", cursor: "pointer", position: "relative",
                  overflow: "hidden",
                  outline: isActive ? `2px solid ${ACCENT}` : "2px solid transparent",
                  outlineOffset: 2, background: "none",
                  animation: `thumbIn 0.4s ease ${i * 0.06}s both`,
                }}
              >
                <img src={img} alt="" style={{
                  width: "100%", height: 88, objectFit: "cover", display: "block",
                  filter: isActive ? "brightness(1)" : "brightness(0.4)",
                  transition: "filter 0.25s",
                }} />
                {isActive && <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: ACCENT }} />}
                <div style={{
                  position: "absolute", top: 6, left: 7,
                  fontFamily: "'Barlow Condensed', sans-serif", fontSize: 9, fontWeight: 700,
                  color: isActive ? ACCENT : "rgba(255,255,255,0.35)", letterSpacing: "0.1em",
                }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── PROJECT CARD ──────────────────────────────────────────────────────────────
function ProjectCard({ project, index, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <article
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative", cursor: "pointer", overflow: "hidden",
        background: "#111",
        animation: `cardIn 0.55s ease ${index * 0.08}s both`,
      }}
    >
      <style>{`
        @keyframes cardIn { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
      `}</style>

      {/* Cover */}
      <div style={{ overflow: "hidden", aspectRatio: "4/3" }}>
        <img
          src={project.cover} alt={project.title}
          style={{
            width: "100%", height: "100%", objectFit: "cover", display: "block",
            transform: hov ? "scale(1.07)" : "scale(1)",
            transition: "transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)",
            filter: hov ? "brightness(0.42)" : "brightness(0.72)",
          }}
        />
      </div>

      {/* Accent top bar slides in */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 3,
        background: ACCENT,
        transform: hov ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left", transition: "transform 0.4s ease",
      }} />

      {/* Project number */}
      <div style={{
        position: "absolute", top: 14, right: 16,
        fontFamily: "'Barlow Condensed', sans-serif",
        fontSize: 11, fontWeight: 700, letterSpacing: "0.3em",
        color: hov ? ACCENT : "rgba(255,255,255,0.35)",
        transition: "color 0.3s",
      }}>
        {project.id}
      </div>

      {/* Category tag top-left */}
      <div style={{
        position: "absolute", top: 14, left: 14,
        background: "rgba(0,0,0,0.55)", backdropFilter: "blur(6px)",
        padding: "4px 10px",
        fontFamily: "'Raleway', sans-serif", fontSize: 9, fontWeight: 700,
        letterSpacing: "0.2em", textTransform: "uppercase",
        color: "rgba(255, 255, 255, 0.9)",
      }}>
        {project.category}
      </div>

      {/* Bottom info — slides up */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        padding: "52px 20px 20px",
        background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, transparent 100%)",
        transform: hov ? "translateY(0)" : "translateY(8px)",
        opacity: hov ? 1 : 0.72,
        transition: "all 0.4s ease",
      }}>
        <p style={{
          fontFamily: "'Raleway', sans-serif", fontSize: 10, fontWeight: 600,
          letterSpacing: "0.18em", textTransform: "uppercase",
          color: "#de6b19", margin: "0 0 6px 0",
        }}>
          {project.location} · {project.year}
        </p>
        <h3 style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: "clamp(17px, 2vw, 24px)", fontWeight: 800,
          textTransform: "uppercase", letterSpacing: "0.04em",
          color: "#fff", margin: "0 0 10px 0", lineHeight: 1.1,
        }}>
          {project.title}
        </h3>
        <div style={{
          display: "flex", alignItems: "center", gap: 8,
          fontFamily: "'Raleway', sans-serif", fontSize: 10, fontWeight: 700,
          letterSpacing: "0.2em", textTransform: "uppercase",
          color: hov ? ACCENT : "#f64b01",
          transition: "color 0.3s, transform 0.3s",
          transform: hov ? "translateX(0)" : "translateX(-6px)",
        }}>
          <ArrowIcon /> View Project
        </div>
      </div>
    </article>
  );
}

// ─── FILTER TABS ───────────────────────────────────────────────────────────────
function FilterTabs({ active, onChange }) {
  return (
    <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
      {ALL_TAGS.map(tag => {
        const isActive = active === tag;
        return (
          <button key={tag} onClick={() => onChange(tag)}
            style={{
              position: "relative", padding: "7px 18px",
              border: "none", background: "none", cursor: "pointer",
              fontFamily: "'Raleway', sans-serif", fontSize: 10, fontWeight: 700,
              letterSpacing: "0.2em", textTransform: "uppercase",
              color: isActive ? ACCENT : "rgba(255,255,255,0.4)",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.4)"; }}
          >
            {tag}
            <span style={{
              position: "absolute", left: 14, right: 14, bottom: 0,
              height: 2, background: ACCENT, display: "block",
              transform: isActive ? "scaleX(1)" : "scaleX(0)",
              transition: "transform 0.3s ease", transformOrigin: "left",
            }} />
          </button>
        );
      })}
    </div>
  );
}

// ─── MAIN PORTFOLIO ────────────────────────────────────────────────────────────
export default function Portfolio() {
  useFonts();
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter(p => p.category === filter);
  const handleClose = useCallback(() => setSelected(null), []);

  return (
    <>
      <section style={{ width: "100%", background: "#0d0d0d", minHeight: "100vh", fontFamily: "'Raleway', sans-serif" }}>

        {/* HEADER */}
        <div style={{
          padding: "clamp(48px,8vw,80px) clamp(20px,5vw,72px) 0",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          paddingBottom: "clamp(32px,4vw,52px)",
        }}>
          <div style={{
            display: "flex", alignItems: "flex-end",
            justifyContent: "space-between", flexWrap: "wrap", gap: 24, marginBottom: 16,
          }}>
            <div className="py-15">
            
              <h2 style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "clamp(42px,2vw,52px)", fontWeight: 600,
                textTransform: "uppercase", letterSpacing: "0.02em",
                color: "#fff", margin: 0, lineHeight: 0.95,
              }}>
                Our{" "}
                <span style={{
                  color: ACCENT, fontStyle: "italic",
                  fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
                }}>
                  Portfolio
                </span>
              </h2>
            </div>
            <p style={{
              maxWidth: 340, fontSize: 13, lineHeight: 1.85,
              color: "rgba(255, 255, 255, 0.82)", fontWeight: 300, textAlign: "right",
            }}>
              Six landmark projects across four continents — each one a testament to the power of thoughtful, enduring design.
            </p>
          </div>
          <FilterTabs active={filter} onChange={setFilter} />
        </div>

        {/* GRID */}
        <div style={{
          padding: "clamp(24px,4vw,48px) clamp(20px,5vw,72px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 360px), 1fr))",
          gap: "clamp(12px,2vw,20px)",
        }}>
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} onClick={() => setSelected(project)} />
          ))}
          {filtered.length === 0 && (
            <div style={{
              gridColumn: "1/-1", textAlign: "center", padding: "80px 0",
              color: "rgba(255,255,255,0.15)",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 32, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
            }}>
              No projects found
            </div>
          )}
        </div>

        
      </section>

      {selected && <ProjectDetail project={selected} onClose={handleClose} />}
    </>
  );
}