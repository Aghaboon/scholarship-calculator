"use client";

export default function InputField({
  label,
  value,
  onChange,
  placeholder = "",
}: {
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-gray-700 font-medium mb-1 block">{label}</span>
      <input
        type="number"
        step="0.01"
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        min={0}
        max={100}
      />
    </label>
  );
}
