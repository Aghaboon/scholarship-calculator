"use client";

export default function ScholarshipTable() {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 max-w-xl mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold text-blue-700 mb-2">شروط المنح:</h2>
        <div className="overflow-x-auto">
          <table className="w-full max-w-full text-center border border-gray-300 rounded-md text-sm">
            <thead className="bg-blue-50 text-blue-900">
              <tr>
                <th className="border px-2 py-1">النسبة الموزونة</th>
                <th className="border px-2 py-1">نوع المنحة</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['97٪ فأعلى', 'منحة كاملة (100٪)'],
                ['94٪ فأعلى', 'منحة 80٪'],
                ['90٪ فأعلى', 'منحة 60٪'],
                ['80٪ فأعلى', 'منحة 50٪'],
                ['أقل من 80٪', 'منحة 30٪'],
              ].map(([range, type], idx) => (
                <tr key={idx} className={idx % 2 ? 'bg-gray-50' : ''}>
                  <td className="border px-2 py-1">{range}</td>
                  <td className="border px-2 py-1">{type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  