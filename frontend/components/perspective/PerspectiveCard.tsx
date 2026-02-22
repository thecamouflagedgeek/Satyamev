import Card from "@/components/ui/Card";

interface PerspectiveCardProps {
  viewpoint: string;
  summary: string;
}

export default function PerspectiveCard({
  viewpoint,
  summary,
}: PerspectiveCardProps) {
  return (
    <Card className="hover:shadow-md transition-all duration-300 border-l-4 border-gray-300">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {viewpoint}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {summary}
      </p>

      <p className="text-xs text-gray-400 mt-3">
        Structured by Perspective Mapping AI
      </p>
    </Card>
  );
}