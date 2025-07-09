"use client";

export default function ScholarshipTable() {
  const scholarships = [
    { range: "97٪ فأعلى", type: "منحة كاملة (100٪)", icon: "🏆" }, // كأس الفوز الكامل
    { range: "94٪ فأعلى", type: "منحة 80٪", icon: "🎖️" }, // وسام التميز
    { range: "90٪ فأعلى", type: "منحة 60٪", icon: "🥈" }, // ميدالية فضية
    { range: "80٪ فأعلى", type: "منحة 50٪", icon: "🥉" }, // ميدالية برونزية
    { range: "أقل من 80٪", type: "منحة 30٪", icon: "🎓" }, // قبعة التخرج (أساسية)
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-800">🎓 أنواع المنح الدراسية:</h2>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {scholarships.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-white border border-blue-100 rounded-xl shadow-sm px-6 py-4"
          >
            <div className="text-lg md:text-xl font-semibold text-blue-900 flex items-center gap-2">
              <span className="text-2xl">{item.icon}</span> {item.range}
            </div>
            <div className="text-base md:text-lg text-gray-700 font-medium">
              {item.type}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
