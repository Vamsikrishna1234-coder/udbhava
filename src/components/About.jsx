import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import img1 from "../assets/images/office img.png";

function useWindowWidth() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return width;
}

export default function AboutIntro() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const width = useWindowWidth();

  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  const isDesktop = width >= 1024;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);

  useEffect(() => {
    if (isInView) {
      let yearCount = 0;
      const yearInterval = setInterval(() => {
        yearCount += 1;
        setYears(yearCount);
        if (yearCount >= 15) clearInterval(yearInterval);
      }, 80);

      let projectCount = 0;
      const projectInterval = setInterval(() => {
        projectCount += 5;
        setProjects(projectCount);
        if (projectCount >= 200) {
          setProjects(200);
          clearInterval(projectInterval);
        }
      }, 30);

      return () => {
        clearInterval(yearInterval);
        clearInterval(projectInterval);
      };
    }
  }, [isInView]);

  return (
    <section
      ref={containerRef}
      style={{
        position: "relative",
        background: "#fff",
        overflow: "hidden",
        padding: isMobile ? "72px 0 80px" : isTablet ? "90px 0" : "120px 0",
      }}
    >
      {/* Decorative circles */}
      {!isMobile && (
        <>
          <motion.div
            style={{
              position: "absolute",
              top: "10%",
              right: "-5%",
              width: 400,
              height: 400,
              borderRadius: "50%",
              border: "1px solid rgba(216,92,38,0.15)",
              y,
              pointerEvents: "none",
            }}
          />
          <motion.div
            style={{
              position: "absolute",
              bottom: "5%",
              left: "-10%",
              width: 500,
              height: 500,
              borderRadius: "50%",
              border: "1px solid rgba(216,92,38,0.1)",
              y: useTransform(scrollYProgress, [0, 1], [-50, 50]),
              pointerEvents: "none",
            }}
          />
        </>
      )}

      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: isMobile ? "0 20px" : isTablet ? "0 40px" : "0 80px",
          display: "grid",
          gridTemplateColumns: isDesktop ? "1fr 1fr" : "1fr",
          gap: isMobile ? 56 : isTablet ? 60 : 80,
          alignItems: "center",
        }}
      >
        {/* ── LEFT / TEXT SIDE ── */}
        <div>
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 24,
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#d85c26",
                boxShadow: "0 0 12px rgba(216,92,38,0.5)",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: isMobile ? 11 : 13,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#d85c26",
                fontWeight: 600,
              }}
            >
              Welcome to Udbhava Architects
            </span>
          </motion.div>

          {/* Headings */}
          <div style={{ overflow: "hidden", marginBottom: 12 }}>
            <motion.h2
              initial={{ y: "100%" }}
              animate={isInView ? { y: "0%" } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: isMobile ? "clamp(28px, 8vw, 38px)" : "clamp(38px, 4.5vw, 58px)",
                fontWeight: 600,
                lineHeight: 1.2,
                color: "#1a1a1a",
                margin: 0,
              }}
            >
              Crafting Architectural
            </motion.h2>
          </div>

          <div style={{ overflow: "hidden", marginBottom: 28 }}>
            <motion.h2
              initial={{ y: "100%" }}
              animate={isInView ? { y: "0%" } : {}}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: isMobile ? "clamp(28px, 8vw, 38px)" : "clamp(38px, 4.5vw, 50px)",
                fontWeight: 700,
                lineHeight: 1.2,
                color: "#1a1a1a",
                margin: 0,
              }}
            >
              <span style={{ fontStyle: "italic", color: "#d85c26" }}>Excellence</span>{" "}
              Since 2009
            </motion.h2>
          </div>

          {/* Paragraphs */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: isMobile ? 15 : 16,
              lineHeight: 1.85,
              color: "#2c2b2b",
              marginBottom: 20,
              maxWidth: 560,
            }}
          >
            At <strong style={{ color: "#1a1a1a" }}>Udbhava Architects</strong>,
            we believe architecture is more than structures — it's about
            creating meaningful spaces.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.75 }}
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: isMobile ? 14 : 15,
              lineHeight: 1.85,
              color: "#2d2d2d",
              marginBottom: 36,
              maxWidth: 560,
            }}
          >
            Our multidisciplinary team blends innovation, sustainability and aesthetics.
          </motion.p>

          {/* CTA Button */}
          <motion.a
            href="/about"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            whileHover={{ x: 8 }}
            whileTap={{ scale: 0.98 }}
            className="relative inline-flex items-center gap-3 overflow-hidden group"
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              padding: isMobile ? "14px 28px" : "16px 38px",
              border: "1.5px solid #d85c26",
              color: "#d85c26",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              transition: "all 0.3s",
            }}
          >
            <span className="absolute inset-0 w-full h-full bg-[#d85c26] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10 group-hover:text-black transition-colors duration-300">
              More About Us
            </span>
            <motion.span
              className="relative z-10 group-hover:text-black transition-colors duration-300"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.1 }}
            style={{
              display: "flex",
              gap: isMobile ? 28 : 48,
              marginTop: 44,
              paddingTop: 36,
              borderTop: "1px solid rgba(0,0,0,0.08)",
              flexWrap: "wrap",
            }}
          >
            {[
              { value: `${years}+`, label: "Years Experience" },
              { value: `${projects}+`, label: "Projects Completed" },
              { value: "12", label: "Awards Won" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: isMobile ? 36 : 44,
                    fontWeight: 700,
                    color: "#d85c26",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: 11,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#282828",
                    marginTop: 8,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT / IMAGE SIDE ── */}
        <div
          style={{
            position: "relative",
            // On mobile/tablet, add bottom margin to accommodate floating quote box
            marginBottom: isMobile ? 0 : isTablet ? 0 : 0,
            // Extra top space on tablet to accommodate top quote box
            marginTop: isTablet ? 50 : 0,
          }}
        >
          {/* Main image card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: isDesktop ? 50 : 0, y: isDesktop ? 0 : 30 }}
            animate={isInView ? { opacity: 1, scale: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "relative",
              borderRadius: 4,
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
              // On mobile/tablet push right to leave room for floating image on left
              marginLeft: isMobile ? 0 : isTablet ? 40 : 0,
            }}
          >
            <div
              style={{
                width: "100%",
                aspectRatio: isMobile ? "4/3" : "4/5",
                background: "linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)",
                position: "relative",
              }}
            >
              <img
                src={img1}
                alt="Udbhava Architects Office"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(26,26,26,0.4) 0%, transparent 60%)",
                }}
              />

              {/* Est. badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
                style={{
                  position: "absolute",
                  bottom: 24,
                  left: 24,
                  background: "rgba(255,255,255,0.95)",
                  backdropFilter: "blur(8px)",
                  padding: isMobile ? "14px 20px" : "20px 28px",
                  borderRadius: 4,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#999",
                  }}
                >
                  Est. 2009
                </div>
              </motion.div>
            </div>

            {/* Orange corner triangle */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.4 }}
              style={{
                position: "absolute",
                top: -1,
                right: -1,
                width: isMobile ? 56 : 80,
                height: isMobile ? 56 : 80,
                background: "#d85c26",
                clipPath: "polygon(100% 0, 0 0, 100% 100%)",
              }}
            />
          </motion.div>

          {/* Floating small image — left side */}
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              whileHover={{ y: -8, boxShadow: "0 24px 48px rgba(0,0,0,0.2)" }}
              style={{
                position: "absolute",
                bottom: isTablet ? -30 : -40,
                left: isTablet ? -10 : -60,
                width: isTablet ? 160 : 220,
                height: isTablet ? 200 : 280,
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "0 12px 36px rgba(0,0,0,0.2)",
                border: "6px solid #fff",
                transition: "all 0.4s",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&q=90"
                alt="Interior Design"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </motion.div>
          )}

          {/* Quote box */}
          <motion.div
            initial={{ opacity: 0, x: isDesktop ? 30 : 0, y: isDesktop ? 0 : -20 }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.3 }}
            style={{
              position: isDesktop || isTablet ? "absolute" : "relative",
              top: isDesktop ? -30 : isTablet ? -40 : "auto",
              right: isDesktop ? -40 : isTablet ? -20 : "auto",
              marginTop: isDesktop || isTablet ? 0 : 20,
              background: "#1a1a1a",
              color: "#fff",
              padding: isMobile ? "20px 24px" : "24px 32px",
              borderRadius: 4,
              maxWidth: isMobile ? "100%" : 280,
              boxShadow: "0 12px 36px rgba(0,0,0,0.25)",
              zIndex: 10,
            }}
          >
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 48,
                color: "#d85c26",
                lineHeight: 1,
                marginBottom: 12,
              }}
            >
              "
            </div>
            <p
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: isMobile ? 13 : 13,
                lineHeight: 1.7,
                fontStyle: "italic",
                color: "rgba(255,255,255,0.85)",
                margin: 0,
              }}
            >
              Design is not just what it looks like. Design is how it works.
            </p>
            <div
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: 10,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#d85c26",
                marginTop: 12,
              }}
            >
              — Our Philosophy
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}