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

    if ([hs, apt, ach].some((val) => isNaN(val) || val < 0 || val > 100)) {
      setErrorMessage("الرجاء إدخال جميع القيم بشكل صحيح (بين 0 و 100).");
      setWeightedScore(null);
      setScholarshipType("");
      return;
    }

    const finalScore = +(hs * 0.3 + apt * 0.3 + ach * 0.4).toFixed(2);
    setWeightedScore(finalScore);
    setErrorMessage("");

    if (finalScore >= 97) setScholarshipType("🎓 منحة كاملة (100٪)");
    else if (finalScore >= 94) setScholarshipType("🎓 منحة 80٪");
    else if (finalScore >= 90) setScholarshipType("🎓 منحة 60٪");
    else if (finalScore >= 80) setScholarshipType("🎓 منحة 50٪");
    else setScholarshipType("🎓 منحة 30٪");
  };

  return (
    <section className="bg-white shadow-md rounded-xl p-8 mt-4 space-y-8 border border-blue-100">
      <h2 className="text-2xl font-bold text-center text-blue-800">
        احسب نسبتك ومنحتك الآن
      </h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateWeightedScore();
        }}
        className="space-y-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            label="🎓 نسبة الثانوية العامة"
            value={highSchoolScore}
            onChange={setHighSchoolScore}
            placeholder="مثال: 95"
          />
          <InputField
            label="📊 درجة اختبار القدرات"
            value={aptitudeTestScore}
            onChange={setAptitudeTestScore}
            placeholder="مثال: 88"
          />
          <InputField
            label="📚 درجة اختبار التحصيلي"
            value={achievementTestScore}
            onChange={setAchievementTestScore}
            placeholder="مثال: 90"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
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
