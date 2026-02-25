import ProgressBar from "@/components/ui/ProgressBar";

interface ReliabilityMeterProps {
  score: number;
}

function getConfidenceLabel(score: number) {
  if (score >= 75) return "High Confidence";
  if (score >= 50) return "Moderate Confidence";
  return "Low Confidence";
}

export default function ReliabilityMeter({ score }: ReliabilityMeterProps) {
  const label = getConfidenceLabel(score);

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-lg font-semibold text-gray-800">
          Reliability Indicator
        </span>

        <span className="text-indigo-600 font-bold text-xl">
          {score}%
        </span>
      </div>

      <ProgressBar value={score} />

      <p className="text-sm text-gray-500">
        Confidence Band: <span className="font-medium text-gray-700">{label}</span>
      </p>
    </div>
  );
}