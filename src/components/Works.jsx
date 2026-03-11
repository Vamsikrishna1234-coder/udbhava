
import { useState, useEffect } from "react";
import { DraftingCompass } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

// 4 PROJECTS EACH CATEGORY
const projects = {
  building: [
    {
      id: 1,
      title: "MODERN SKYSCRAPER",
      category: "BUILDING",
      sub: "ARCHITECTURE",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    },
    {
      id: 2,
      title: "NEXUS TOWER",
      category: "BUILDING",
      sub: "ARCHITECTURE",
      img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    },
    {
      id: 3,
      title: "URBAN LUXURY TOWER",
      category: "BUILDING",
      sub: "MODERN",
      img: "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?w=800&q=80",
    },
    {
      id: 4,
      title: "SUNSET TALLEST",
      category: "BUILDING",
      sub: "ARCHITECTURE",
      img: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800&q=80",
    },
  ],
  commercial: [
    {
      id: 5,
      title: "3D RENDER HOUSE",
      category: "COMMERCIAL",
      sub: "ARCHITECTURE",
      img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    },
    {
      id: 6,
      title: "EUROPEAN COMPLEX",
      category: "COMMERCIAL",
      sub: "ARCHITECTURE",
      img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    },
    {
      id: 7,
      title: "BLUE HORIZON",
      category: "COMMERCIAL",
      sub: "INTERIOR",
      img: "https://images.unsplash.com/photo-1554435493-93422e8220c8?w=800&q=80",
    },
    {
      id: 8,
      title: "GRAND BUSINESS CENTER",
      category: "COMMERCIAL",
      sub: "CORPORATE",
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
    },
  ],
  residential: [
    {
      id: 9,
      title: "APARTMENT BUILDING",
      category: "RESIDENTIAL",
      sub: "INTERIOR",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    },
    {
      id: 10,
      title: "VILLA SERENA",
      category: "RESIDENTIAL",
      sub: "INTERIOR",
      img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
    },
    {
      id: 11,
      title: "GARDEN RESIDENCE",
      category: "RESIDENTIAL",
      sub: "PLANNING",
      img: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=800&q=80",
    },
    {
      id: 12,
      title: "SUNSET HILLS VILLA",
      category: "RESIDENTIAL",
      sub: "LUXURY",
      img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&q=80",
    },
  ],
};

const tabs = [
  { label: "BUILDING", value: "building" },
  { label: "COMMERCIAL", value: "commercial" },
  { label: "RESIDENTIAL", value: "residential" },
];

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

export default function LatestWorksSection() {
  const [activeTab, setActiveTab] = useState("building");
  const width = useWindowWidth();

  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;

  // Card height: tall on desktop, shorter on tablet, portrait-friendly on mobile
  const cardHeight = isMobile ? "260px" : isTablet ? "420px" : "650px";

  // Horizontal padding
  const hPad = isMobile ? "16px" : "40px";

  return (
    <section className="bg-white py-20">
      {/* ── Header ── */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-end",
          padding: `0 ${hPad}`,
          marginBottom: isMobile ? "24px" : "48px",
          gap: "16px",
        }}
      >
        <div>
          <DraftingCompass size={isMobile ? 28 : 40} style={{ color: "#d85c26" }} />
          <p
            style={{
              fontSize: isMobile ? "14px" : "20px",
              color: "#111",
              marginTop: "8px",
              letterSpacing: "0.05em",
              marginBottom: "4px",
            }}
          >
            Our Works
          </p>
          <h2
            style={{
              fontSize: isMobile ? "22px" : "clamp(26px, 4vw, 36px)",
              color: "#d85c26",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            Latest From Work
          </h2>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: isMobile ? "0px" : "4px",
            flexWrap: "wrap",
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              style={{
                position: "relative",
                padding: isMobile ? "8px 12px" : "8px 20px",
                fontWeight: 700,
                fontSize: isMobile ? "10px" : "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: activeTab === tab.value ? "#d85c26" : "#888",
                transition: "color 0.2s",
              }}
            >
              {tab.label}
              <span
                style={{
                  position: "absolute",
                  left: isMobile ? "8px" : "16px",
                  right: isMobile ? "8px" : "16px",
                  bottom: 0,
                  height: "2px",
                  backgroundColor: "#d85c26",
                  transform: activeTab === tab.value ? "scaleX(1)" : "scaleX(0)",
                  transition: "transform 0.3s",
                  transformOrigin: "left",
                }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* ── Grid ── */}
      <div
        style={{
          display: "grid",
          // Mobile: 2 cols, Tablet: 2 cols, Desktop: 4 cols
          gridTemplateColumns: isMobile
            ? "repeat(2, 1fr)"
            : isTablet
            ? "repeat(2, 1fr)"
            : "repeat(4, 1fr)",
          gap: isMobile ? "10px" : "16px",
          padding: `0 ${hPad}`,
        }}
      >
        {projects[activeTab].map((item) => (
          <div
            key={item.id}
            className="group"
            style={{
              position: "relative",
              height: cardHeight,
              overflow: "hidden",
              borderRadius: isMobile ? "8px" : "10px",
            }}
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              decoding="async"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.7s ease",
                display: "block",
              }}
              className="group-hover:scale-110"
            />

            {/* Black falling overlay */}
            <div
              className="
                absolute inset-0 bg-black/75
                translate-y-[-100%]
                group-hover:translate-y-0
                transition-all duration-700 ease-out
              "
            />

            {/* Center round button — hidden on mobile, shown on hover on tablet+ */}
            {!isMobile && (
              <div
                className="
                  absolute inset-0 flex items-center justify-center z-30
                  opacity-0 scale-75
                  group-hover:opacity-100 group-hover:scale-100
                  transition-all duration-500
                "
              >
                <Link to="/portfolio">
                <button
                  style={{
                    width: isTablet ? "96px" : "128px",
                    height: isTablet ? "96px" : "128px",
                    borderRadius: "50%",
                    backgroundColor: "#d85c26",
                    color: "#fff",
                    fontSize: "11px",
                    fontWeight: 800,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    lineHeight: 1.4,
                    padding: "0 12px",
                  }}
                >
                  View<br />Project
                </button>
              </Link>
              </div>
            )}

            {/* Mobile tap overlay — simple "View" label */}
            {isMobile && (
              <div
                className="
                  absolute inset-0 flex items-center justify-center z-30
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-400
                "
              >
                <span
                  style={{
                    background: "#d85c26",
                    color: "#fff",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    padding: "8px 16px",
                    borderRadius: "20px",
                  }}
                >
                  View
                </span>
              </div>
            )}

            {/* Bottom Info */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: isMobile ? "16px" : "40px",
                right: 0,
                padding: isMobile ? "12px 12px 12px 0" : "20px 20px 20px 0",
                zIndex: 20,
              }}
            >
              <div
                style={{
                  width: "28px",
                  height: "2px",
                  backgroundColor: "#d85c26",
                  marginBottom: isMobile ? "6px" : "8px",
                }}
              />
              <h3
                style={{
                  color: "#fff",
                  fontSize: isMobile ? "11px" : "16px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  margin: "0 0 4px 0",
                  lineHeight: 1.2,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: isMobile ? "9px" : "11px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                {item.sub}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}