import ProgressBar from "@/components/ui/ProgressBar";

interface ReliabilityMeterProps {
  score: number;
}

function getBand(score: number) {
  if (score >= 75) return "High Confidence";
  if (score >= 50) return "Moderate Confidence";
  return "Low Confidence";
}

export default function ReliabilityMeter({ score }: ReliabilityMeterProps) {
  const band = getBand(score);

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">
          Reliability Indicator
        </h3>
        <span className="text-indigo-600 font-bold text-xl">
          {score}%
        </span>
      </div>

      <ProgressBar value={score} />

      <div className="flex justify-between text-sm text-gray-500">
        <span>Confidence Band</span>
        <span className="font-medium text-gray-700">{band}</span>
      </div>
    </div>
  );
}