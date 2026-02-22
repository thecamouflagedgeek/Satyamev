"use client";

import { useState } from "react";
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
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Perspective Explorer
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            AI-structured viewpoints around {topic}
          </p>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-indigo-600 hover:underline"
        >
          {expanded ? "Compact View" : "Expanded View"}
        </button>
      </div>

      {/* Microtext */}
      <p className="text-xs text-gray-400">
        Perspectives are organized for cognitive diversity — not ideological balance.
      </p>

      {/* Cards */}
      <div
        className={`grid gap-6 ${
          expanded ? "md:grid-cols-2" : "grid-cols-1"
        }`}
      >
        {perspectives.map((p, index) => (
          <PerspectiveCard
            key={index}
            viewpoint={p.viewpoint}
            summary={p.summary}
          />
        ))}
      </div>
    </div>
  );
}