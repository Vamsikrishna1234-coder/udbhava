// import { useState } from "react";
// import favicon from "../assets/images/tact favicon.png";

// const navLinks = ["Home", "About", "Services", "Portfolio", "Contact"];
// const services = ["Plan & Design", "Architecture", "Interior Design", "Project Planning", "3D Rendering",];
// const marqueeItems = ["Architecture", "Interior Design", "3D Rendering", "Urban Planning", "Commercial", "Residential", "Sustainable Design", "Project Management"];
// const socials = [
//   { label: "IN", name: "Instagram" },
//   { label: "FB", name: "Facebook" },
//   { label: "TW", name: "Twitter / X" },
//   { label: "LI", name: "LinkedIn" },
//   { label: "YT", name: "YouTube" },
// ];
// const contacts = [
//   { type: "Address", value: "12 Blueprint Lane,\nHyderabad, Telangana 500001" },
//   { type: "Phone", value: "+91 98765 43210" },
//   { type: "Email", value: "studio@arcstudio.in" },
//   { type: "Working Hours", value: "Mon – Sat, 9AM – 6PM" },
// ];

// function ArrowIcon() {
//   return (
//     <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
//       <path d="M2 7H12M7 2L12 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );
// }

// function ColLabel({ children }) {
//   return (
//     <div className="flex items-center gap-2 mb-4">
//       <span className="block w-4 h-px bg-[#d85c26]" />
//       <span
//         style={{
//           fontFamily: "Raleway, sans-serif",
//           fontSize: "18px",
//           letterSpacing: "0.25em",
//           textTransform: "uppercase",
//           fontWeight: 600,
//           color: "#fff",
//         }}
//       >
//         {children}
//       </span>
//     </div>
//   );
// }

// function LinkRow({ label }) {
//   const [hov, setHov] = useState(false);
//   return (
//     <li className="border-b border-white/10 first:border-t first:border-white/10">
//       <button
//         onMouseEnter={() => setHov(true)}
//         onMouseLeave={() => setHov(false)}
//         className="w-full flex items-center justify-between py-3 text-left"
//         style={{
//           fontFamily: "Raleway, sans-serif",
//           fontSize: "15px",
//           letterSpacing: "0.09em",
//           textTransform: "uppercase",
//           color: hov ? "#fff" : "rgba(255,255,255,0.65)",
//           paddingLeft: hov ? 8 : 0,
//           transition: "all 0.25s",
//           background: "transparent",
//           border: "none",
//           cursor: "pointer",
//         }}
//       >
//         {label}
//         <span
//           style={{
//             color: "#d85c26",
//             opacity: hov ? 1 : 0,
//             transition: "opacity 0.25s",
//           }}
//         >
//           <ArrowIcon />
//         </span>
//       </button>
//     </li>
//   );
// }

// export default function FooterSection() {
//   const [email, setEmail] = useState("");
//   const [sent, setSent] = useState(false);
//   const [hoveredSocial, setHoveredSocial] = useState(null);

//   const handleSubmit = () => {
//     if (email.trim()) {
//       setSent(true);
//       setTimeout(() => setSent(false), 3000);
//       setEmail("");
//     }
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap');
//         @keyframes marqueeScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
//         .ft-marquee { animation: marqueeScroll 22s linear infinite; }
//       `}</style>

//       <footer style={{ background: "#111010", color: "#fff" }} className="w-full overflow-hidden">

//         {/* Marquee */}
//         <div className="overflow-hidden py-3" style={{ background: "#1E1C1C", borderTop: "1px solid rgba(255,255,255,0.15)", borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
//           <div className="ft-marquee flex w-max whitespace-nowrap">
//             {[...Array(2)].map((_, r) => (
//               <div key={r} className="flex">
//                 {marqueeItems.map((item, i) => (
//                   <span key={i} className="flex items-center px-9"
//                     style={{
//                       fontFamily: "Raleway, sans-serif",
//                       fontSize: "16px",
//                       letterSpacing: "0.2em",
//                       color: "rgba(255,255,255,0.7)"
//                     }}>
//                     {item}
//                     <span className="ml-9 rounded-full" style={{ width: 5, height: 5, background: "#d85c26" }} />
//                   </span>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Main Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-16" style={{ paddingTop: 70 }}>

//           {/* Brand */}
//           <div>
//             <div style={{ fontFamily: "Raleway, sans-serif", fontSize: 34, fontWeight: 700, color: "#fff" }}>
//               UDBHAVA ARCHITECTS
//             </div>

//             <div style={{ fontSize: 12, letterSpacing: "0.35em", color: "rgba(255,255,255,0.7)", marginBottom: 18 }}>
//               Architecture & Interior Design
//             </div>

//             <p style={{
//               fontFamily: "Raleway, sans-serif",
//               fontSize: 17,
//               color: "rgba(255,255,255,0.85)",
//               lineHeight: 1.6,
//               marginTop: 10,
//             }}>
//               Shaping spaces that endure with intention, excellence, and thoughtful design.
//             </p>

//             <div className="flex flex-wrap gap-2 mt-6">
//               {socials.map((s) => (
//                 <button
//                   key={s.label}
//                   onMouseEnter={() => setHoveredSocial(s.label)}
//                   onMouseLeave={() => setHoveredSocial(null)}
//                   style={{
//                     fontFamily: "Raleway, sans-serif",
//                     fontSize: 12,
//                     padding: "6px 14px",
//                     border: `1px solid ${hoveredSocial === s.label ? "#d85c26" : "rgba(255,255,255,0.4)"}`,
//                     color: hoveredSocial === s.label ? "#d85c26" : "#fff",
//                     background: hoveredSocial ? "rgba(216,92,38,0.12)" : "transparent",
//                     transition: "all 0.3s",
//                   }}
//                 >
//                   {hoveredSocial === s.label ? s.name : s.label}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Navigation */}
//           <div>
//             <ColLabel>Navigation</ColLabel>
//             <ul className="flex flex-col">{navLinks.map((l) => <LinkRow key={l} label={l} />)}</ul>
//           </div>

//           {/* Services */}
//           <div>
//             <ColLabel>Services</ColLabel>
//             <ul className="flex flex-col">{services.map((s) => <LinkRow key={s} label={s} />)}</ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <ColLabel>Contact</ColLabel>

//             {contacts.map((c) => (
//               <div key={c.type} className="mb-6">
//                 <p style={{ fontFamily: "Raleway, sans-serif", fontSize: 12, color: "rgba(255,255,255,0.7)", letterSpacing: "0.25em" }}>
//                   {c.type}
//                 </p>

//                 <span
//                   style={{
//                     fontFamily: " sans-serif",
//                     fontSize: 17,
//                     color: "#a1a0a0",
//                     lineHeight: 1.5,
//                     whiteSpace: "pre-line",
//                   }}
//                 >
//                   {c.value}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Ghost Typography */} <div className="overflow-hidden select-none px-16" style={{ marginTop: 5 }}> <span style={{ fontFamily: "'Bebas Neue'", fontSize: "clamp(50px, 14vw, 130px)", color: "transparent", WebkitTextStroke: "1px rgba(192, 185, 185, 0.17)", }}> UDBHAVA ARCHITECTS </span> </div>

//         {/* Bottom Bar */}
//           <div
//             className="border-t border-white py-6 text-center"
//             style={{
//               background: "#0C0B0B",
//               color: "rgba(255,255,255,0.8)",
//               fontFamily: " sans-serif",
//               fontSize: "14px",
//               letterSpacing: "0.05em",
//             }}
//           >
//             © {new Date().getFullYear()} UDBHAVA ARCHITECTS. All Rights Reserved.

//             <a
//               href="https://www.tactadvertising.in/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-1 text-white mx-2 transition"
//               style={{
//                 fontFamily: " sans-serif",
//                 fontWeight: 500,
//               }}
//             >
//               Designed by
//               <img
//                 src={favicon}
//                 alt="TACT Icon"
//                 className="w-4 h-4 object-contain"
//               />
//               TACT Advertising
//             </a>
//           </div>
//       </footer>
//     </>
//   );
// }








import { useState } from "react";
import { Link } from "react-router-dom";
import favicon from "../assets/images/tact favicon.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Contact", path: "/contact" },
];

const services = [
  "Plan & Design",
  "Architecture",
  "Interior Design",
  "Project Planning",
  "3D Rendering",
];

const marqueeItems = [
  "Architecture",
  "Interior Design",
  "3D Rendering",
  "Urban Planning",
  "Commercial",
  "Residential",
  "Sustainable Design",
  "Project Management",
];

const socials = [
  { label: "IN", name: "Instagram", url: "https://instagram.com/" },
  { label: "FB", name: "Facebook", url: "https://facebook.com/" },
  { label: "TW", name: "Twitter / X", url: "https://twitter.com/" },
  { label: "LI", name: "LinkedIn", url: "https://www.linkedin.com/in/udbhava-architects-6a9249239/" },
  { label: "YT", name: "YouTube", url: "https://youtube.com/" },
];

const contacts = [
  { type: "Address", value: "V V Nagar, Habsiguda, \nHyderabad,Telangana-500007" },
  { type: "Phone", value: "+91 98765 43210" },
  { type: "Email", value: "udbhava@architect.com" },
  { type: "Working Hours", value: "Mon – Sat, 9AM – 6:30PM" },
];

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
      <path
        d="M2 7H12M7 2L12 7L7 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ColLabel({ children }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="block w-4 h-px bg-[#d85c26]" />
      <span
        style={{
          fontFamily: "Raleway, sans-serif",
          fontSize: "18px",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          fontWeight: 600,
          color: "#fff",
        }}
      >
        {children}
      </span>
    </div>
  );
}

function LinkRow({ label, path }) {
  const [hov, setHov] = useState(false);

  return (
    <li className="border-b border-white/10 first:border-t first:border-white/10">
      <Link
        to={path}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        className="w-full flex items-center justify-between py-3 text-left"
        style={{
          fontFamily: "Raleway, sans-serif",
          fontSize: "15px",
          letterSpacing: "0.09em",
          textTransform: "uppercase",
          color: hov ? "#fff" : "rgba(255,255,255,0.65)",
          paddingLeft: hov ? 8 : 0,
          transition: "all 0.25s",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textDecoration: "none",
        }}
      >
        {label}

        <span
          style={{
            color: "#d85c26",
            opacity: hov ? 1 : 0,
            transition: "opacity 0.25s",
          }}
        >
          <ArrowIcon />
        </span>
      </Link>
    </li>
  );
}

export default function FooterSection() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const handleSubmit = () => {
    if (email.trim()) {
      setSent(true);
      setTimeout(() => setSent(false), 3000);
      setEmail("");
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap');
        @keyframes marqueeScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .ft-marquee { animation: marqueeScroll 22s linear infinite; }
      `}</style>

      <footer
        style={{ background: "#111010", color: "#fff" }}
        className="w-full overflow-hidden"
      >

        {/* Marquee */}
        <div
          className="overflow-hidden py-3"
          style={{
            background: "#1E1C1C",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            borderBottom: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <div className="ft-marquee flex w-max whitespace-nowrap">
            {[...Array(2)].map((_, r) => (
              <div key={r} className="flex">
                {marqueeItems.map((item, i) => (
                  <span
                    key={i}
                    className="flex items-center px-9"
                    style={{
                      fontFamily: "Raleway, sans-serif",
                      fontSize: "16px",
                      letterSpacing: "0.2em",
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    {item}
                    <span
                      className="ml-9 rounded-full"
                      style={{ width: 5, height: 5, background: "#d85c26" }}
                    />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Main Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-16"
          style={{ paddingTop: 70 }}
        >

          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "Raleway, sans-serif",
                fontSize: 34,
                fontWeight: 700,
                color: "#fff",
              }}
            >
              UDBHAVA ARCHITECTS
            </div>

            <div
              style={{
                fontSize: 12,
                letterSpacing: "0.35em",
                color: "rgba(255,255,255,0.7)",
                marginBottom: 18,
              }}
            >
              Architecture & Interior Design
            </div>

            <p
              style={{
                fontFamily: "Raleway, sans-serif",
                fontSize: 17,
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.6,
                marginTop: 10,
              }}
            >
              Shaping spaces that endure with intention, excellence, and thoughtful design.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredSocial(s.label)}
                onMouseLeave={() => setHoveredSocial(null)}
                style={{
                  fontFamily: "Raleway, sans-serif",
                  fontSize: 12,
                  padding: "6px 14px",
                  border: `1px solid ${
                    hoveredSocial === s.label
                      ? "#d85c26"
                      : "rgba(255,255,255,0.4)"
                  }`,
                  color: hoveredSocial === s.label ? "#d85c26" : "#fff",
                  background: hoveredSocial
                    ? "rgba(216,92,38,0.12)"
                    : "transparent",
                  transition: "all 0.3s",
                  textDecoration: "none"
                }}
              >
                {hoveredSocial === s.label ? s.name : s.label}
              </a>
            ))}
          </div>
          </div>

          {/* Navigation */}
          <div>
            <ColLabel>Navigation</ColLabel>
            <ul className="flex flex-col">
              {navLinks.map((l) => (
                <LinkRow key={l.label} label={l.label} path={l.path} />
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <ColLabel>Services</ColLabel>
            <ul className="flex flex-col">
              {services.map((s) => (
                <LinkRow key={s} label={s} path="/services" />
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <ColLabel>Contact</ColLabel>

            {contacts.map((c) => (
              <div key={c.type} className="mb-6">
                <p
                  style={{
                    fontFamily: "Raleway, sans-serif",
                    fontSize: 12,
                    color: "rgba(255,255,255,0.7)",
                    letterSpacing: "0.25em",
                  }}
                >
                  {c.type}
                </p>

                <span
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 17,
                    color: "#a1a0a0",
                    lineHeight: 1.5,
                    whiteSpace: "pre-line",
                  }}
                >
                  {c.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Ghost Typography */}
        <div className="overflow-hidden select-none px-16" style={{ marginTop: 5 }}>
          <span
            style={{
              fontFamily: "'Bebas Neue'",
              fontSize: "clamp(50px, 14vw, 130px)",
              color: "transparent",
              WebkitTextStroke: "1px rgba(192, 185, 185, 0.17)",
            }}
          >
            UDBHAVA ARCHITECTS
          </span>
        </div>

        {/* Bottom Bar */}
        <div
          className="border-t border-white py-6 text-center"
          style={{
            background: "#0C0B0B",
            color: "rgba(255,255,255,0.8)",
            fontFamily: "sans-serif",
            fontSize: "14px",
            letterSpacing: "0.05em",
          }}
        >
          © {new Date().getFullYear()} UDBHAVA ARCHITECTS. All Rights Reserved.

          <a
            href="https://www.tactadvertising.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-white mx-2 transition"
            style={{ fontFamily: "sans-serif", fontWeight: 500 }}
          >
            Designed by
            <img src={favicon} alt="TACT Icon" className="w-4 h-4 object-contain" />
            TACT Advertising
          </a>
        </div>

      </footer>
    </>
  );
}