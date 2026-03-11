import { useEffect, useRef, useState } from "react";
import img1 from "../assets/images/img services.png";
import img2 from "../assets/images/about img.jpg";
import { Link } from "react-router-dom";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;0,700;1,300;1,600&family=DM+Sans:wght@300;400;500&display=swap');

  .ab-section { font-family: 'DM Sans', sans-serif; }
  .ab-display  { font-family: 'Cormorant Garamond', serif; }

  /* number counter */
  .ab-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(3.5rem, 7vw, 6rem);
    font-weight: 700;
    line-height: 1;
    color: #d85b26;
  }

  /* bar animation */
  .ab-bar-inner {
    height: 100%;
    width: 0;
    background: linear-gradient(90deg, #d85b26bf, #d85b26);
    transition: width 1.4s cubic-bezier(0.22,1,0.36,1);
  }
  .ab-bar-inner.go { width: var(--w); }

  /* btn hover fill */
  .ab-btn {
    position: relative;
    overflow: hidden;
    transition: color 0.4s ease;
    z-index: 0;
  }
  .ab-btn::after {
    content: '';
    position: absolute;
    inset: 0;
    background: #d85b26;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s cubic-bezier(0.22,1,0.36,1);
    z-index: -1;
  }
  .ab-btn:hover::after  { transform: scaleX(1); }
  .ab-btn:hover         { color: #fff !important; }

  /* image clip + parallax feel */
  .ab-img-wrap { overflow: hidden; }
  .ab-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
    transition: transform 1.6s cubic-bezier(0.22,1,0.36,1);
  }
  .ab-img-wrap.revealed img { transform: scale(1); }

  /* fade animations */
  .ab-fade-up {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.9s ease, transform 0.9s ease;
  }
  .ab-fade-up.on { opacity: 1; transform: translateY(0); }

  .ab-fade-right {
    opacity: 0;
    transform: translateX(-40px);
    transition: opacity 0.9s ease, transform 0.9s ease;
  }
  .ab-fade-right.on { opacity: 1; transform: translateX(0); }

  .ab-d1 { transition-delay: 0s;    }
  .ab-d2 { transition-delay: 0.15s; }
  .ab-d3 { transition-delay: 0.28s; }
  .ab-d4 { transition-delay: 0.42s; }
  .ab-d5 { transition-delay: 0.56s; }
  .ab-d6 { transition-delay: 0.70s; }

  /* diagonal accent line */
  .ab-slash {
    position: absolute;
    width: 1px;
    background: #d85b26;
    opacity: 0.35;
    transform-origin: top;
  }
`;

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return [ref, v];
}

const stats = [
  { num: "18+", label: "Years of Practice" },
  { num: "240", label: "Projects Delivered" },
  { num: "06",  label: "Design Awards"     },
];

const skills = [
  { label: "Architectural Design", pct: 92 },
  { label: "Interior Planning",    pct: 78 },
  { label: "Urban Development",    pct: 65 },
];

export default function AboutSection() {
  const [secRef, secV] = useInView(0.08);
  const [rightRef, rightV] = useInView(0.1);

  return (
    <>
      <style>{styles}</style>

      <section
        ref={secRef}
        className="ab-section relative bg-white overflow-hidden
                   px-5 py-16 sm:px-10 sm:py-20 lg:px-0 lg:py-18"
      >

        {/* ── very subtle warm tint background ── */}
        <div className="pointer-events-none absolute inset-0 bg-[#fdf9f6] opacity-60" />

        {/* ── thin orange horizontal rule top ── */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d85b26] to-transparent opacity-50" />

        <div className="relative max-w-[1400px] mx-auto lg:grid lg:grid-cols-[1fr_1fr] lg:min-h-[580px]">

          {/* ══════════════════════════════════
              LEFT — IMAGE STACK
          ══════════════════════════════════ */}
          <div className="relative h-[300px] sm:h-[380px] lg:h-auto mb-12 lg:mb-0">

            {/* Main large image — fills left column, slightly less height */}
            <div className={`ab-img-wrap absolute inset-0 lg:inset-y-8 lg:left-0 lg:right-8
                             ${secV ? "revealed" : ""}`}>
             <img
                src={img1}
                alt="Architecture project"
                loading="lazy"
                decoding="async"
              />
              {/* soft bottom fade into white */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
            </div>

            {/* Floating second image — bottom-right overlap */}
            <div
              className={`ab-img-wrap ab-fade-up ab-d3 ${secV ? "on" : ""}
                          absolute bottom-[-5px] right-0 lg:right-[-52px]
                          w-[50%] h-[40%] sm:w-[64%] sm:h-[58%]
                          border-15 border-white shadow-[0_12px_40px_rgba(0,0,0,0.15)] z-10`}
            >
              <img
                  src={img2}
                  alt="Interior detail"
                  loading="lazy"
                  decoding="async"
                />
            </div>

            {/* Year badge — top-left */}
            <div
              className={`ab-fade-up ab-d2 ${secV ? "on" : ""}
                          absolute top-6 left-6 z-10
                          bg-[#d85b26] px-4 py-2 shadow-lg`}
            >
              <p className="ab-display text-white text-xs tracking-[0.25em] uppercase font-light">
                Est.
              </p>
              <p className="ab-display text-white text-2xl font-bold leading-none">2006</p>
            </div>

            {/* Vertical orange line accent */}
            <div className="absolute top-16 left-[-1px] w-[2px] h-20 bg-[#d85b26] opacity-50 hidden lg:block" />

          </div>

          {/* ══════════════════════════════════
              RIGHT — TEXT CONTENT
          ══════════════════════════════════ */}
          <div
            ref={rightRef}
            className="relative flex flex-col justify-center gap-6
                       lg:pl-16 xl:pl-20 lg:py-16"
          >

            {/* Section tag */}
            <div className={`ab-fade-up ab-d1 ${rightV ? "on" : ""}
                             flex items-center gap-3`}>
              <span className="inline-block w-8 h-[1.5px] bg-[#d85b26]" />
              <span className="text-[#d85b26] text-[0.92rem] tracking-[0.35em] uppercase font-medium">
                About  Udbhava
              </span>
            </div>

            {/* Main heading */}
            <h2 className={`ab-display ab-fade-up ab-d2 ${rightV ? "on" : ""}
                            text-[#111] leading-[1.05] font-light`}
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
            >
              We craft spaces<br />
              <em className="not-italic font-semibold text-[#d85b26]">that outlive</em><br />
              their era.
            </h2>

            {/* Body copy */}
            <p className={`ab-fade-up ab-d3 ${rightV ? "on" : ""}
                           text-[#666] text-[0.96rem] leading-[1.8] max-w-sm`}>
              Udbhava Studio bridges raw materiality with timeless form — designing
              residences, civic spaces, and interiors that are deeply rooted in their
              context and built to endure.
            </p>

            {/* Skill bars */}
            <div className={`ab-fade-up ab-d4 ${rightV ? "on" : ""} flex flex-col gap-4`}>
              {skills.map(({ label, pct }) => (
                <div key={label}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-[#333] text-[0.92rem] tracking-wide font-medium">{label}</span>
                    <span className="text-[#d85b26] text-[0.82rem] font-semibold">{pct}%</span>
                  </div>
                  <div className="w-full h-[4px] bg-[#ede8e3] rounded-full overflow-hidden">
                    <div
                      className={`ab-bar-inner rounded-full ${rightV ? "go" : ""}`}
                      style={{ "--w": `${pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className={`ab-fade-up ab-d5 ${rightV ? "on" : ""}
                             grid grid-cols-3 gap-4 border-t border-[#e8e0d8] pt-5`}>
              {stats.map(({ num, label }) => (
                <div key={label}>
                  <p className="ab-num">{num}</p>
                  <p className="text-[#333] text-[0.80rem] tracking-[0.12em] uppercase mt-1 leading-tight">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className={`ab-fade-up ab-d6 ${rightV ? "on" : ""}`}>
              <Link to="/portfolio">
              <button
                className="ab-btn inline-flex items-center gap-3
                          border border-[#d85b26] text-[#d85b26]
                          text-[0.8rem] font-medium tracking-[0.18em] uppercase
                          px-8 py-3.5 cursor-pointer bg-white"
              >
                Explore Our Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </button>
            </Link>
            </div>

          </div>
        </div>

        {/* ── thin orange rule bottom ── */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d85b26] to-transparent opacity-50" />

      </section>
    </>
  );
}