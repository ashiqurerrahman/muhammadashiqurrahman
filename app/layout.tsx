import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/footer/page";
import Header from "./components/header/page";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ashiqur Rahman",
  description: "This is @ashiqurrahman porfilo website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ background: "#181818", color: "white" }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
