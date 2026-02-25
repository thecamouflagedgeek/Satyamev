import Image from "next/image";

export default function HelpPage() {
  return (
    <main className="bg-black text-white">
      {/* ================= HERO ================= */}
      <section className="relative h-[65vh] flex items-center justify-center text-center px-6 md:px-16">
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
            Help & Transparency
          </h1>

          <div className="w-16 h-[3px] bg-[#c2410c] mx-auto my-6" />

          <p className="text-gray-300 leading-relaxed text-lg">
            This page explains how Satyamev structures public issues, generates
            trust metrics, and ensures transparency in analysis.
          </p>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="bg-white text-black px-6 md:px-16 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold border-b border-black pb-4">
            How the System Works
          </h2>

          <div className="grid md:grid-cols-3 gap-12 mt-16">
            <div>
              <h3 className="text-xl font-semibold text-[#c2410c] mb-4">
                1. Structured Analysis
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Each issue is divided into Confirmed facts, Debated narratives,
                and Missing context to prevent distortion and preserve clarity.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#c2410c] mb-4">
                2. Trust Scoring
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Reliability scores are generated through evidence weighting,
                cross-source consistency and structural evaluation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#c2410c] mb-4">
                3. Multi-Perspective View
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Policy, economic and citizen viewpoints are displayed to ensure
                balanced, multidimensional analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW TO READ ================= */}
      <section className="bg-black text-white px-6 md:px-16 py-28">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">
            How to Interpret an Issue Page
          </h2>

          <div className="w-16 h-[3px] bg-[#c2410c] mb-12" />

          <div className="space-y-8 text-gray-300 leading-relaxed text-lg">
            <p>
              <span className="text-white font-semibold">Confirmed</span>{" "}
              includes verifiable facts supported by reliable public sources.
            </p>

            <p>
              <span className="text-white font-semibold">Debated</span>{" "}
              highlights areas where interpretations differ or evidence remains
              contested.
            </p>

            <p>
              <span className="text-white font-semibold">Missing</span>{" "}
              identifies gaps in available data or unresolved questions.
            </p>

            <p>
              The Trust Score reflects structural reliability — not opinion or
              sentiment.
            </p>
          </div>
        </div>
      </section>

      {/* ================= TRANSPARENCY ================= */}
      <section className="bg-white text-black px-6 md:px-16 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold border-b border-black pb-4">
            Transparency Commitment
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed">
            Satyamev does not replace journalism or human judgment. It
            structures information to support independent evaluation.
          </p>

          <p className="mt-6 text-gray-700 leading-relaxed">
            Our scoring models and analytical frameworks are continuously
            refined to reduce bias and improve contextual accuracy.
          </p>
        </div>
      </section>

      {/* ================= REPORT ================= */}
      <section className="bg-black text-white px-6 md:px-16 py-28">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Report Inaccuracies</h2>

          <div className="w-16 h-[3px] bg-[#c2410c] mb-12" />

          <p className="text-gray-300 mb-8">
            If you identify outdated information, missing context, or factual
            inconsistencies, please report them for review.
          </p>

          <div className="border border-gray-700 p-8">
            <p className="text-gray-300 mb-4">
              Email: <span className="text-white">support@satyamev.org</span>
            </p>
            <p className="text-gray-500 text-sm">
              Include the issue ID, a description of the concern, and any
              supporting references.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-white text-black py-20 px-6 md:px-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Want to Contribute?</h2>

        <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
          Researchers, civic technologists and policy analysts are welcome to
          collaborate in strengthening India’s public clarity infrastructure.
        </p>

        <div className="inline-block border border-black px-8 py-3 hover:bg-black hover:text-white transition">
          Join the Movement
        </div>
      </section>
    </main>
  );
}
