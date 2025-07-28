import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "./components/context/ThemeContext";
import { Outfit, DM_Sans } from "next/font/google";
import SplashScreen from "./components/SplashScreen/SplashScreen";

// Define Outfit - a clean, modern sans-serif with subtle rounded corners
// Great for headings and prominent text
const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800", "900"],
});

// Define DM Sans - a friendlier sans-serif with more pronounced rounded corners
// Great for body text and UI elements
const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Abdulrehman Iqbal ",
  description: "Professional portfolio of Abdulrehman Iqbal, a Full Stack Developer specializing in modern web applications",
  keywords: ["developer", "full stack", "web development", "portfolio", "react", "node.js"],
  authors: [{ name: "Abdulrehman Iqbal" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable} scroll-smooth`}>
      <head>
        {/* Extra metadata and font preloading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Safari-specific meta tags for better image handling */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        
        {/* Force Safari to reload cached images */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body
        className="font-dm-sans antialiased transition-colors duration-300 bg-[#0d0d0d] text-[#fffce1]"
      >
        <ThemeProvider>
          <SplashScreen>
            <Navbar />
            <main className="animated-content">{children}</main>
          </SplashScreen>
        </ThemeProvider>
      </body>
    </html>
  );
}