import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/images/ig2.jpg";
import img2 from "../assets/images/ig1.jpg";
import img3 from "../assets/images/ig4.jpg";

// Google Fonts loader
function useFonts() {
  useEffect(() => {
    if (document.getElementById("hero-fonts")) return;
    const link = document.createElement("link");
    link.id = "hero-fonts";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Raleway:wght@300;400;500;600;700&display=swap";
    document.head.appendChild(link);
  }, []);
}

// ─── SLIDE DATA ────────────────────────────────────────────────────────────────
const SLIDES = [
  {
    subtitle: "FROM CONCEPT TO BETTER LIVING",
    title: "A DESIGN\nWELL SIMPLIFIED.",
    desc: "We creating lasting impressions through architecture design.",
    quote: "MORE THAN 2,000 PROJECTS COMPLETED",
    image: img1,
  },
  {
    subtitle: "INNOVATIVE ARCHITECTURAL VISION",
    title: "BUILDING\nTOMORROW TODAY.",
    desc: "Transforming visions into architectural masterpieces with sustainable excellence.",
    quote: "15 YEARS OF ARCHITECTURAL EXCELLENCE",
    image: img2,
  },
  {
    subtitle: "WHERE FUNCTION MEETS BEAUTY",
    title: "SPACES THAT\nINSPIRE LIVING.",
    desc: "Interior solutions blending aesthetics and functionality into meaningful environments.",
    quote: "AWARD-WINNING DESIGN STUDIO",
    image: img3,
  },
];

// ─── ICON COMPONENTS ───────────────────────────────────────────────────────────
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 12a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1.84h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);
const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="17" height="17">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const PinterestIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
  </svg>
);

// ─── SIDEBAR ICON ITEM ─────────────────────────────────────────────────────────
// Sidebar width NEVER stretches. Label floats outside as absolute overlay to the right.
function SidebarItem({ icon, href, label }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <a
        href={href || "#"}
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 79,
          height: 52,
          color: hovered ? "#d85c26" : "#888",
          background: hovered ? "#fdf8f3" : "#fff",
          borderLeft: `2px solid ${hovered ? "#d85c26" : "transparent"}`,
          transition: "all 0.2s ease",
          textDecoration: "none",
          cursor: "pointer",
        }}
      >
        {/* Icon spins 360° on hover — sidebar width stays fixed */}
        <motion.div
          animate={{ rotate: hovered ? 360 : 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
        >
          {icon}
        </motion.div>
      </a>

      {/* Label floats OUTSIDE the sidebar as absolute overlay */}
      <AnimatePresence>
        {hovered && (
          <motion.span
            key="label"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.18 }}
            style={{
              position: "absolute",
              left: "100%",
              top: "15%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
              whiteSpace: "nowrap",
              background: "#fff",
              color: "#d85c26",
              fontSize: 12,
              fontWeight: 700,
              fontFamily: "'Raleway', sans-serif",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "8px 18px",
              boxShadow: "3px 3px 14px rgba(0,0,0,0.13)",
              borderLeft: "2px solid #c8922a",
              zIndex: 9999,
            }}
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── DIVIDER ───────────────────────────────────────────────────────────────────
function SidebarDivider() {
  return (
    <div style={{ width: 90, height: 20, background: "#e8e8e8" }} />
  );
}

// ─── LEFT SIDEBAR ──────────────────────────────────────────────────────────────
function LeftSidebar() {
  return (
    <div style={{
      position: "absolute",
      left: 0,
      top: 480,
      height: "50%",
      zIndex: 10,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      background: "#fff",
      boxShadow: "2px 0 24px rgba(0,0,0,0.10)",
    }}>
      <SidebarItem icon={<PhoneIcon />}    href="tel:+1234567890"           label="+1 234 567 890"   />
      <SidebarDivider />
      <SidebarItem icon={<EmailIcon />}    href="mailto:hello@habikon.com"  label="hello@habikon.com" />
      <SidebarDivider />
      <SidebarItem icon={<FacebookIcon />} href="https://facebook.com"      label="Facebook"         />
      <SidebarDivider />
      <SidebarItem icon={<TwitterIcon />}  href="https://twitter.com"       label="Twitter"          />
      <SidebarDivider />
      <SidebarItem icon={<InstagramIcon />}href="https://instagram.com"     label="Instagram"        />
      <SidebarDivider />
      <SidebarItem icon={<PinterestIcon />}href="https://pinterest.com"     label="Pinterest"        />
    </div>
  );
}

// ─── ARROW ICONS ───────────────────────────────────────────────────────────────
const ArrowUpIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <polyline points="18 15 12 9 6 15" />
  </svg>
);
const ArrowDownIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// ─── RIGHT SIDEBAR ─────────────────────────────────────────────────────────────
function RightSidebar({ quote, onPrev, onNext }) {
  return (
    <div style={{
      position: "absolute",
      right: 0,
      top: 0,
      height: "100%",
      zIndex: 100,
      width: 90,
      background: "#fff",
      boxShadow: "-2px 0 24px rgba(0,0,0,0.10)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
    }}>
      {/* Top decorative dark square with gold asterisk */}
      <div style={{
        width: 56,
        height: 56,
        background: "#000000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}>
        <svg viewBox="0 0 24 24" width="20" height="20">
          <line x1="12" y1="2" x2="12" y2="22" stroke="#c8922a" strokeWidth="2" strokeLinecap="round" />
          <line x1="2" y1="12" x2="22" y2="12" stroke="#c8922a" strokeWidth="2" strokeLinecap="round" />
          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" stroke="#c8922a" strokeWidth="2" strokeLinecap="round" />
          <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" stroke="#c8922a" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* Top accent line */}
      <div style={{ flex: 1, width: 2, background: "#d85b26db", maxHeight: 100 }} />

      {/* Vertical quote — animates when slide changes */}
      <div style={{
        writingMode: "vertical-rl",
        transform: "rotate(180deg)",
        padding: "16px 0",
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <AnimatePresence mode="wait">
          <motion.span
            key={quote}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#555",
              whiteSpace: "nowrap",
            }}
          >
            {quote}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Bottom accent line */}
      <div style={{ flex: 1, width: 2, background: "#d85b26d6", maxHeight: 80 }} />

      {/* ▲ dot ▼ navigation */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>

        <button
          onClick={onPrev}
          style={{
            width: 66, height: 44,
            border: "none", borderTop: "1px solid #e8e8e8",
            background: "#fff", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#020202", transition: "all 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "#fdf8f3"; e.currentTarget.style.color = "#c8922a"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "#fff";    e.currentTarget.style.color = "#020202"; }}
        >
          <ArrowUpIcon />
        </button>

        <div style={{
          width: 66, height: 26,
          display: "flex", alignItems: "center", justifyContent: "center",
          borderTop: "1px solid #e8e8e8", borderBottom: "1px solid #e8e8e8",
        }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", border: "1.5px solid #aaa" }} />
        </div>

        <button
          onClick={onNext}
          style={{
            width: 66, height: 44,
            border: "none", borderBottom: "1px solid #e8e8e8",
            background: "#fff", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#000000", transition: "all 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "#fdf8f3"; e.currentTarget.style.color = "#c8922a"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "#fff";    e.currentTarget.style.color = "#000000"; }}
        >
          <ArrowDownIcon />
        </button>

      </div>
    </div>
  );
}

// ─── SCROLL DOWN INDICATOR ─────────────────────────────────────────────────────
function ScrollDown() {
  return (
    <div style={{
      position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)",
      zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
    }}>
      <div style={{
        width: 26, height: 40,
        border: "2px solid rgba(255,255,255,0.6)", borderRadius: 13,
        display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: 6,
      }}>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: 3, height: 8, background: "rgba(255,255,255,0.8)", borderRadius: 2 }}
        />
      </div>
      <span style={{
        fontFamily: "'Raleway', sans-serif", fontSize: 10, fontWeight: 600,
        letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)",
      }}>
        Scroll Down
      </span>
    </div>
  );
}

// ─── MAIN HERO ─────────────────────────────────────────────────────────────────
export default function HeroSection() {
  useFonts();
  const [index, setIndex] = useState(0);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  // Manual navigation — clicking resets the natural sequence from that point
  const goNext = () => setIndex(i => (i + 1) % SLIDES.length);
  const goPrev = () => setIndex(i => (i - 1 + SLIDES.length) % SLIDES.length);

  const slide = SLIDES[index];

  return (
    <section style={{
      position: "relative", height: "100vh", width: "100%",
      overflow: "hidden", background: "#111", fontFamily: "'Raleway', sans-serif",
    }}>

      {/* ── BACKGROUND IMAGE ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          style={{ position: "absolute", inset: 0 }}
        >
          <img
            src={slide.image} alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to right, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.40) 60%, rgba(0,0,0,0.25) 100%)",
          }} />
        </motion.div>
      </AnimatePresence>

      {/* ── MAIN TEXT CONTENT ── */}
      <div style={{
        position: "relative", zIndex: 10,
        height: "100%", display: "flex", flexDirection: "column", justifyContent: "center",
        paddingLeft: "calc(86px + 7%)", paddingRight: "calc(56px + 4%)", maxWidth: 820,
      }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Subtitle + orange underline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }} style={{ marginBottom: 20 }}
            >
              <span style={{
                fontFamily: "'Raleway', sans-serif", fontSize: 11, fontWeight: 700,
                letterSpacing: "0.25em", textTransform: "uppercase", color: "#fff",
                display: "block", marginBottom: 10,
              }}>
                {slide.subtitle}
              </span>
              <div style={{ width: 160, height: 2, background: "#d54c23" }} />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "clamp(32px, 5vw, 50px)", fontWeight: 600, lineHeight: 1.05,
                color: "#fff", margin: "0 0 28px 0",
                textTransform: "uppercase", letterSpacing: "0.02em", whiteSpace: "pre-line",
              }}
            >
              {slide.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.7 }}
              style={{
                fontFamily: "'Raleway', sans-serif", fontSize: 16, fontWeight: 400,
                lineHeight: 1.75, color: "rgba(255,255,255,0.82)", marginBottom: 44, maxWidth: 480,
              }}
            >
              {slide.desc}
            </motion.p>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.7 }}
              whileHover={{ scale: 1.02 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 14,
                background: "transparent", border: "2px solid rgba(255,255,255,0.7)",
                padding: "15px 36px", fontSize: 11, fontFamily: "'Raleway', sans-serif",
                fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase",
                color: "#fff", cursor: "pointer", width: "fit-content", transition: "all 0.25s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "#d85c26"; e.currentTarget.style.borderColor = "#d85c26"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.7)"; }}
            >
              <span style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                width: 24, height: 1, background: "rgba(255,255,255,0.8)", position: "relative",
              }}>
                <span style={{
                  position: "absolute", right: -1, top: -4, width: 0, height: 0,
                  borderLeft: "6px solid rgba(255,255,255,0.8)",
                  borderTop: "4px solid transparent", borderBottom: "4px solid transparent",
                }} />
              </span>
              MORE ABOUT US
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── SLIDE COUNTER bottom-right ── */}
      <div style={{
        position: "absolute", bottom: 28, right: 80, zIndex: 10,
        fontFamily: "'Raleway', sans-serif", letterSpacing: "0.12em",
        color: "rgba(255,255,255,0.55)", fontSize: 13,
        display: "flex", alignItems: "baseline", gap: 2,
      }}>
        <span style={{ color: "#fff", fontWeight: 700, fontSize: 28, lineHeight: 1 }}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <span style={{ fontSize: 13, margin: "0 3px" }}>/</span>
        <span>{String(SLIDES.length).padStart(2, "0")}</span>
      </div>

      {/* ── SCROLL DOWN ── */}
      <ScrollDown />

      {/* ── SIDEBARS ── */}
      <LeftSidebar />
      <RightSidebar quote={slide.quote} onPrev={goPrev} onNext={goNext} />
    </section>
  );
}