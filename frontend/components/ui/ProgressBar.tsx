interface ProgressBarProps {
  value: number; // 0–100
}

export default function ProgressBar({ value }: ProgressBarProps) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-3">
      <div
        className="h-3 rounded-full bg-indigo-600 transition-all duration-500"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}