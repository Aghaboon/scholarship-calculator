import Image from "next/image";
import ScholarshipTable from "../../../components/ScholarshipTable";
import CalculationForm from "../../../components/CalculationForm";



export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-4 sm:p-6 md:p-8 font-sans text-gray-800 w-full mx-auto
    flex flex-col justify-center items-center space-y-12">

      <div className="flex flex-col items-center justify-center space-y-6">
        <h1 className="text-2xl md:text-4xl font-extrabold text-blue-800 text-center">
          جامعة الأمير مقرن
          <br />
          حاسبة النسبة الموزونة والمنح الدراسية
        </h1>
      </div>

      <div className="max-w-xl w-full space-y-12">

        {/* شروط النسبة والمنح */}
        <section className="bg-white shadow-md rounded-lg p-8 space-y-6 text-base sm:text-lg">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-3">شروط حساب المعدل:</h2>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>30٪ من نسبة الثانوية العامة</li>
              <li>30٪ من درجة اختبار القدرات</li>
              <li>40٪ من درجة اختبار التحصيلي</li>
            </ul>
          </div>

          <div>
            <ScholarshipTable />
          </div>
        </section>

        {/* نموذج الإدخال والحساب */}
        <CalculationForm />
      </div>
    </div>
  );
}
