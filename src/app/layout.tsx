import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Pocket Pitch — Always Be Ready to Sing",
  description:
    "Pitch pipe, piano, tuner, metronome, vocal warmups, and practice tests — all in one app. Trusted by 800,000+ singers worldwide. Download free on the App Store.",
  keywords: [
    "pitch pipe",
    "vocal tuner",
    "singing app",
    "choir app",
    "vocal warmups",
    "piano app",
    "metronome",
    "ear training",
    "practice tests",
    "singers",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Pocket Pitch — Always Be Ready to Sing",
    description:
      "Pitch pipe, piano, tuner, metronome, vocal warmups, and practice tests — all in one app. Trusted by 800,000+ singers worldwide.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
