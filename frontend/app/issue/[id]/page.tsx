import Confirmed from "@/components/truth/Confirmed";
import Debated from "@/components/truth/Debated";
import Missing from "@/components/truth/Missing";
import { notFound } from "next/navigation";

const BASE_URL = "https://satyamev.onrender.com";

export default async function IssuePage({
  params,
}: {
  params: { id: string };
}) {
  const id = params?.id;

  try {
    const issueRes = await fetch(`${BASE_URL}/issues/${id}`, {
      cache: "no-store",
      next: { revalidate: 0 },
    });

    if (!issueRes.ok) {
      console.error("Backend error:", issueRes.status);
      return (
        <div className="text-white p-10 text-center">
          Backend is waking up... try again in a few seconds ⚡
        </div>
      );
    }

    const rawIssue = await issueRes.json();

    // 🚀 Parallel API calls
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

    const truthData = truthRes.ok ? await truthRes.json() : {};
    const trustData = trustRes.ok ? await trustRes.json() : {};
    const perspectiveData = perspectiveRes.ok
      ? await perspectiveRes.json()
      : {};

    // ✅ Final issue object
    const issue = {
      ...rawIssue,
      confirmed: truthData?.analysis?.confirmed || [],
      debated: truthData?.analysis?.debated || [],
      missing: truthData?.analysis?.missing || [],
    };

    // ✅ Normalize perspectives
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
        }),
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

            <p className="text-gray-300 text-lg">{issue.summary}</p>
          </div>
        </section>

        {/* STRUCTURED */}
        <section className="bg-white text-black px-6 md:px-16 py-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold border-b pb-4">
              Structured Understanding
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Confirmed data={issue.confirmed} />
              <Debated data={issue.debated} />
              <Missing data={issue.missing} />
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="py-24 px-6 md:px-16 bg-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Timeline
            </h2>

            {!issue.timeline?.length ? (
              <p className="text-center text-gray-400">
                No timeline available.
              </p>
            ) : (
              issue.timeline.map((event: any, i: number) => (
                <div key={i} className="mb-6 border-l pl-4">
                  <p className="text-sm text-gray-400">{event.date}</p>
                  <p className="font-semibold">{event.title}</p>
                  <p className="text-gray-400">{event.description}</p>
                </div>
              ))
            )}
          </div>
        </section>

        {/* TRUST + PERSPECTIVES */}
        <section className="bg-white text-black px-6 md:px-16 py-24">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Trust Score</h3>
              <p className="text-4xl text-[#c2410c] font-bold">
                {trustData?.reliability_score ?? 0}%
              </p>
              <p className="mt-3">{trustData?.reasoning}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Perspectives</h3>

              {perspectives.length === 0 ? (
                <p>No perspectives available.</p>
              ) : (
                perspectives.map((p: any, i: number) => (
                  <div key={i} className="mb-4">
                    <p className="font-semibold text-[#c2410c]">
                      {p.viewpoint}
                    </p>
                    <p>{p.summary}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </main>
    );
  } catch (err) {
    console.error(err);
    return notFound();
  }
}
