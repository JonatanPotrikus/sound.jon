import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import Footer from "@/components/Footer/Footer";
import ButtonsNavigate from "@/components/ButtonsNavigate";

export const metadata: Metadata = {
  title: "Sound.Jon",
  description: "Listen music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-zinc-50">
        <div className="h-screen flex flex-col">
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 p-6">
              <ButtonsNavigate />
              {children}
            </main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
