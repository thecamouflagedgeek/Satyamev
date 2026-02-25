import Image from "next/image";
import Link from "next/link";

export default async function Issue() {
  let issues: any[] = [];

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || "https://satyamev-backend.onrender.com/"}/issues`,
      { cache: "no-store" },
    );

    if (res.ok) {
      const data = await res.json();
      issues = Array.isArray(data?.issues) ? data.issues : [];
    }
  } catch (error) {
    console.error("Failed to fetch issues:", error);
  }

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
          <h1 className="text-4xl md:text-5xl font-semibold">Public Issues</h1>

          <div className="w-16 h-[3px] bg-[#c2410c] mx-auto my-6" />

          <p className="text-gray-300 leading-relaxed text-lg">
            Explore ongoing civic and geopolitical developments ranked by impact
            and continuity.
          </p>
        </div>
      </section>

      {/* ================= ISSUES GRID ================= */}
      <section className="bg-white text-black px-6 md:px-16 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold border-b border-black pb-4">
            Active Issues
          </h2>

          {issues.length === 0 ? (
            <p className="mt-6 text-gray-600">No issues available.</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-12 mt-12">
              {issues.map((issue: any) => (
                <Link
                  key={issue.id}
                  href={`/issue/${issue.id}`}
                  className="group border border-gray-300 p-8 hover:border-[#c2410c] transition duration-300"
                >
                  <h3 className="text-xl font-semibold text-[#c2410c] mb-4 group-hover:underline">
                    {issue.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    {issue.summary}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ================= CONTEXT SECTION ================= */}
      <section className="relative py-28 px-6 md:px-16">
        <Image
          src="/black.jpg"
          alt="Background"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/90" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Structured Civic Continuity
          </h2>

          <div className="w-16 h-[3px] bg-[#c2410c] mx-auto mb-10" />

          <p className="text-gray-300 leading-relaxed">
            Each issue is evaluated through impact scoring, narrative tracking,
            and longitudinal continuity to ensure public discourse remains
            anchored in long-term civic consequence.
          </p>
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
