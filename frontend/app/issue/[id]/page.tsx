export const dynamic = "force-dynamic";

import Confirmed from "@/components/truth/Confirmed";
import Debated from "@/components/truth/Debated";
import Missing from "@/components/truth/Missing";

const BASE_URL = "https://satyamev-backend.onrender.com";

export default async function IssuePage({ params }: any) {
  const { id } = await params;

  // ================= FETCH ISSUES =================
  const issueRes = await fetch(`${BASE_URL}/issues`, {
    cache: "no-store",
  });

  const issueData = await issueRes.json();

  const rawIssue = issueData.issues?.find(
    (i: any) => String(i.id) === String(id)
  );

  if (!rawIssue) {
    return (
      <div className="text-white p-10 text-center min-h-screen bg-black flex items-center justify-center">
        Issue Not Found.
      </div>
    );
  }

  // ================= FETCH ANALYSIS =================
  const [truthRes, trustRes, perspectiveRes] = await Promise.all([
    fetch(`${BASE_URL}/truth-analysis`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic: rawIssue.title }),
    }),
    fetch(`${BASE_URL}/trust-score`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic: rawIssue.title }),
    }),
    fetch(`${BASE_URL}/perspectives`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic: rawIssue.title }),
    }),
  ]);

  const truthData = await truthRes.json();
  const trustData = await trustRes.json();
  const perspectiveData = await perspectiveRes.json();

  const issue = {
    ...rawIssue,
    confirmed: truthData.analysis?.confirmed || [],
    debated: truthData.analysis?.debated || [],
    missing: truthData.analysis?.missing || [],
  };

  let perspectives: any[] = [];

  if (Array.isArray(perspectiveData?.perspectives)) {
    perspectives = perspectiveData.perspectives;
  } else if (
    perspectiveData?.perspectives &&
    typeof perspectiveData.perspectives === "object"
  ) {
    perspectives = Object.entries(perspectiveData.perspectives).map(
      ([key, value]) => ({
        viewpoint: key,
        summary: value,
      })
    );
  }

  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative h-[70vh] flex items-center justify-center text-center px-6 md:px-16">
        <div className="absolute inset-0 bg-[url('/black.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/85" />

        <div className="relative z-10 max-w-3xl mt-16">
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

      {/* STRUCTURED UNDERSTANDING */}
      <section className="bg-white text-black px-6 md:px-16 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold border-b border-black pb-4">
            Structured Understanding
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="shadow-lg rounded-xl bg-white p-6">
              <Confirmed data={issue.confirmed} />
            </div>
            <div className="shadow-lg rounded-xl bg-white p-6">
              <Debated data={issue.debated} />
            </div>
            <div className="shadow-lg rounded-xl bg-white p-6">
              <Missing data={issue.missing} />
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="relative py-28 px-6 md:px-16">
        <div className="absolute inset-0 bg-[url('/type.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/90" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-16">
            Timeline of Events
          </h2>

          <div className="relative border-l border-zinc-700 ml-4">
            {issue.timeline?.map((event: any, index: number) => (
              <div key={index} className="mb-14 ml-8 relative">
                <span className="absolute -left-[13px] top-2 w-6 h-6 bg-[#c2410c] rounded-full border-4 border-black" />
                <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-6 shadow-xl">
                  <p className="text-xs text-zinc-400 mb-2 uppercase">
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
        </div>
      </section>

      {/* TRUST + PERSPECTIVES */}
      <section className="bg-white text-black px-6 md:px-16 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="p-8 border border-gray-300 rounded-xl shadow-lg">
            <h3 className="font-semibold text-xl mb-6">Trust Score</h3>
            <p className="text-5xl font-bold text-[#c2410c] mb-4">
              {trustData?.reliability_score ?? 0}%
            </p>
            <p className="text-gray-700 mb-6">
              {trustData?.reasoning ?? "No reasoning provided."}
            </p>
          </div>

          <div className="p-8 border border-gray-300 rounded-xl shadow-lg">
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
