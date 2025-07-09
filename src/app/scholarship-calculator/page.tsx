import Image from "next/image";
import ScholarshipTable from "../../../components/ScholarshipTable";
import CalculationForm from "../../../components/CalculationForm";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-4 sm:px-6 md:px-8 py-12 font-sans text-gray-800 w-full mx-auto flex flex-col items-center space-y-16">

      {/* العنوان */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-extrabold text-blue-900 leading-relaxed">
          جامعة الأمير مقرن
          <br />
          حاسبة النسبة الموزونة والمنح الدراسية
        </h1>
      </div>

      {/* محتوى الصفحة */}
      <div className="max-w-4xl w-full space-y-16">

        {/* شروط النسبة والمنح */}
        <section className="bg-white shadow-md rounded-xl p-8 border border-blue-100 space-y-8 text-gray-800">
          <div>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">🧮 طريقة حساب النسبة الموزونة:</h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
              <li>30٪ من نسبة الثانوية العامة</li>
              <li>30٪ من درجة اختبار القدرات</li>
              <li>40٪ من درجة اختبار التحصيلي</li>
            </ul>
          </div>

          <ScholarshipTable />
        </section>

        {/* نموذج الإدخال والحساب */}
        <CalculationForm />
      </div>
    </div>
  );
}
