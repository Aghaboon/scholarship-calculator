"use client"
import Link from "next/link";



export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-center">أهلاً بك 👋</h1>

      <div className="flex flex-col gap-4 max-w-sm w-2/3 md:w-1/2  space-y-4">
        <Link href="/scholarship-calculator">
          <button className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            حاسبة الموزونة والمنحة
          </button>
        </Link>

        <Link href="/fee-calculator">
          <button className="w-full py-3 px-6 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition">
            حاسبة الرسوم
          </button>
        </Link>
      </div>
    </main>
  );
}
