import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/images/Udbhava Logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  const isMobile = windowWidth < 900;

  const gapSize =
    windowWidth > 1200 ? 46 :
    windowWidth > 1024 ? 34 :
    windowWidth > 900  ? 24 :
    0;

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: isMobile ? "0 20px" : "0 80px 0 120px",
          height: 90,
          background: scrolled ? "rgb(6,6,6)" : "rgb(0,0,0)",
          backdropFilter: "blur(12px)",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
          boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.06)" : "none",
          transition: "background 0.4s, box-shadow 0.4s, border 0.4s",
        }}
      >
        {/* LOGO */}
        <div style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="Company Logo"
            style={{ height: 80, objectFit: "contain" }}
          />
        </div>

        {/* DESKTOP NAV */}
        {!isMobile && (
          <div style={{ display: "flex", gap: gapSize }}>
            {navLinks.map((lnk) => (
              <Link
                key={lnk.name}
                to={lnk.path}
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#ffffff",
                  textDecoration: "none",
                }}
              >
                {lnk.name}
              </Link>
            ))}
          </div>
        )}

        {/* DESKTOP CTA */}
        {!isMobile && (
          <button
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              background: "#d85c26",
              color: "#fff",
              border: "none",
              padding: "14px 32px",
              cursor: "pointer",
            }}
          >
            Get Consultation
          </button>
        )}

        {/* MOBILE HAMBURGER */}
        {isMobile && (
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              width: 28,
              height: 22,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              cursor: "pointer",
              zIndex: 300,
            }}
          >
            {/* Animate hamburger → X */}
            <motion.span
              animate={menuOpen
                ? { rotate: 45, y: 9.5, width: "100%" }
                : { rotate: 0, y: 0, width: "100%" }
              }
              transition={{ duration: 0.3 }}
              style={{ height: 3, background: "#fff", display: "block", transformOrigin: "center" }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              style={{ height: 3, background: "#fff", display: "block" }}
            />
            <motion.span
              animate={menuOpen
                ? { rotate: -45, y: -9.5, width: "100%" }
                : { rotate: 0, y: 0, width: "100%" }
              }
              transition={{ duration: 0.3 }}
              style={{ height: 3, background: "#fff", display: "block", transformOrigin: "center" }}
            />
          </div>
        )}
      </motion.nav>

      {/* MOBILE SLIDE-IN MENU FROM LEFT */}
      <AnimatePresence>
        {menuOpen && isMobile && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.55)",
                zIndex: 198,
              }}
            />

            {/* Slide panel */}
            <motion.div
              key="drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                width: "75%",
                maxWidth: 300,
                background: "#0a0a0a",
                zIndex: 199,
                display: "flex",
                flexDirection: "column",
                paddingTop: 110,
                paddingBottom: 40,
                paddingLeft: 32,
                paddingRight: 32,
              }}
            >
              {/* Orange accent line at top */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: 3,
                background: "#d85c26",
              }} />

              {/* Nav Links */}
              <div style={{ display: "flex", flexDirection: "column", gap: 0, flex: 1 }}>
                {navLinks.map((lnk, i) => (
                  <motion.div
                    key={lnk.name}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12 + i * 0.07, duration: 0.35, ease: "easeOut" }}
                  >
                    <Link
                      to={lnk.path}
                      onClick={() => setMenuOpen(false)}
                      style={{
                        display: "block",
                        fontFamily: "'Raleway', sans-serif",
                        fontSize: 13,
                        fontWeight: 600,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "#fff",
                        textDecoration: "none",
                        padding: "18px 0",
                        borderBottom: "1px solid rgba(255,255,255,0.07)",
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = "#d85c26"}
                      onMouseLeave={e => e.currentTarget.style.color = "#fff"}
                    >
                      {lnk.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.35 }}
              >
                <button
                  style={{
                    width: "100%",
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    background: "#d85c26",
                    color: "#fff",
                    border: "none",
                    padding: "15px 28px",
                    cursor: "pointer",
                    marginTop: 32,
                  }}
                >
                  Get Consultation
                </button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}