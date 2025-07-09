"use client";
import Link from "next/link";
import { GraduationCap, Calculator } from "lucide-react";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-br from-gray-100 to-blue-50 px-4">
      <div className="bg-white p-8 md:p-10 rounded-xl shadow-md max-w-md w-full space-y-6 text-center">
        <h1 className="text-3xl font-extrabold text-blue-800">  أهلاً وسهلاً  👋</h1>
        <p className="text-gray-600 text-sm md:text-base">
          اختار الأداة التي ترغب باستخدامها 👇
        </p>

        <div className="space-y-4">
          <Link href="/scholarship-calculator" className="block">
            <button className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
              <GraduationCap className="w-5 h-5" />
              حاسبة الموزونة والمنحة
            </button>
          </Link>

          <Link href="/fee-calculator" className="block">
            <button className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
              <Calculator className="w-5 h-5" />
              حاسبة الرسوم الدراسية
            </button>
          </Link>
        </div>

      </div>
    </main>
  );
}
