import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DraftingCompass, Building2, Sofa, Ruler } from "lucide-react";
import img1 from "../assets/images/img services2.jpg";

const services = [
  {
    id: "01",
    title: "Plan & Design",
    tagline: "Where ideas take shape",
    desc: "We blend creativity and precision to plan spaces that are functional, modern, and deeply intentional. Every layout is carefully strategized to maximize usability, flow, and human connection.",
    subdesc: "Sustainability and long-term efficiency are the foundation of our design philosophy — built to endure, built to inspire.",
    icon: DraftingCompass,
    stat: "340+",
    statLabel: "Projects Designed",
  },
  {
    id: "02",
    title: "Architecture",
    tagline: "Structure meets vision",
    desc: "We create architectural spaces that balance structure, beauty, and bold innovation. Every building reflects refined detailing, spatial clarity, and a strong sense of place.",
    subdesc: "From concept to completion, our architecture improves lifestyle, elevates comfort, and leaves a lasting mark on the urban fabric.",
    icon: Building2,
    stat: "18+",
    statLabel: "Years Experience",
  },
  {
    id: "03",
    title: "Interior Design",
    tagline: "Every detail deliberate",
    desc: "Our interiors combine form and function to create spaces that feel like they were always meant to exist. We curate materials, textures, and light to reflect your personality.",
    subdesc: "Each interior is engineered for comfort and aesthetic excellence — where craftsmanship meets everyday living.",
    icon: Sofa,
    stat: "98%",
    statLabel: "Client Satisfaction",
  },
  {
    id: "04",
    title: "Project Planning",
    tagline: "Precision from day one",
    desc: "We ensure a streamlined process from concept to execution. Managing timelines, budgets, and coordination with the precision of a master builder.",
    subdesc: "Our project planning guarantees high-quality outcomes with timely delivery — no surprises, only results.",
    icon: Ruler,
    stat: "200+",
    statLabel: "Projects Delivered",
  },
];

export default function SpecializationSection() {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  // Auto-advance every 2 seconds
  useEffect(() => {
    const startTimer = () => {
      timerRef.current = setInterval(() => {
        setActive((prev) => (prev + 1) % services.length);
      }, 2500);
    };

    startTimer();

    // Cleanup on unmount
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Reset timer when user manually selects a card
  const handleSelect = (index) => {
    setActive(index);
    
    // Clear existing timer and restart with 2 seconds
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % services.length);
    }, 2500);
  };

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
  };

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundImage:
          "url(" + img1 + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "clamp(20px, 5vw, 80px) 0",
        overflow: "hidden",
        color: "#1a1a1a",
      }}
    >
      {/* Darker overlay for better text contrast on full bg image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(30, 30, 30, 0.41)",
          zIndex: 0,
        }}
      />

      {/* Main content container */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "60px", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                marginBottom: "16px",
              }}
            >
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#d85c26",
                }}
              >
                What We Do
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(40px, 7vw, 45px)",
                fontWeight: 600,
                color: "#fff",
                lineHeight: 1.05,
                textShadow: "0 4px 12px rgba(0,0,0,0.4)",
              }}
            >
              Our <em style={{ color: "#d85c26", fontStyle: "italic" }}>Specializations</em>
            </h2>
          </motion.div>
        </div>

        {/* Horizontal Cards Selector */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          {services.map((sv, i) => {
            const isActive = i === active;
            const Icon = sv.icon;

            return (
              <motion.div
                key={sv.id}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => handleSelect(i)}
                style={{
                  cursor: "pointer",
                  padding: "32px 24px",
                  borderRadius: "20px",
                  background: isActive ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.75)",
                  backdropFilter: "blur(10px)",
                  border: isActive ? "2px solid #d85c26" : "1px solid rgba(255,255,255,0.3)",
                  boxShadow: isActive
                    ? "0 25px 50px rgba(0,0,0,0.25)"
                    : "0 10px 30px rgba(0,0,0,0.15)",
                  textAlign: "center",
                }}
              >
                <div style={{ marginBottom: "20px" }}>
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      margin: "0 auto",
                      borderRadius: "50%",
                      border: `2.5px solid ${isActive ? "#d85c26" : "#d85c26"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: isActive ? "#d85c26" : "rgba(216,92,38,0.1)",
                    }}
                  >
                    <Icon size={32} color={isActive ? "#fff" : "#d85c26"} strokeWidth={1.5} />
                  </div>
                </div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(20px, 2.5vw, 28px)",
                    color: isActive ? "#d85c26" : "#1a1a1a",
                    marginBottom: "8px",
                  }}
                >
                  {sv.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#555",
                    fontWeight: 500,
                  }}
                >
                  {sv.tagline}
                </p>

                {isActive && (
                  <motion.div
                    layoutId="underline"
                    style={{
                      height: "4px",
                      background: "#d85c26",
                      marginTop: "16px",
                      borderRadius: "2px",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Animated Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              background: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(12px)",
              borderRadius: "24px",
              padding: "clamp(40px, 6vw, 30px)",
              boxShadow: "0 40px 100px rgba(0,0,0,0.25)",
              display: "grid",
              gridTemplateColumns: "1fr minmax(300px, 380px)",
              gap: "clamp(40px, 6vw, 80px)",
            }}
          >
            {/* Left: Text */}
            <div>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(19px, 2.2vw, 24px)",
                  fontWeight: 300,
                  color: "#222",
                  lineHeight: 1.7,
                  marginBottom: "24px",
                }}
              >
                {services[active].desc}
              </p>
              <p
                style={{
                  fontSize: "15px",
                  color: "#555",
                  lineHeight: 1.8,
                  marginBottom: "36px",
                }}
              >
                {services[active].subdesc}
              </p>

              <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
                <button
                  style={{
                    padding: "16px 36px",
                    background: "#d85c26",
                    color: "#fff",
                    border: "none",
                    borderRadius: "50px",
                    fontSize: "14px",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#b84e20")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "#d85c26")}
                >
                  Explore Service
                </button>
              </div>
            </div>

            {/* Right: Stat + Quote */}
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                style={{
                  padding: "36px 28px",
                  background: "rgba(255,255,255,0.9)",
                  borderRadius: "18px",
                  textAlign: "center",
                  border: "1px solid #f0e8e0",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(48px, 9vw, 72px)",
                    fontWeight: 700,
                    color: "#d85c26",
                  }}
                >
                  {services[active].stat}
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#777",
                    marginTop: "12px",
                  }}
                >
                  {services[active].statLabel}
                </div>
              </motion.div>

              <div
                style={{
                  padding: "28px",
                  borderLeft: "5px solid #d85c26",
                  background: "rgba(253,249,246,0.8)",
                  borderRadius: "0 16px 16px 0",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "18px",
                    fontStyle: "italic",
                    color: "#444",
                    lineHeight: 1.6,
                  }}
                >
                  “{services[active].tagline}”
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}