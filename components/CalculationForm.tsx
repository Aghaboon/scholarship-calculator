"use client";

import { useState } from "react";
import InputField from "./InputField";
import ResultDisplay from "./ResultDisplay";

export default function CalculationForm() {
    const [highSchoolScore, setHighSchoolScore] = useState("");
    const [aptitudeTestScore, setAptitudeTestScore] = useState("");
    const [achievementTestScore, setAchievementTestScore] = useState("");

    const [weightedScore, setWeightedScore] = useState<number | null>(null);
    const [scholarshipType, setScholarshipType] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const calculateWeightedScore = () => {
        const hs = parseFloat(highSchoolScore);
        const apt = parseFloat(aptitudeTestScore);
        const ach = parseFloat(achievementTestScore);

        if (
            [hs, apt, ach].some(
                (val) => isNaN(val) || val < 0 || val > 100
            )
        ) {
            setErrorMessage("الرجاء إدخال جميع القيم بشكل صحيح (بين 0 و 100).");
            setWeightedScore(null);
            setScholarshipType("");
            return;
        }

        const finalScore = +(hs * 0.4 + apt * 0.3 + ach * 0.3).toFixed(2);
        setWeightedScore(finalScore);
        setErrorMessage("");

        if (finalScore >= 97) setScholarshipType("🎓 منحة كاملة (100٪)");
        else if (finalScore >= 94) setScholarshipType("🎓 منحة 80٪");
        else if (finalScore >= 90) setScholarshipType("🎓 منحة 60٪");
        else if (finalScore >= 80) setScholarshipType("🎓 منحة 50٪");
        else setScholarshipType("❌ لا توجد منحة");
    };

    return (
        <section className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl md:text-2xl font-bold text-center text-blue-700">
                احسب نسبتك ومنحتك الآن
            </h2>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    calculateWeightedScore();
                }}
                className="space-y-10"
            >
                <div className="flex flex-col w-2/3 md:w-1/2  space-y-4">
                    <InputField
                        label="نسبة الثانوية العامة"
                        value={highSchoolScore}
                        onChange={setHighSchoolScore}
                        placeholder="أدخل النسبة الثانوية العامة"
                    />
                    <InputField
                        label="درجة اختبار القدرات"
                        value={aptitudeTestScore}
                        onChange={setAptitudeTestScore}
                        placeholder="أدخل الدرجة القدرات"
                    />
                    <InputField
                        label="درجة اختبار التحصيلي"
                        value={achievementTestScore}
                        onChange={setAchievementTestScore}
                        placeholder="أدخل الدرجة التحصيلي"
                    />

                </div>


                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-md"
                >
                    حساب النسبة والمنحة
                </button>
            </form>

            <ResultDisplay
                score={weightedScore}
                scholarship={scholarshipType}
                error={errorMessage}
            />
        </section>
    );
}
