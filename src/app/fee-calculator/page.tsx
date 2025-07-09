"use client";

import { useState } from "react";

export default function FeeCalculator() {
    const [csHours, setCsHours] = useState("");
    const [engHours, setEngHours] = useState("");
    const [genHours, setGenHours] = useState("");
    const [mgmtHours, setMgmtHours] = useState("");
    const [hosHours, setHosHours] = useState("");

    // المنح حسب كل قسم
    const [generalScholarship, setGeneralScholarship] = useState(0.0); // كل الأقسام
    const [hosScholarship, setHosScholarship] = useState(0.0); // الضيافة فقط

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
        const cs = parse(csHours) * rates.cs;
        const eng = parse(engHours) * rates.eng;
        const gen = parse(genHours) * rates.gen;
        const mgmt = parse(mgmtHours) * rates.mgmt;
        const hos = parse(hosHours) * rates.hos;

        const csDiscount = cs * (1 - generalScholarship);
        const engDiscount = eng * (1 - generalScholarship);
        const genDiscount = gen * (1 - generalScholarship);
        const mgmtDiscount = mgmt * (1 - generalScholarship);
        const hosDiscount = hos * (1 - hosScholarship); // خصم مختلف

        const totalBeforeScholarship = cs + eng + gen + mgmt + hos;
        const totalAfterScholarship = csDiscount + engDiscount + genDiscount + mgmtDiscount + hosDiscount;
        const totalAfterTax = totalAfterScholarship * (1 + taxRate);

        const sectionTotals = {
            cs: {
                before: cs,
                afterDiscount: csDiscount,
                afterTax: csDiscount * (1 + taxRate),
            },
            eng: {
                before: eng,
                afterDiscount: engDiscount,
                afterTax: engDiscount * (1 + taxRate),
            },
            gen: {
                before: gen,
                afterDiscount: genDiscount,
                afterTax: genDiscount * (1 + taxRate),
            },
            mgmt: {
                before: mgmt,
                afterDiscount: mgmtDiscount,
                afterTax: mgmtDiscount * (1 + taxRate),
            },
            hos: {
                before: hos,
                afterDiscount: hosDiscount,
                afterTax: hosDiscount * (1 + taxRate),
            },
        };

        return {
            totalBeforeScholarship,
            totalAfterScholarship,
            totalAfterTax,
            sectionTotals,
        };
    };

    const { totalBeforeScholarship, totalAfterScholarship, totalAfterTax, sectionTotals } = calculateFees();

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

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block mb-2 font-semibold text-blue-700">🎁 المنحة لباقي التخصصات:</label>
                    <select
                        className="w-full p-3 border border-blue-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={generalScholarship}
                        onChange={(e) => setGeneralScholarship(parseFloat(e.target.value))}
                    >
                        <option value={0}>بدون منحة</option>
                        <option value={0.3}>30%</option>
                        <option value={0.5}>50%</option>
                        <option value={0.6}>60%</option>
                        <option value={0.8}>80%</option>
                    </select>
                </div>

                <div>
                    <label className="block mb-2 font-semibold text-blue-700">🛎️ المنحة لمقررات الضيافة فقط:</label>
                    <select
                        className="w-full p-3 border border-blue-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={hosScholarship}
                        onChange={(e) => setHosScholarship(parseFloat(e.target.value))}
                    >
                        <option value={0}>بدون منحة</option>
                        <option value={0.3}>30%</option>
                        <option value={0.35}>35%</option>
                    </select>
                </div>
            </div>

            <div className="mt-12 bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm text-gray-800 space-y-6">
                <h2 className="text-xl font-bold text-blue-700 mb-4">📊 تفاصيل حسب كل قسم:</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(sectionTotals).map(([key, val]) => (
                        <div
                            key={key}
                            className="bg-white border border-blue-100 rounded-lg shadow-sm p-5 space-y-2 hover:shadow-md transition"
                        >
                            <h3 className="text-lg font-bold text-blue-700 flex items-center gap-2">
                                {sectionName(key)}
                            </h3>

                            <div className="text-sm text-gray-700 space-y-1">
                                <p>
                                    💵 <span className="font-medium">قبل الخصم:</span>{" "}
                                    <span className="text-gray-900 font-semibold">
                                        {val.before.toLocaleString()} ريال
                                    </span>
                                </p>
                                <p>
                                    🎁 <span className="font-medium">بعد الخصم:</span>{" "}
                                    <span className="text-blue-800 font-semibold">
                                        {val.afterDiscount.toLocaleString()} ريال
                                    </span>
                                </p>
                                <p>
                                    💰 <span className="font-medium">بعد الضريبة:</span>{" "}
                                    <span className="text-green-700 font-semibold">
                                        {val.afterTax.toLocaleString()} ريال
                                    </span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>


                <h2 className="text-xl font-bold text-blue-700 mt-6">💰 ملخص الرسوم:</h2>
                <ResultItem label="إجمالي قبل الخصم" value={totalBeforeScholarship} />
                <ResultItem label="بعد الخصم" value={totalAfterScholarship} />
                <ResultItem label="بعد الضريبة (15٪)" value={totalAfterTax} />
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
