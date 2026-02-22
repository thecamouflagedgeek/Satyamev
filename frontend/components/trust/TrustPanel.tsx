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
    <Card className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">
          Trust Snapshot
        </h2>
        <p className="text-gray-500 text-sm mt-1">{topic}</p>
      </div>

      <ReliabilityMeter score={reliability_score} />

      <div className="space-y-2">
        <h4 className="font-medium text-gray-700">Model Reasoning</h4>
        <p className="text-gray-600 text-sm">{reasoning}</p>
      </div>

      <div className="space-y-2">
        <h4 className="font-medium text-gray-700">Evidence Signals</h4>
        <div className="flex flex-wrap gap-2">
          {evidence_flags.map((flag, index) => (
            <Badge key={index} text={flag} />
          ))}
        </div>
      </div>
    </Card>
  );
}