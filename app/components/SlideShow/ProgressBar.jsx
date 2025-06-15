export default function ProgressBar({ total, current }) {
  return (
    <div className="h-64 w-1 bg-gray-700 relative rounded-full overflow-hidden">
      <div
        className="absolute left-0 top-0 w-full bg-white transition-all"
        style={{ height: `${(current / total) * 100}%` }}
      />
    </div>
  );
}
