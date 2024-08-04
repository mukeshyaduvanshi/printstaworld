import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Pages/Header"
import Footer from "@/Pages/Footer"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Printsta world",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
