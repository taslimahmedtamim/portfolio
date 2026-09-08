import { Orbitron, Work_Sans } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "600", "700"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Taslim Ahmed Tamim | Cybersecurity · CP · Full-Stack Developer",
  description: "Portfolio of Taslim Ahmed Tamim — aspiring Cybersecurity professional, competitive programmer, and full-stack web developer (PERN).",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${workSans.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body>
        <div className="bg-glow bg-glow-1"></div>
        <div className="bg-glow bg-glow-2"></div>
        <div className="bg-glow bg-glow-3"></div>
        {children}
      </body>
    </html>
  );
}
