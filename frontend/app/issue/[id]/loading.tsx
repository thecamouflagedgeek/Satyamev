export default function Loading() {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">

        <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto" />

        <p className="text-sm text-zinc-400 tracking-wide">
          Satyamev is structuring the truth...
        </p>

      </div>
    </div>
  );
}