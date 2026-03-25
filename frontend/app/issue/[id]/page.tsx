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
    <main className="bg-black text-white">
      {/* ================= HERO ================= */}
      <section className="relative h-[70vh] flex items-center justify-center text-center px-6 md:px-16">
        <div className="absolute inset-0 bg-[url('/black.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/85" />

        <div className="relative z-10 max-w-3xl mt-16 animate-fadeInUp">
          <span className="text-xs tracking-widest uppercase text-[#c2410c]">
            Active Issue
          </span>

          <h1 className="text-4xl md:text-5xl font-semibold mt-6">
            {issue.title}
          </h1>

          <div className="w-16 h-[3px] bg-[#c2410c] mx-auto my-6" />

          <p className="text-gray-300 leading-relaxed text-lg">
            {issue.summary}
          </p>
        </div>
      </section>

      {/* ================= STRUCTURED UNDERSTANDING ================= */}
      <section className="bg-white text-black px-6 md:px-16 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold border-b border-black pb-4">
            Structured Understanding
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="hover:-translate-y-2 transition duration-300 shadow-lg rounded-xl bg-white p-6">
              <Confirmed data={issue.confirmed} />
            </div>

            <div className="hover:-translate-y-2 transition duration-300 shadow-lg rounded-xl bg-white p-6">
              <Debated data={issue.debated} />
            </div>

            <div className="hover:-translate-y-2 transition duration-300 shadow-lg rounded-xl bg-white p-6">
              <Missing data={issue.missing} />
            </div>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="relative py-28 px-6 md:px-16">
        <div className="absolute inset-0 bg-[url('/type.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/90" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-16">
            Timeline of Events
          </h2>

          {!issue.timeline || issue.timeline.length === 0 ? (
            <p className="text-zinc-400 text-center">No timeline available.</p>
          ) : (
            <div className="relative border-l border-zinc-700 ml-4">
              {issue.timeline.map((event: any, index: number) => (
                <div key={index} className="mb-14 ml-8 relative group">
                  {/* Animated Dot */}
                  <span className="absolute -left-[13px] top-2 w-6 h-6 bg-[#c2410c] rounded-full border-4 border-black group-hover:scale-125 transition duration-300" />

                  {/* Event Card */}
                  <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-xl p-6 shadow-xl hover:border-[#c2410c] transition-all duration-300 hover:-translate-y-1">
                    <p className="text-xs text-zinc-400 mb-2 tracking-widest uppercase">
                      {event.date}
                    </p>

                    <h3 className="text-lg font-semibold text-white">
                      {event.title}
                    </h3>

                    <p className="text-sm text-zinc-400 mt-3 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ================= TRUST + PERSPECTIVES ================= */}
      <section className="bg-white text-black px-6 md:px-16 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Trust */}
          <div className="p-8 border border-gray-300 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="font-semibold text-xl mb-6">Trust Score</h3>

            <p className="text-5xl font-bold text-[#c2410c] mb-4">
              {trustData?.reliability_score ?? 0}%
            </p>

            <p className="text-gray-700 mb-6">
              {trustData?.reasoning ?? "No reasoning provided."}
            </p>

            <ul className="text-sm text-gray-600 space-y-2">
              {trustData?.evidence_flags?.map((flag: string, i: number) => (
                <li key={i}>• {flag}</li>
              ))}
            </ul>
          </div>

          {/* Perspectives */}
          <div className="p-8 border border-gray-300 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="font-semibold text-xl mb-6">Perspectives</h3>

            {perspectives.length === 0 ? (
              <p className="text-gray-600">No perspectives available.</p>
            ) : (
              <ul className="space-y-6">
                {perspectives.map((p: any, i: number) => (
                  <li key={i}>
                    <div className="font-semibold text-[#c2410c]">
                      {p.viewpoint}
                    </div>
                    <div className="text-gray-700 mt-1">{p.summary}</div>
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
