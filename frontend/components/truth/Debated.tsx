export default function Debated({ data = [] }: { data?: string[] }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
      <h3 className="text-yellow-400 font-semibold text-lg mb-4">
        Debated Points
      </h3>

      <ul className="space-y-3 text-zinc-300 text-sm leading-relaxed">
        {data.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}