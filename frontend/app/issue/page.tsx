import Link from "next/link";

export default async function Issue() {
  const res = await fetch("http://127.0.0.1:8000/issues", {
    cache: "no-store",
  });

  const data = await res.json();
  const issues = data.issues || [];

  return (
    <main className="bg-black text-white min-h-screen px-6 md:px-16 py-16">
      <h1 className="text-4xl font-semibold mb-12">Explore Issues</h1>

      {issues.length === 0 ? (
        <p className="text-zinc-500">No issues available.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {issues.map((issue: any) => (
            <Link
              key={issue.id}
              href={`/issue/${issue.id}`}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-white/30 transition duration-200"
            >
              <h2 className="text-xl font-semibold mb-3">{issue.title}</h2>
              <p className="text-sm text-zinc-400 line-clamp-3">
                {issue.summary}
              </p>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
