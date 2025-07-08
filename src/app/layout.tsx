import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../../components/footer";

export const metadata = {
  title: "حاسبة المنح - جامعة الأمير مقرن",
  description: "احسب موزونتك واعرف إذا تستحق منحة دراسية",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <div className="bg-gradient-to-br from-blue-50 to-white p-2 w-full mx-auto flex flex-col justify-center items-center">

          <img
            src="./upm.png"
            alt="جامعة الأمير مقرن"
            width={150}
            height={150}
            className="lg:w-[300px] lg:h-[150px]"
          />

        </div>

        {children}
        <div className="bg-gradient-to-br from-blue-50 to-white">
          <Footer />
        </div>
        
      </body>
    </html>
  );
}
