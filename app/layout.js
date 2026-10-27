import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Prince Academy",
  description: "Prince CBSE Academy",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon.ico", sizes: "64x64", type: "image/x-icon" },
      { url: "/favicon.ico", sizes: "128x128", type: "image/x-icon" },
      { url: "/favicon.ico", sizes: "256x256", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/favicon.ico", sizes: "180x180", type: "image/x-icon" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
