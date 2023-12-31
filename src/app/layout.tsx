import Navbar from "@/components/Navbar";
import "./globals.css";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Instagram",
  description: "인스타그램",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body className="w-full max-w-screen-xl overflow-auto mx-auto">
        <header className="sticky top-0 bg-white z-10 border-b">
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
