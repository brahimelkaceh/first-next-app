import { Suspense } from "react";
import Navbar from "./components/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Loading from "./loading";

// !Components
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        <Suspense fallback={<Loading />}></Suspense>
        {children}
      </body>
    </html>
  );
}
