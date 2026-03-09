import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

const milestones = [
  {
    year: "2016",
    tag: "The Beginning",
    title: "Studio Founded",
    desc: "Udbhava was born in a small Hyderabad studio — two architects, one shared conviction: that spaces should emerge from their context, never be imposed upon it.",
    stat: "02",
    statLabel: "Founders",
    side: "left",
  },
  {
    year: "2018",
    tag: "First Recognition",
    title: "Award-Winning Debut",
    desc: "Our first residential project, a laterite courtyard home in Secunderabad, won the South India Architecture Award for emerging practices. Proof that restraint speaks louder than spectacle.",
    stat: "01",
    statLabel: "Award Won",
    side: "right",
  },
  {
    year: "2020",
    tag: "Growth",
    title: "Team of 7 Designers",
    desc: "We expanded deliberately — not rapidly. Each new voice brought a different fluency: structural engineering, landscape, lighting, heritage conservation. A quiet, powerful ensemble.",
    stat: "07",
    statLabel: "Designers",
    side: "left",
  },
  {
    year: "2021",
    tag: "Hospitality",
    title: "Into Boutique Hotels",
    desc: "Udbhava entered the hospitality sector with a 12-key boutique retreat in Araku Valley — where the building dissolves into the forest and guests forget they are indoors.",
    stat: "12",
    statLabel: "Keys Designed",
    side: "right",
  },
  {
    year: "2023",
    tag: "Expansion",
    title: "4 Cities, 120+ Projects",
    desc: "From Hyderabad to Vizag, Bengaluru to Kochi — Udbhava's language of honest materials and generous light found resonance across South India's diverse climates and cultures.",
    stat: "120+",
    statLabel: "Projects",
    side: "left",
  },
  {
    year: "2025",
    tag: "Now",
    title: "Origin, Always",
    desc: "Eight years in, we return daily to the same question: what does this place want to become? Udbhava — origin — remains both our name and our only method.",
    stat: "∞",
    statLabel: "Stories Ahead",
    side: "right",
  },
];

function MilestoneCard({ m, index }) {
  const [ref, inView] = useInView(0.12);
  const isLeft = m.side === "left";

  return (
    <div
      ref={ref}
      className={`journey-row ${isLeft ? "row-left" : "row-right"} ${inView ? "visible" : ""}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      {/* YEAR */}
      <div className={`year-col ${isLeft ? "year-left" : "year-right"}`}>
        <span className="year-text">{m.year}</span>
      </div>

      {/* SPINE DOT */}
      <div className="spine-col">
        <div className={`spine-dot ${inView ? "dot-active" : ""}`}>
          <div className="dot-inner" />
        </div>
      </div>

      {/* CARD */}
      <div className={`card-col ${isLeft ? "card-right" : "card-left"}`}>
        <div className="journey-card">
          <div className="card-corner" />
          <div className="jcard-header">
            <span className="jtag">{m.tag}</span>
            <span className="jstat-val">
              {m.stat} <span className="jstat-label">{m.statLabel}</span>
            </span>
          </div>

          <h3 className="jcard-title">{m.title}</h3>
          <div className="jcard-accent" />
          <p className="jcard-desc">{m.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function OurJourney() {
  const [headerRef, headerInView] = useInView(0.1);

  return (
    <>
      <style>{`
        .journey-section {
          background: #ffffff !important;  /* WHITE BG FIXED */
          padding: 100px 40px;
          position: relative;
          overflow: hidden;
          font-family: 'Jost', sans-serif;
        }

        /* WATERMARK */
        .bg-watermark {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          font-size: clamp(6rem, 18vw, 16rem);
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          color: transparent;
          -webkit-text-stroke: 1px rgba(0,0,0,0.04);
          pointer-events: none;
          user-select: none;
        }

        /* HEADER */
        .j-heading {
          color: #111;
          font-family: 'Barlow Condensed';
          font-weight: 800;
          text-transform: uppercase;
          font-size: clamp(2.8rem, 5vw, 4rem);
        }

        .j-subhead {
          color: #444;
        }

        /* SPINE LINE */
        .spine-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(216,92,38,0.4);
          transform: translateX(-50%);
        }

        /* ROWS */
        .journey-row {
          display: grid;
          grid-template-columns: 1fr 60px 1fr;
          align-items: flex-start;
          margin-bottom: 50px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.9s cubic-bezier(0.22,1,0.36,1);
        }
        .journey-row.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* YEAR */
        .year-text {
          font-family: 'Barlow Condensed';
          font-size: clamp(2rem, 3vw, 3rem);
          font-weight: 800;
          color: #d85c26;
        }

        /* DOT */
        .spine-dot {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(216,92,38,0.4);
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .dot-inner {
          width: 6px;
          height: 6px;
          background: #d85c26;
          border-radius: 50%;
        }

        /* CARD */
        .journey-card {
          background: #fff;
          border: 1px solid #eee;
          padding: 28px;
          transition: 0.3s;
        }
        .journey-card:hover {
          border-color: #d85c26;
          box-shadow: 0 8px 35px rgba(0,0,0,0.08);
        }

        .jcard-title {
          font-family: 'Barlow Condensed';
          font-size: 1.4rem;
          font-weight: 700;
          color: #111;
          text-transform: uppercase;
        }

        .jcard-desc {
          color: #444;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        /* MOBILE FIX: FULL WIDTH CONTENT */
        @media (max-width: 768px) {
          .journey-row {
            grid-template-columns: 0 40px 1fr;
          }
          .year-col { display: none; } /* remove year column */
          .card-left, .card-right {
            padding: 0;
          }
        }
      `}</style>

      <section className="journey-section">
        <span className="bg-watermark">Journey</span>

        {/* HEADER */}
        <div className="journey-header" ref={headerRef}>
          <h2 className={`j-heading fade-up ${headerInView ? "visible" : ""}`}>
            Our Journey
          </h2>

          <p className={`j-subhead fade-up d1 ${headerInView ? "visible" : ""}`}>
            Eight years of listening, building, and refining — one honest space at a time.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="timeline-wrap" style={{ position: "relative", maxWidth: "1100px", margin: "0 auto" }}>
          <div className="spine-line" />

          {milestones.map((m, i) => (
            <MilestoneCard key={m.year} m={m} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}