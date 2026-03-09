import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/images/Udbhava Logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // define links with route paths
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
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
        padding: "0 80px 0 120px",
        height: 90,
        background: scrolled
          ? "rgb(6, 6, 6)"
          : "rgb(0, 0, 0)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled
          ? "1px solid rgba(0,0,0,0.06)"
          : "none",
        boxShadow: scrolled
          ? "0 4px 20px rgba(0,0,0,0.06)"
          : "none",
        transition: "background 0.4s, box-shadow 0.4s, border 0.4s",
      }}
    >
      {/* ======================= LOGO ======================= */}
      <div style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
        <img
          src={logo}
          alt="Company Logo"
          style={{
            height: 80, // adjust the size you want
            objectFit: "contain",
          }}
        />
      </div>

      {/* ======================= NAV LINKS ======================= */}
      <div style={{ display: "flex", gap: 46 }}>
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
              transition: "color 0.25s",
            }}
          >
            {lnk.name}
          </Link>
        ))}
      </div>

      {/* ======================= CTA BUTTON ======================= */}
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
    </motion.nav>
  );
}





