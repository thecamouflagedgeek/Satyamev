import ProgressBar from "@/components/ui/ProgressBar";

interface ReliabilityMeterProps {
  score: number;
}

export default function ReliabilityMeter({ score }: ReliabilityMeterProps) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">
          Reliability Score
        </h3>
        <span className="text-indigo-600 font-bold text-xl">
          {score}%
        </span>
      </div>

      <ProgressBar value={score} />

      <p className="text-sm text-gray-500">
        Confidence band based on cross-source evidence weighting.
      </p>
    </div>
  );
}