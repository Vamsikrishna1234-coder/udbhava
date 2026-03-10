import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.1) {
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

const teamMembers = [
  {
    name: "Yegireddi Vikram",
    role: "Founder & Principal Architect",
    exp: "15+ yrs",
    specialty: "Contextual Design",
    bio: "15 years shaping contextual architecture across South India — driven by regional materials, passive design, and client-centered storytelling.",
    img: "https://media.architecturaldigest.com/photos/6376a07f55499f704ecdba59/16:9/w_2560%2Cc_limit/Sam%2520Olbekson%2520portrait.jpg",
    social: { li: "#", ig: "#" },
  },
  {
    name: "Aishwarya Rao",
    role: "Senior Architect",
    exp: "10+ yrs",
    specialty: "Biophilic Interiors",
    bio: "Specialises in residential and hospitality projects with a focus on biophilic integration and sustainable material detailing.",
    img: "https://media.cnn.com/api/v1/images/stellar/prod/hires-frida-escobedo-c-alex-trebus-001-v2.jpg?c=original",
    social: { li: "#", ig: "#" },
  },
  {
    name: "Rahul Mehta",
    role: "Project Architect",
    exp: "08+ yrs",
    specialty: "Adaptive Reuse",
    bio: "Expert in adaptive reuse and urban interventions — bringing technical precision and creative problem-solving to every site condition.",
    img: "https://media.architecturaldigest.com/photos/6376a07f55499f704ecdba59/16:9/w_2560%2Cc_limit/Sam%2520Olbekson%2520portrait.jpg",
    social: { li: "#", ig: "#" },
  },
  {
    name: "Priya Nair",
    role: "Design Associate",
    exp: "04+ yrs",
    specialty: "Light & Materiality",
    bio: "Young talent focused on materiality, light studies, and physical model-making — turning abstract concepts into tactile spatial realities.",
    img: "https://media.admiddleeast.com/photos/66bf0dbc6a98315186d18522/16:9/w_1280,c_limit/AD0824_Hero_banner_11_Women_Architects_2.jpg",
    social: { li: "#", ig: "#" },
  },
];

function TeamCard({ member, index }) {
  const [ref, inView] = useInView(0.1);

  return (
    <div
      ref={ref}
      className="team-card"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${index * 0.12}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${index * 0.12}s`,
      }}
    >
      {/* Image */}
      <div className="card-img-wrap">
        <img src={member.img} alt={member.name} className="card-img" />

        {/* Hover overlay */}
        <div className="card-overlay">
          <div className="overlay-content">
            <p className="overlay-bio">{member.bio}</p>
            <div className="overlay-socials">
              <a href={member.social.li} className="soc-btn">in</a>
              <a href={member.social.ig} className="soc-btn">ig</a>
            </div>
          </div>
        </div>

        {/* Experience badge */}
        <div className="exp-badge">{member.exp}</div>

        {/* Specialty strip */}
        <div className="specialty-strip">{member.specialty}</div>
      </div>

      {/* Card body */}
      <div className="card-body">
        <div className="card-body-left">
          <h3 className="member-name">{member.name}</h3>
          <p className="member-role">{member.role}</p>
        </div>
        <div className="card-number">0{index + 1}</div>
      </div>

      {/* Bottom accent */}
      <div className="card-bar" />
    </div>
  );
}

export default function Team({ title = "The Team" }) {
  const [headerRef, headerInView] = useInView(0.1);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Jost:wght@200;300;400;500&display=swap');

        .team-section {
          background: #ffffff;
          font-family: 'Jost', sans-serif;
          position: relative;
          overflow: hidden;
          padding: 60px 40px;
        }

        .team-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(to right, rgba(216,92,38,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(216,92,38,0.04) 1px, transparent 1px);
          background-size: 72px 72px;
          pointer-events: none;
        }

        .team-watermark {
          position: absolute;
          right: -2rem;
          bottom: -4rem;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: clamp(7rem, 18vw, 20rem);
          color: transparent;
          -webkit-text-stroke: 1px rgba(216,92,38,0.06);
          pointer-events: none;
          user-select: none;
          letter-spacing: -0.02em;
          line-height: 1;
        }

        /* ── Header ── */
        .team-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 64px;
          position: relative;
          z-index: 2;
          flex-wrap: wrap;
          gap: 24px;
        }

        .header-left { flex: 1; min-width: 280px; }

        .t-label {
          font-size: 0.92rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #e15b21;
          font-weight: 400;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }
        .t-label-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #d85c26;
          flex-shrink: 0;
        }

        .t-heading {
          font-family: 'Raleway', sans-serif;
          font-weight: 700;
          text-transform: uppercase;
          color: #111;
          font-size: clamp(2.8rem, 6vw, 2rem);
          letter-spacing: -0.01em;
          line-height: 0.95;
        }
        .t-heading span { color: #d85c26; }

        .header-right { max-width: 360px; }
        .t-subhead {
          font-size: 0.92rem;
          color: #131313;
          line-height: 1.8;
          font-weight: 300;
          border-left: 2px solid #d85c26;
          padding-left: 18px;
        }

        .line-expand-h {
          height: 1px;
          background: linear-gradient(to right, #d85c26, transparent);
          width: 0;
          transition: width 1.3s cubic-bezier(0.22,1,0.36,1);
          margin-bottom: 48px;
        }
        .line-expand-h.visible { width: 100%; }

        /* ── Cards grid ── */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          position: relative;
          z-index: 2;
        }

        /* Stagger even cards — desktop only */
        .team-card:nth-child(even) { margin-top: 40px; }

        /* ── Card ── */
        .team-card {
          position: relative;
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          overflow: hidden;
          transition: box-shadow 0.4s ease, transform 0.4s cubic-bezier(0.22,1,0.36,1);
          cursor: pointer;
        }
        .team-card:hover {
          box-shadow: 0 20px 60px rgba(0,0,0,0.1), 0 4px 20px rgba(216,92,38,0.08);
          transform: translateY(-6px);
          border-color: rgba(216,92,38,0.25);
        }

        .card-img-wrap {
          position: relative;
          aspect-ratio: 3 / 4;
          overflow: hidden;
        }
        .card-img {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: top;
          transition: transform 0.7s cubic-bezier(0.22,1,0.36,1);
          display: block;
        }
        .team-card:hover .card-img { transform: scale(1.07); }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.5) 50%, transparent 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
          display: flex;
          align-items: flex-end;
          padding: 24px;
        }
        .team-card:hover .card-overlay { opacity: 1; }

        .overlay-content { display: flex; flex-direction: column; gap: 14px; width: 100%; }

        .overlay-bio {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.96);
          line-height: 1.7;
          font-weight: 300;
        }

        .overlay-socials { display: flex; gap: 8px; }
        .soc-btn {
          width: 32px; height: 32px;
          border: 1px solid rgba(255,255,255,0.25);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.6);
          font-size: 0.65rem;
          letter-spacing: 0.05em;
          text-decoration: none;
          text-transform: uppercase;
          transition: border-color 0.3s, color 0.3s, background 0.3s;
        }
        .soc-btn:hover { border-color: #d85c26; color: #d85c26; background: rgba(216,92,38,0.1); }

        .exp-badge {
          position: absolute;
          top: 14px; left: 14px;
          background: #d85c26;
          color: #fff;
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 10px;
        }

        .specialty-strip {
          position: absolute;
          top: 14px; right: 0;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(4px);
          color: rgb(255,255,255);
          font-size: 0.6rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 5px 12px;
          font-weight: 400;
        }

        .card-body {
          padding: 20px 20px 16px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 12px;
          background: #fff;
          border-top: 1px solid rgba(0,0,0,0.05);
        }

        .card-body-left { flex: 1; }

        .member-name {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          text-transform: uppercase;
          font-size: clamp(1.05rem, 1.6vw, 1.25rem);
          color: #111;
          letter-spacing: 0.04em;
          line-height: 1.1;
          margin-bottom: 4px;
        }
        .member-role {
          font-size: 0.72rem;
          color: #d85c26;
          font-weight: 400;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .card-number {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: 2.4rem;
          color: rgba(0,0,0,0.04);
          line-height: 1;
          letter-spacing: -0.02em;
          user-select: none;
          transition: color 0.35s;
          flex-shrink: 0;
        }
        .team-card:hover .card-number { color: rgba(216,92,38,0.1); }

        .card-bar {
          height: 2px;
          background: #d85c26;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.22,1,0.36,1);
        }
        .team-card:hover .card-bar { transform: scaleX(1); }

        .team-footer {
          text-align: center;
          margin-top: 64px;
          position: relative;
          z-index: 2;
        }
        .footer-note {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 0.78rem;
          color: #090909;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 400;
          flex-wrap: wrap;
          justify-content: center;
          text-align: center;
        }
        .footer-dash { width: 32px; height: 1px; background: #d85c26; flex-shrink: 0; }

        .h-fade {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1);
        }
        .h-fade.in { opacity: 1; transform: translateY(0); }
        .hd1 { transition-delay: 0.05s; }
        .hd2 { transition-delay: 0.18s; }
        .hd3 { transition-delay: 0.3s; }

        /* ── TABLET: 2×2 grid ── */
        @media (max-width: 1100px) and (min-width: 601px) {
          .team-section { padding: 48px 28px; }
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          /* Remove stagger in grid layout */
          .team-card:nth-child(even) { margin-top: 0 !important; }
          .team-header { margin-bottom: 44px; }
          .header-right { max-width: 100%; }
        }

        /* ── MOBILE: single column ── */
        @media (max-width: 600px) {
          .team-section { padding: 48px 16px; }

          .team-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          /* Remove stagger */
          .team-card:nth-child(even) { margin-top: 0 !important; }

          /* Make card horizontal on mobile */
          .team-card {
            display: grid;
            grid-template-rows: auto auto auto;
          }

          /* Shorter image on mobile */
          .card-img-wrap {
            aspect-ratio: 16 / 9;
          }

          .team-header {
            flex-direction: column;
            align-items: flex-start;
            margin-bottom: 32px;
            gap: 16px;
          }
          .header-right { max-width: 100%; }
          .t-subhead { font-size: 0.83rem; }

          .t-heading {
            font-size: clamp(2rem, 9vw, 2.6rem) !important;
          }
          .t-label { font-size: 0.75rem; }

          .card-body { padding: 16px; }
          .member-name { font-size: 1rem; }

          .team-footer { margin-top: 40px; }
          .footer-note { font-size: 0.7rem; gap: 8px; }

          /* Watermark too large on mobile */
          .team-watermark { font-size: 5rem; right: -1rem; bottom: -2rem; }
        }
      `}</style>

      <section className="team-section">
        <span className="team-watermark">Team</span>

        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>

          {/* ── Header ── */}
          <div className="team-header" ref={headerRef}>
            <div className="header-left">
              <div className={`t-label h-fade hd1 ${headerInView ? "in" : ""}`}>
                <span className="t-label-dot" />
                The People Behind the Work
              </div>
              <h2 className={`t-heading h-fade hd2 ${headerInView ? "in" : ""}`}>
                Meet<br />
                <span>Our Team</span>
              </h2>
            </div>
            <div className={`header-right h-fade hd3 ${headerInView ? "in" : ""}`}>
              <p className="t-subhead">
                A small, deliberate ensemble — each member chosen for depth of craft,
                not breadth of portfolio. We stay lean so every project gets everything we have.
              </p>
            </div>
          </div>

          {/* Divider line */}
          <div className={`line-expand-h ${headerInView ? "visible" : ""}`} />

          {/* ── Grid ── */}
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} member={member} index={index} />
            ))}
          </div>

          {/* ── Footer ── */}
          <div className="team-footer">
            <span className="footer-note">
              <span className="footer-dash" />
              We stay intentionally small to give every project our full attention
              <span className="footer-dash" />
            </span>
          </div>

        </div>
      </section>
    </>
  );
}