export default function CTASection() {
  return (
    <section className="py-10 px-6 bg-[#d85c26] relative overflow-hidden">

      {/* Decorative Background Lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(115deg,#d85c2655_1px,transparent_1px)] bg-[length:60px_60px]"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">

        {/* Small Tag */}
        <p className="text-white uppercase tracking-[0.25em] text-sm mb-3">
          Start Your Project
        </p>

        {/* Big Heading */}
        <h2 className="text-3xl md:text-4xl font-medium text-black uppercase tracking-wide mb-6">
          Let’s Build Something Exceptional
        </h2>

        {/* Subtext */}
        <p className="text-white max-w-2xl mx-auto text-lg leading-relaxed mb-10">
          We blend creativity, precision, and functional design to craft architectural 
          experiences that elevate how you live and work. Your vision deserves the best.
        </p>

        {/* CTA Button */}
        <a
          href="/contact"
          className="inline-block px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white 
          bg-[#000000] hover:bg-[#bb4f20] transition rounded-sm shadow-lg"
        >
          Book Consultation →
        </a>
      </div>
    </section>
  );
}