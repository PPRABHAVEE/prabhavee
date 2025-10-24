import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";
import "./globals.css";
import AppLayout from "@/components/AppLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "P/ PRABHAVEE",
  description: "Partner for Social Impact",
  icons:{
    icon: "./favicon.ico",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <AppLayout>{children}</AppLayout>
        <Footer />
      </body>
    </html>
  );
}
