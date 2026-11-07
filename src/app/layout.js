import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/navbar";
import StickyBar from "../../components/stickybar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Osuolale Building Materials | Supplier in Lagos",
  description:
    "Your trusted source for quality building materials in Lagos, Nigeria.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col ">
        <div className="sticky top-0 z-50">
          <StickyBar />
          <Navbar />
        </div>
        <main> {children}</main>
      </body>
    </html>
  );
}
