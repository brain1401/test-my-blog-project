import Header from "@/components/Header";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: '에이든의 블로그',
    template: '에이든의 블로그 | %s'
  },
  description: "대학생 Aiden의 블로그",
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={inter.className}>
      <body className="mx-auto flex w-full max-w-screen-2xl flex-col">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
