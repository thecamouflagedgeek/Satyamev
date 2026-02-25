"use client";

import PerspectiveCard from "./PerspectiveCard";

interface Perspective {
  viewpoint: string;
  summary: string;
}

interface PerspectiveExplorerProps {
  topic: string;
  perspectives: Perspective[];
}

export default function PerspectiveExplorer({
  topic,
  perspectives,
}: PerspectiveExplorerProps) {
  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">
          Perspective Explorer
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Structured viewpoints around {topic}
        </p>
      </div>

      {/* Cards */}
      {perspectives.length === 0 ? (
        <p className="text-sm text-gray-400">
          No perspectives available.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {perspectives.map((item, index) => (
            <PerspectiveCard
              key={index}
              viewpoint={item.viewpoint}
              summary={item.summary}
            />
          ))}
        </div>
      )}
    </div>
  );
}