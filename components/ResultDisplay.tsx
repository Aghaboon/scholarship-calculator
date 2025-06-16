"use client";

export default function ResultDisplay({
  score,
  scholarship,
  error,
}: {
  score: number | null;
  scholarship: string;
  error: string;
}) {
  if (error)
    return (
      <p className="text-red-600 text-center mt-3 font-semibold">{error}</p>
    );

  if (score !== null)
    return (
      <div className="mt-4 p-4 bg-green-50 border border-green-400 rounded-md text-center text-lg font-bold text-green-700">
        النسبة الموزونة: <span className="text-2xl">{score}٪</span>
        <br />
        <span className="text-blue-700 mt-2 inline-block">{scholarship}</span>
      </div>
    );

  return null;
}
