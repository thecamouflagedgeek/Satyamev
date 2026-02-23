import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import ReliabilityMeter from "./ReliabilityMeter";

interface TrustPanelProps {
  topic: string;
  reliability_score: number;
  reasoning: string;
  evidence_flags: string[];
}

export default function TrustPanel({
  topic,
  reliability_score,
  reasoning,
  evidence_flags,
}: TrustPanelProps) {
  return (
    <Card className="space-y-6 border-l-4 border-indigo-500">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">
          Trust Snapshot
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          AI-evaluated structural credibility for: {topic}
        </p>
      </div>

      {/* Reliability */}
      <ReliabilityMeter score={reliability_score} />

      {/* Explanation */}
      <div className="space-y-2">
        <h4 className="font-medium text-gray-700">
          Model Explanation
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed">
          {reasoning}
        </p>
        <p className="text-xs text-gray-400">
          Trust is presented as evidence patterns — not editorial judgment.
        </p>
      </div>

      {/* Evidence Cues */}
      <div className="space-y-2">
        <h4 className="font-medium text-gray-700">
          Evidence Signals
        </h4>
        <div className="flex flex-wrap gap-2">
          {evidence_flags.map((flag, index) => (
            <Badge key={index} text={flag} />
          ))}
        </div>
      </div>
    </Card>
  );
}