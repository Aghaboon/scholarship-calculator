"use client";

import { useState } from "react";

export default function FeeCalculator() {
  const [csHours, setCsHours] = useState(0);
  const [genHours, setGenHours] = useState(0);
  const [mgmtHours, setMgmtHours] = useState(0);
  const [hosHours, setHosHours] = useState(0);
  const [scholarship, setScholarship] = useState(0.0);

  const calculateFees = () => {
    const csRate = 2400;
    const genRate = 2300;
    const mgmtRate = 2300;
    const hosRate = 3200;
    const taxRate = 0.15;

    const totalBeforeScholarship =
      csHours * csRate +
      genHours * genRate +
      mgmtHours * mgmtRate +
      hosHours * hosRate;

    const afterScholarship = totalBeforeScholarship * (1 - scholarship);
    const afterTax = afterScholarship * (1 + taxRate);

    return {
      totalBeforeScholarship,
      afterScholarship,
      afterTax,
    };
  };

  const { totalBeforeScholarship, afterScholarship, afterTax } = calculateFees();

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">حاسبة الرسوم الدراسية</h1>

      <div className="space-y-4">
        <InputField label="عدد ساعات مقررات كلية الحاسب والهندسة" value={csHours} setValue={setCsHours} />
        <InputField label="عدد ساعات المقررات العامة والسنة التحضيرية" value={genHours} setValue={setGenHours} />
        <InputField label="عدد ساعات مقررات كلية الإدارة" value={mgmtHours} setValue={setMgmtHours} />
        <InputField label="عدد ساعات مقررات الضيافة الدولية" value={hosHours} setValue={setHosHours} />

        <div className="flex flex-col">
          <label className="mb-1 font-semibold">اختر نوع المنحة</label>
          <select
            className="p-2 border rounded"
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

        <div className="bg-gray-50 p-4 rounded-lg shadow mt-6 space-y-2 text-gray-700">
          <p>💰 <strong>الرسوم قبل المنحة:</strong> {totalBeforeScholarship.toLocaleString()} ريال</p>
          <p>🎓 <strong>بعد المنحة:</strong> {afterScholarship.toLocaleString()} ريال</p>
          <p>🧾 <strong>بعد الضريبة (15٪):</strong> {afterTax.toLocaleString()} ريال</p>
        </div>
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
  value: number;
  setValue: (val: number) => void;
}) {
  return (
    <div className="flex flex-col">
      <label className="mb-1 font-semibold">{label}</label>
      <input
        type="number"
        min="0"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value) || 0)}
        className="p-2 border rounded"
        placeholder="أدخل عدد الساعات"
      />
    </div>
  );
}
