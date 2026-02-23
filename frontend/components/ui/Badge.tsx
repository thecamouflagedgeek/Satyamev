interface BadgeProps {
  text: string;
}

export default function Badge({ text }: BadgeProps) {
  return (
    <span className="px-3 py-1 text-sm bg-indigo-50 text-indigo-700 rounded-full border border-indigo-200">
      {text}
    </span>
  );
}