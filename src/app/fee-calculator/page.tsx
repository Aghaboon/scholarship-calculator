"use client";

import { useState } from "react";

export default function FeeCalculator() {
  const [csHours, setCsHours] = useState("");
  const [engHours, setEngHours] = useState("");
  const [genHours, setGenHours] = useState("");
  const [mgmtHours, setMgmtHours] = useState("");
  const [hosHours, setHosHours] = useState("");
  const [scholarship, setScholarship] = useState(0.0);

  const taxRate = 0.15;

  const rates = {
    cs: 2400,
    eng: 2400,
    gen: 2300,
    mgmt: 2300,
    hos: 3200,
  };

  const parse = (val: string) => parseFloat(val) || 0;

  const calculateFees = () => {
    const csTotal = parse(csHours) * rates.cs;
    const engTotal = parse(engHours) * rates.eng;
    const genTotal = parse(genHours) * rates.gen;
    const mgmtTotal = parse(mgmtHours) * rates.mgmt;
    const hosTotal = parse(hosHours) * rates.hos;

    const totalBeforeScholarship = csTotal + engTotal + genTotal + mgmtTotal + hosTotal;
    const afterScholarship = totalBeforeScholarship * (1 - scholarship);
    const afterTax = afterScholarship * (1 + taxRate);

    const sectionTotals = {
      cs: { before: csTotal, afterTax: csTotal * (1 + taxRate) },
      eng: { before: engTotal, afterTax: engTotal * (1 + taxRate) },
      gen: { before: genTotal, afterTax: genTotal * (1 + taxRate) },
      mgmt: { before: mgmtTotal, afterTax: mgmtTotal * (1 + taxRate) },
      hos: { before: hosTotal, afterTax: hosTotal * (1 + taxRate) },
    };

    return {
      totalBeforeScholarship,
      afterScholarship,
      afterTax,
      sectionTotals,
    };
  };

  const { totalBeforeScholarship, afterScholarship, afterTax, sectionTotals } = calculateFees();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 bg-white rounded-xl shadow-sm mt-10">
      <h1 className="text-3xl font-extrabold text-center text-blue-800 mb-10">
        🎓 حاسبة الرسوم الدراسية
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField label="💻 عدد ساعات كلية الحاسب" value={csHours} setValue={setCsHours} />
        <InputField label="👷‍♂️ عدد ساعات كلية الهندسة" value={engHours} setValue={setEngHours} />
        <InputField label="📚 عدد ساعات المقررات العامة / التحضيرية" value={genHours} setValue={setGenHours} />
        <InputField label="💼 عدد ساعات كلية الإدارة" value={mgmtHours} setValue={setMgmtHours} />
        <InputField label="🛎️ عدد ساعات الضيافة الدولية" value={hosHours} setValue={setHosHours} />
      </div>

      <div className="mt-8">
        <label className="block mb-2 font-semibold text-blue-700">🎁 نوع المنحة:</label>
        <select
          className="w-full p-3 border border-blue-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={scholarship}
          onChange={(e) => setScholarship(parseFloat(e.target.value))}
        >
          <option value={0}>بدون منحة</option>
          <option value={0.3}>30%</option>
          <option value={0.5}>50%</option>
          <option value={0.6}>60%</option>
          <option value={0.8}>80%</option>
        </select>
      </div>

      <div className="mt-12 bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm text-gray-800 space-y-6">
        <h2 className="text-xl font-bold text-blue-700 mb-4">📊 تفاصيل حسب كل قسم:</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(sectionTotals).map(([key, val]) => (
            <div key={key} className="text-sm md:text-base border-b border-gray-100 pb-2">
              <p>
                <strong>{sectionName(key)}:
                <br />
                </strong> قبل الضريبة:{" "}
                <span className="text-blue-800 font-semibold">
                  {val.before.toLocaleString()} ريال
                </span>{" "}
                | بعد الضريبة:{" "}
                <span className="text-green-700 font-semibold">
                  {val.afterTax.toLocaleString()} ريال
                </span>
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold text-blue-700 mt-6">💰 ملخص الرسوم:</h2>
        <ResultItem label="إجمالي قبل المنحة" value={totalBeforeScholarship} />
        <ResultItem label="بعد المنحة" value={afterScholarship} />
        <ResultItem label="بعد الضريبة (15٪)" value={afterTax} />
      </div>
    </div>
  );
}

function InputField({
  label,
  value,
  setValue,
}: {
  label: string;
  value: string;
  setValue: (val: string) => void;
}) {
  return (
    <div className="flex flex-col">
      <label className="mb-1 font-semibold text-blue-700">{label}</label>
      <input
        type="number"
        min="0"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="p-3 border border-blue-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="أدخل عدد الساعات"
      />
    </div>
  );
}

function ResultItem({ label, value }: { label: string; value: number }) {
  return (
    <p className="text-lg">
      <span className="font-semibold">{label}:</span>{" "}
      <span className="text-blue-800 font-bold">{value.toLocaleString()} ريال</span>
    </p>
  );
}

function sectionName(key: string) {
  switch (key) {
    case "cs":
      return "💻 كلية الحاسب";
    case "eng":
      return "👷‍♂️ كلية الهندسة";
    case "gen":
      return "📚 المقررات العامة";
    case "mgmt":
      return "💼 كلية الإدارة";
    case "hos":
      return "🛎️ الضيافة الدولية";
    default:
      return "قسم غير معروف";
  }
}
