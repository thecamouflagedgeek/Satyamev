import { mock_issues } from "@/data/issues";
import Confirmed from "@/components/truth/Confirmed";
import Debated from "@/components/truth/Debated";
import Missing from "@/components/truth/Missing";

// DEV 2 — Issue Clarity Layout Owner
// NOTE FOR BACKEND INTEGRATION:
// Panels currently use mock structured data.
// Backend must return:
// {
//   id,
//   title,
//   summary,
//   confirmed: string[],
//   debated: string[],
//   missing: string[]
// }
// If structure changes, update props below accordingly.

export default async function IssuePage({ params }: any) {
  const { id } = await params;

  // loading screen
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const issue = mock_issues.find((i) => String(i.id) === String(id));

  if (!issue) {
    return (
      <div className="text-white p-10 text-center min-h-screen bg-black flex items-center justify-center">
        Issue not found
      </div>
    );
  }

  return (
    <main className="bg-black text-white min-h-screen">

      {/* ISSUE HEADER */}
      <section className="px-6 md:px-16 py-16 border-b border-white/10">
        <div className="max-w-3xl">
          <span className="text-xs bg-white/10 px-3 py-1 rounded">
            Active Issue
          </span>

          <h1 className="text-3xl md:text-5xl font-semibold mt-6 tracking-tight">
            {issue.title}
          </h1>

          <p className="text-gray-400 mt-4 text-lg leading-relaxed">
            {issue.summary}
          </p>
        </div>
      </section>

      {/* STRUCTURED UNDERSTANDING */}
      <section className="px-6 md:px-16 py-14">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Structured Understanding
          </h2>
        </div>

        <p className="text-sm text-zinc-500 mb-8 max-w-2xl">
          This structure separates verified information, debated narratives,
          and missing context to provide clarity around the issue.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {/* ===== ACTIVE VERSION (USING MOCK STRUCTURED DATA) ===== */}
          <Confirmed data={issue.confirmed} />
          <Debated data={issue.debated} />
          <Missing data={issue.missing} />

          {/* ===== STATIC FALLBACK (REFERENCE ONLY) ===== */}
          {/*
          <Confirmed />
          <Debated />
          <Missing />
          */}

        </div>
      </section>

      {/* ================= DEV 3 INTEGRATION AREA ================= */}
      {/* JADEN: Replace placeholders below with TrustSnapshot 
          and Perspective components using shared Card UI */}

      <section className="px-6 md:px-16 py-14 border-t border-white/10">
        <h2 className="text-2xl font-semibold mb-8 tracking-tight">
          Trust & Perspectives
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* DEV 3: Trust Snapshot Component Goes Here */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-zinc-500">
            Trust Snapshot Placeholder
          </div>

          {/* DEV 3: Perspective Explorer Component Goes Here */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-zinc-500">
            Perspective Explorer Placeholder
          </div>

        </div>
      </section>

    </main>
  );
}