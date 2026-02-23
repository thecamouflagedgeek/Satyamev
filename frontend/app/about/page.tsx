import Image from "next/image";

export default function About() {
  return (
    <main className="bg-black text-white">

      {/* ================= HERO ================= */}
      <section className="relative h-[70vh] flex items-center justify-center text-center px-6 md:px-16">

        <Image
          src="/type.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/85" />

        <div className="relative z-10 max-w-3xl mt-16">
          <h1 className="text-4xl md:text-5xl font-semibold">
            About Satyamev
          </h1>

          <div className="w-16 h-[3px] bg-[#c2410c] mx-auto my-6" />

          <p className="text-gray-300 leading-relaxed text-lg">
            Satyamev is a civic technology initiative designed to restore trust,
            continuity and clarity in India’s information ecosystem.
          </p>
        </div>
      </section>


      {/* ================= PLATFORM DESCRIPTION ================= */}
      <section className="bg-white text-black px-6 md:px-16 py-24">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-semibold border-b border-black pb-4">
            Our Vision
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed">
            We believe that public discourse should be shaped by long-term civic consequence,
            not short-term virality. Satyamev introduces a structured approach to understanding
            public issues by tracking their evolution, impact and continuity.
          </p>

          <p className="mt-6 text-gray-700 leading-relaxed">
            This platform does not replace journalism. It strengthens it by
            providing clarity, context and transparency across narratives.
          </p>

        </div>
      </section>


      {/* ================= TEAM SECTION ================= */}
      <section className="relative py-28 px-6 md:px-16">

        <Image
          src="/black.jpg"
          alt="Background"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/90" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-semibold mb-6">
            The Team
          </h2>

          <div className="w-16 h-[3px] bg-[#c2410c] mx-auto mb-16" />

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-16 text-left">

            {/* MEMBER 1 */}
            <div>
              <h3 className="text-xl font-semibold text-[#c2410c] mb-2">
                Member One
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Frontend Dev 1 — Home & Navigation
              </p>
              <p className="text-gray-400 leading-relaxed">
                Designed and implemented the civic prioritization interface,
                impact visualization and navigation architecture.
              </p>
            </div>

            {/* MEMBER 2 */}
            <div>
              <h3 className="text-xl font-semibold text-[#c2410c] mb-2">
                Member Two
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Frontend Dev 2 — Issue Analysis Layer
              </p>
              <p className="text-gray-400 leading-relaxed">
                Built detailed issue pages, narrative tracking displays
                and continuity visualization components.
              </p>
            </div>

            {/* MEMBER 3 */}
            <div>
              <h3 className="text-xl font-semibold text-[#c2410c] mb-2">
                Member Three
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Backend & AI Systems
              </p>
              <p className="text-gray-400 leading-relaxed">
                Developed impact scoring logic, narrative genome engine
                and data processing infrastructure.
              </p>
            </div>

            {/* MEMBER 4 */}
            <div>
              <h3 className="text-xl font-semibold text-[#c2410c] mb-2">
                Member Four
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Research & System Architecture
              </p>
              <p className="text-gray-400 leading-relaxed">
                Defined platform philosophy, civic evaluation metrics
                and research validation framework.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-100 text-black py-12 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">

          <div>
            <h4 className="font-semibold text-lg">SATYAMEV</h4>
            <p className="text-sm text-gray-600 mt-2">
              Truth Prevails Platform.
            </p>
          </div>

          <p className="text-sm text-gray-600 mt-6 md:mt-0">
            © 2026 Satyamev. All rights reserved.
          </p>

        </div>
      </footer>

    </main>
  );
}