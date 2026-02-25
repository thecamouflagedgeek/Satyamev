export default function HelpPage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 md:px-20 py-16">
      {/* HERO */}
      <section className="max-w-4xl mb-20">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
          Help & Transparency
        </h1>

        <p className="text-zinc-400 text-lg leading-relaxed">
          Satyamev is built to reduce noise, increase clarity, and structure
          public discourse. This page explains how the system works, how to
          interpret analysis, and how you can contribute to improving it.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section className="grid md:grid-cols-3 gap-10 mb-20">
        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-3">1. Structured Analysis</h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Each issue is separated into Confirmed facts, Debated narratives,
            and Missing context. This prevents emotional framing from distorting
            understanding.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-3">2. Trust Scoring</h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Reliability scores are generated using rule-based evidence
            weighting. Cross-source consistency and public data corroboration
            influence results.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-3">
            3. Multi-Perspective View
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Issues are presented from policy, economic, and citizen viewpoints
            to prevent one-dimensional analysis.
          </p>
        </div>
      </section>

      {/* HOW TO READ AN ISSUE */}
      <section className="max-w-4xl mb-20">
        <h2 className="text-3xl font-semibold mb-6">
          How to Interpret an Issue Page
        </h2>

        <div className="space-y-6 text-zinc-400 leading-relaxed">
          <p>
            <span className="text-white font-medium">Confirmed</span> includes
            verifiable facts supported by reliable public sources.
          </p>

          <p>
            <span className="text-white font-medium">Debated</span> highlights
            areas where interpretations differ or evidence is contested.
          </p>

          <p>
            <span className="text-white font-medium">Missing</span> identifies
            gaps in available data or unanswered questions.
          </p>

          <p>
            The Trust Score summarizes structural reliability — not opinion.
          </p>
        </div>
      </section>

      {/* TRANSPARENCY */}
      <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-10 mb-20">
        <h2 className="text-3xl font-semibold mb-6">Transparency Commitment</h2>

        <p className="text-zinc-400 leading-relaxed mb-4">
          Satyamev does not aim to replace human judgment. It structures
          information so users can make better decisions independently.
        </p>

        <p className="text-zinc-400 leading-relaxed">
          We continuously refine scoring models and perspective generation to
          reduce bias and improve evidence clarity.
        </p>
      </section>

      {/* REPORT ISSUE */}
      <section className="max-w-4xl mb-20">
        <h2 className="text-3xl font-semibold mb-6">Report Inaccuracies</h2>

        <p className="text-zinc-400 mb-6">
          If you find incorrect information, outdated analysis, or missing
          context, please report it.
        </p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
          <p className="text-zinc-300 text-sm mb-4">
            Email: <span className="text-white">support@satyamev.org</span>
          </p>
          <p className="text-zinc-500 text-xs">
            Include issue ID, description of the concern, and any supporting
            evidence.
          </p>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="text-center border-t border-white/10 pt-16">
        <h2 className="text-3xl font-semibold mb-4">Want to Contribute?</h2>

        <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
          We welcome researchers, civic technologists, and policy analysts who
          want to improve public clarity infrastructure.
        </p>

        <div className="inline-block bg-white text-black px-8 py-3 rounded-full font-medium hover:opacity-90 transition">
          Join the Movement
        </div>
      </section>
    </main>
  );
}
