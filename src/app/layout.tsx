import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Pocket Pitch — Your Vocal Toolkit, Always With You",
  description:
    "Pitch pipe, piano, tuner, and vocal warmups — all in one app. Used by 871,000+ singers worldwide. Download free on the App Store.",
  keywords: [
    "pitch pipe",
    "vocal tuner",
    "singing app",
    "choir app",
    "vocal warmups",
    "piano app",
    "singers",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Pocket Pitch — Your Vocal Toolkit, Always With You",
    description:
      "Pitch pipe, piano, tuner, and vocal warmups — all in one app. Used by 871,000+ singers worldwide.",
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
