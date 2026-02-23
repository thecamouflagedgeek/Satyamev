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
    <Card className="border-l-4 border-gray-300 hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {viewpoint}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {summary}
      </p>
    </Card>
  );
}