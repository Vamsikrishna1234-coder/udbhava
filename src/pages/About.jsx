import React, { useEffect, useRef, useState } from "react";
import img1 from "../assets/images/about parallelx.jpg";
import IntroSection  from '../components/Whoweare';
import Philosophy    from '../components/Philosophy';
import Team          from '../components/Team';
import Testimonials  from '../components/Testimonials';

/* ── minimal CSS: only what Tailwind can't do ── */
const heroStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,700;1,300&family=DM+Sans:wght@300;400&display=swap');

  .hero-display { font-family: 'Cormorant Garamond', serif; }
  .hero-body    { font-family: 'DM Sans', sans-serif; }

  /* parallax image drift */
  @keyframes heroDrift {
    0%   { transform: scale(1.12) translateY(0px);   }
    50%  { transform: scale(1.12) translateY(-18px);  }
    100% { transform: scale(1.12) translateY(0px);   }
  }
  .hero-parallax {
    animation: heroDrift 12s ease-in-out infinite;
  }

  /* grain overlay */
  @keyframes grain {
    0%,100% { transform: translate(0,0); }
    10%      { transform: translate(-2%,-3%); }
    30%      { transform: translate(3%,2%); }
    50%      { transform: translate(-1%,4%); }
    70%      { transform: translate(2%,-2%); }
    90%      { transform: translate(-3%,1%); }
  }
  .hero-grain::after {
    content: '';
    position: absolute;
    inset: -50%;
    width: 200%; height: 200%;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
    opacity: 0.045;
    animation: grain 8s steps(1) infinite;
    pointer-events: none;
    z-index: 3;
  }

  /* staggered word reveal */
  .hero-word {
    display: inline-block;
    opacity: 0;
    transform: translateY(60px) skewY(4deg);
    transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1),
                transform 0.9s cubic-bezier(0.16,1,0.3,1);
  }
  .hero-word.show {
    opacity: 1;
    transform: translateY(0) skewY(0deg);
  }

  /* line slide-in */
  .hero-line-in {
    opacity: 0;
    transform: translateX(-30px);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  .hero-line-in.show { opacity: 1; transform: translateX(0); }

  /* fade up slow */
  .hero-fade {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1s ease, transform 1s ease;
  }
  .hero-fade.show { opacity: 1; transform: translateY(0); }

  /* scroll indicator bounce */
  @keyframes scrollBounce {
    0%,100% { transform: translateY(0); }
    50%      { transform: translateY(8px); }
  }
  .scroll-bounce { animation: scrollBounce 1.8s ease-in-out infinite; }

  /* marquee strip */
  @keyframes marquee {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .marquee-track { animation: marquee 18s linear infinite; }
`;

/* ── words to animate in the heading ── */
const LINE1 = ["Designing", "Spaces"];
const LINE2 = ["That", "Speak"];
const LINE3 = ["Across", "Time."];

export default function AboutHero() {
  const [show, setShow] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    /* slight delay so fonts load before reveal */
    const t = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(t);
  }, []);

  /* word delay index */
  let wi = 0;
  const wordDelay = () => `${(wi++) * 0.12 + 0.1}s`;

  return (
    <>
      <style>{heroStyles}</style>

      {/* ══════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="hero-body hero-grain relative w-full h-screen min-h-[300px]
                   bg-[#0a0908] overflow-hidden flex flex-col"
      >

        {/* ── PARALLAX BACKGROUND IMAGE ── */}
        <div className="absolute inset-0 overflow-hidden">
          <img
          src={img1}
          alt="Architecture"
          loading="lazy"
          decoding="async"
          className="hero-parallax w-full h-full object-cover object-center"
        />
          {/* multi-layer dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b
                          from-[#0a0908]/70 via-[#0a0908]/40 to-[#0a0908]/90" />
          {/* vignette edges */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#0a0908_100%)]" />
        </div>

        {/* ── TOP BAR ── */}
        <div className={`hero-line-in ${show ? "show" : ""}
                         relative z-10 flex items-center justify-between
                         px-6 sm:px-10 lg:px-16 pt-8`}
          style={{ transitionDelay: "0.05s" }}
        >
          {/* studio name */}
          <span className="hero-display text-white/60 text-sm tracking-[0.4em] uppercase font-light">
            Udbhava Studio
          </span>
          {/* page label */}
          <span className="text-white/40 text-[0.7rem] tracking-[0.3em] uppercase">
            About Us &nbsp;/&nbsp; Our Story
          </span>
        </div>

        {/* ── MAIN CONTENT ── */}
        <div className="relative z-10 flex-1 flex flex-col justify-center
                        px-6 sm:px-10 lg:px-16 pb-24">

          {/* thin orange accent line */}
          <div className={`hero-line-in ${show ? "show" : ""}
                           w-10 h-[2px] bg-[#d85b26] mb-8`}
            style={{ transitionDelay: "0.2s" }}
          />

          {/* ── ANIMATED HEADING ── */}
          <h1 className="hero-display text-white font-light overflow-hidden"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 1.0 }}>

            {/* line 1 */}
            <div className="overflow-hidden">
              {LINE1.map(w => (
                <span
                  key={w}
                  className={`hero-word mr-[0.25em] ${show ? "show" : ""}`}
                  style={{ transitionDelay: wordDelay() }}
                >
                  {w}
                </span>
              ))}
            </div>

            {/* line 2 — italic accent */}
            <div className="overflow-hidden">
              {LINE2.map((w, i) => (
                <span
                  key={w}
                  className={`hero-word mr-[0.25em] ${show ? "show" : ""}
                               ${i === 1 ? "italic text-[#d85b26]" : ""}`}
                  style={{ transitionDelay: wordDelay() }}
                >
                  {w}
                </span>
              ))}
            </div>

            {/* line 3 */}
            <div className="overflow-hidden">
              {LINE3.map(w => (
                <span
                  key={w}
                  className={`hero-word mr-[0.25em] ${show ? "show" : ""}`}
                  style={{ transitionDelay: wordDelay() }}
                >
                  {w}
                </span>
              ))}
            </div>
          </h1>

          {/* sub copy */}
          <p className={`hero-fade ${show ? "show" : ""}
                         text-white/80 text-[0.92rem] leading-[1.9]
                         max-w-xs mt-8 font-light`}
            style={{ transitionDelay: "1.1s" }}
          >
            Architecture rooted in culture, climate,<br />
            and the honesty of materials.
          </p>

          {/* stats row */}
          
        </div>

        {/* ── SCROLL INDICATOR ── */}
        <div className={`hero-fade ${show ? "show" : ""}
                         absolute bottom-10 left-1/2 -translate-x-1/2
                         flex flex-col items-center gap-2 z-10`}
          style={{ transitionDelay: "1.6s" }}
        >
          <span className="text-white/30 text-[0.62rem] tracking-[0.3em] uppercase">Scroll</span>
          <div className="scroll-bounce w-[1px] h-10 bg-gradient-to-b from-[#d85b26] to-transparent" />
        </div>

        {/* ── BOTTOM MARQUEE STRIP ── */}
        <div className={`hero-fade ${show ? "show" : ""}
                         absolute bottom-0 left-0 right-0 z-10
                         border-t border-white/10 py-3 overflow-hidden`}
          style={{ transitionDelay: "1.4s" }}
        >
          <div className="marquee-track flex whitespace-nowrap">
            {Array(8).fill("Architecture  ✦  Interior  ✦  Urban Design  ✦  Landscape  ✦  Residential  ✦  Civic  ✦ ").map((t, i) => (
              <span key={i}
                className="text-white/20 text-[0.65rem] tracking-[0.25em] uppercase mr-0 px-2">
                {t}
              </span>
            ))}
          </div>
        </div>

      </section>

      {/* ── REST OF PAGE ── */}
      <IntroSection />
      <Philosophy />
      <Team />
      <Testimonials />
    </>
  );
}