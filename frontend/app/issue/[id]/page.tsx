import Confirmed from "@/components/truth/Confirmed";
import Debated from "@/components/truth/Debated";
import Missing from "@/components/truth/Missing";

export default async function IssuePage({ params }: any) {
  // ✅ Next 15 requires awaiting params
  const { id } = await params;

  // Fetch issues
  const res = await fetch("http://127.0.0.1:8000/issues", {
    cache: "no-store",
  });

  const data = await res.json();

  const rawIssue = data.issues?.find((i: any) => String(i.id) === String(id));

  if (!rawIssue) {
    return (
      <div className="text-white p-10 text-center min-h-screen bg-black flex items-center justify-center">
        Issue Not Found.
      </div>
    );
  }

  // 🚀 Fetch analysis endpoints in parallel
  const [truthRes, trustRes, perspectiveRes] = await Promise.all([
    fetch("http://127.0.0.1:8000/truth-analysis", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic: rawIssue.title }),
    }),
    fetch("http://127.0.0.1:8000/trust-score", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic: rawIssue.title }),
    }),
    fetch("http://127.0.0.1:8000/perspectives", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic: rawIssue.title }),
    }),
  ]);

  const truthData = await truthRes.json();
  const trustData = await trustRes.json();
  const perspectiveData = await perspectiveRes.json();

  // ✅ Structured issue object
  const issue = {
    ...rawIssue,
    confirmed: truthData.analysis?.confirmed || [],
    debated: truthData.analysis?.debated || [],
    missing: truthData.analysis?.missing || [],
  };

  // ✅ Ensure perspectives is always an array
  let perspectives: any[] = [];

  if (Array.isArray(perspectiveData?.perspectives)) {
    perspectives = perspectiveData.perspectives;
  } else if (
    perspectiveData?.perspectives &&
    typeof perspectiveData.perspectives === "object"
  ) {
    // Convert object into array format
    perspectives = Object.entries(perspectiveData.perspectives).map(
      ([key, value]) => ({
        side: key,
        view: value,
      }),
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
        <h2 className="text-2xl font-semibold tracking-tight mb-8">
          Structured Understanding
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Confirmed data={issue.confirmed} />
          <Debated data={issue.debated} />
          <Missing data={issue.missing} />
        </div>
      </section>

      {/* TIMELINE */}
      <section className="px-6 md:px-16 py-14 border-t border-white/10">
        <h2 className="text-2xl font-semibold tracking-tight mb-10">
          Timeline of Events
        </h2>

        {!issue.timeline || issue.timeline.length === 0 ? (
          <p className="text-zinc-500 text-sm">No timeline available.</p>
        ) : (
          <div className="relative border-l border-zinc-800 ml-4">
            {issue.timeline.map((event: any, index: number) => (
              <div key={index} className="mb-12 ml-6 relative">
                {/* Dot */}
                <span className="absolute -left-[11px] top-1 w-5 h-5 bg-white rounded-full border-4 border-black" />

                {/* Content Card */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-white/20 transition-all duration-300">
                  {/* Date */}
                  <p className="text-xs text-zinc-400 mb-2">{event.date}</p>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* TRUST + PERSPECTIVES */}
      <section className="px-6 md:px-16 py-14 border-t border-white/10">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Trust Score */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-4">Trust Score</h3>

            <p className="text-4xl font-bold text-green-400 mb-4">
              {trustData?.reliability_score ?? 0}%
            </p>

            <p className="text-sm text-zinc-400 mb-4">
              {trustData?.reasoning ?? "No reasoning provided."}
            </p>

            <ul className="text-xs text-zinc-500 space-y-1">
              {trustData?.evidence_flags?.map((flag: string, i: number) => (
                <li key={i}>• {flag}</li>
              ))}
            </ul>
          </div>

          {/* Perspectives */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-4">Perspectives</h3>

            {perspectives.length === 0 ? (
              <p className="text-zinc-500 text-sm">
                No perspectives available.
              </p>
            ) : (
              <ul className="space-y-4 text-sm text-zinc-300">
                {perspectives.map((p: any, i: number) => (
                  <li key={i}>
                    <div className="font-medium text-white">{p.viewpoint}</div>
                    <div className="text-zinc-400">{p.summary}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
