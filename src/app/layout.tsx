import type { Metadata } from "next";
import "./globals.css";

import Sidebar from "@/app/components/layout/Sidebar";
import Footer from "./components/layout/Footer";

export const metadata: Metadata = {
  title: "Afzaal Ahmad",
  description: "Resume of Afzaal Ahmad",
};

type RootLayoutProps = {
  children: React.ReactNode,
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="flex flex-col sm:flex-row">
        <div className="sm:basis-1/4 sticky top-0">
          <Sidebar />
        </div>
        <div className="sm:basis-3/4">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}