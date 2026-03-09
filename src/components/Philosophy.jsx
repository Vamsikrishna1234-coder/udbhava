import React from "react";

const cn = (...inputs) => inputs.filter(Boolean).join(" ");

const values = [
  {
    number: "01",
    title: "Context First",
    subtitle: "Site & Culture",
    desc: "Every project begins with deep listening — to site, climate, history, culture, and the client's unspoken dreams.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314-11.314z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Material Honesty",
    subtitle: "Quality Items",
    desc: "We celebrate raw, local, tactile materials that tell their own story and age gracefully with zero maintenance theater.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Light as Material",
    subtitle: "Experts Choice",
    desc: "Natural light is our primary material. We shape space with it more powerfully than any wall or column.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/>
      </svg>
    ),
  },
  {
    number: "04",
    title: "Restraint Over Excess",
    subtitle: "Ontime Project",
    desc: "We remove until only the essential remains — calm, functional, and quietly poetic.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
        <circle cx="12" cy="12" r="3"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>
    ),
  },
  {
    number: "05",
    title: "Sustainability",
    subtitle: "Green Design",
    desc: "Passive strategies, longevity, and low embodied energy — never green add-ons or performative gestures.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-14 h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
  },
];

export default function Philosophy({ title = "Reason For Choosing Us" }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Jost:wght@300;400;500&display=swap');

        .phil-section {
          background: #0e0e0e;
          font-family: 'Jost', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* Diagonal slash lines background */
        .phil-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            -55deg,
            transparent,
            transparent 60px,
            rgba(255,255,255,0.018) 60px,
            rgba(255,255,255,0.018) 61px
          );
          pointer-events: none;
        }

        .phil-label {
          font-family: 'Jost', sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #d85c26;
          font-weight: 400;
        }

        .phil-heading {
          font-family: 'Raleway', sans-serif;
          font-weight: 700;
          text-transform: uppercase;
          color: #fff;
          font-size: clamp(2.4rem, 5vw, 3.2rem);
          letter-spacing: 0.04em;
          line-height: 1;
        }

        /* Cards container — staggered vertical offset */
        .cards-row {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        /* Each card */
        .phil-card {
          flex: 1;
          background: #161616;
          border: 1px solid rgba(255,255,255,0.07);
          position: relative;
          overflow: hidden;
          padding: 36px 28px 32px;
          cursor: pointer;
          transition: border-color 0.35s ease, box-shadow 0.35s ease;
        }

        /* Stagger: even cards drop down */
        .phil-card:nth-child(even) {
          margin-top: 48px;
        }

        .phil-card:hover {
          border-color: rgba(216,92,38,0.5);
          box-shadow: 0 0 40px rgba(216,92,38,0.08);
        }

        /* Accent bar under icon */
        .card-accent {
          width: 36px;
          height: 2px;
          background: #d85c26;
          margin: 20px 0 18px;
          transition: width 0.4s ease;
        }
        .phil-card:hover .card-accent {
          width: 60px;
        }

        /* Icon wrapper — zoom deep on hover */
        .icon-wrap {
          color: rgba(255,255,255,0.75);
          display: inline-flex;
          transition:
            transform 0.18s cubic-bezier(0.4, 0, 0.2, 1),
            color 0.18s ease;
          transform-origin: center center;
        }
        .phil-card:hover .icon-wrap {
          transform: scale(2.6);
          color: #d85c26;
          animation: zoomPulse 0.32s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes zoomPulse {
          0%   { transform: scale(0.5); }
          55%  { transform: scale(1.3); }
          80%  { transform: scale(1.0); }
          100% { transform: scale(1.2); }
        }

        .icon-zone {
          height: 72px;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        /* Card title */
        .card-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          text-transform: uppercase;
          font-size: clamp(1.1rem, 1.6vw, 1.35rem);
          color: #fff;
          letter-spacing: 0.06em;
          line-height: 1.15;
          margin-bottom: 6px;
          transition: color 0.3s ease;
        }
        .phil-card:hover .card-title { color: #fff; }

        .card-sub {
          font-size: 0.8rem;
          color: #888;
          letter-spacing: 0.05em;
          margin-bottom: 14px;
          font-weight: 300;
        }

        .card-desc {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.38);
          line-height: 1.75;
          font-weight: 300;
          transition: color 0.35s ease;
        }
        .phil-card:hover .card-desc {
          color: rgba(255,255,255,0.58);
        }

        /* Bottom row: arrow btn + big number */
        .card-footer {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-top: 28px;
        }

        .arrow-btn {
          width: 40px; height: 40px;
          border: 1px solid rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.5);
          font-size: 1rem;
          transition: border-color 0.3s, color 0.3s, background 0.3s;
          flex-shrink: 0;
        }
        .phil-card:hover .arrow-btn {
          border-color: #d85c26;
          color: #d85c26;
          background: rgba(216,92,38,0.08);
        }

        .card-number {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: clamp(3rem, 5vw, 4.5rem);
          color: rgba(255,255,255,0.04);
          line-height: 1;
          letter-spacing: -0.02em;
          user-select: none;
          transition: color 0.35s ease;
        }
        .phil-card:hover .card-number {
          color: rgba(216,92,38,0.1);
        }

        /* Top-right corner cut */
        .card-corner {
          position: absolute;
          top: 0; right: 0;
          width: 0; height: 0;
          border-style: solid;
          border-width: 0 32px 32px 0;
          border-color: transparent #0e0e0e transparent transparent;
          transition: border-color 0.3s;
        }

        @media (max-width: 768px) {
          .cards-row { flex-direction: column; }
          .phil-card:nth-child(even) { margin-top: 0; }
        }
      `}</style>

      <section className="phil-section py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div style={{ maxWidth: "1300px", margin: "0 auto" }}>

          {/* Header */}
          <div className="text-center mb-16">
            {/* Brand icon */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
              <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="26" cy="10" r="5" fill="#d85c26"/>
                <line x1="26" y1="15" x2="26" y2="40" stroke="#d85c26" strokeWidth="2.5"/>
                <line x1="12" y1="24" x2="40" y2="24" stroke="#d85c26" strokeWidth="2.5"/>
                <line x1="12" y1="24" x2="26" y2="42" stroke="#d85c26" strokeWidth="2.5"/>
                <line x1="40" y1="24" x2="26" y2="42" stroke="#d85c26" strokeWidth="2.5"/>
                <circle cx="12" cy="24" r="3" fill="#d85c26"/>
                <circle cx="40" cy="24" r="3" fill="#d85c26"/>
                <circle cx="26" cy="42" r="3" fill="#d85c26"/>
              </svg>
            </div>
            <p className="phil-label mb-3">Advantages &amp; Features</p>
            <h2 className="phil-heading">{title}</h2>
          </div>

          {/* Cards */}
          <div className="cards-row">
            {values.map((v, i) => (
              <div className="phil-card" key={i}>
                <div className="card-corner" />

                {/* Icon */}
                <div className="icon-zone">
                  <div className="icon-wrap">{v.icon}</div>
                </div>

                {/* Accent bar */}
                <div className="card-accent" />

                {/* Text */}
                <h3 className="card-title">{v.title}</h3>
                <p className="card-sub">{v.subtitle}</p>
                <p className="card-desc">{v.desc}</p>

                {/* Footer */}
                <div className="card-footer">
                  <div className="arrow-btn">›</div>
                  <span className="card-number">{v.number}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}