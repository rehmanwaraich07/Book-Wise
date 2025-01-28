import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { ReactNode } from "react";

const ibmPlexSans = localFont({
  src: [
    { path: "/fonts/IBMPlexSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "/fonts/IBMPlexSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "/fonts/IBMPlexSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "/fonts/IBMPlexSans-Bold.ttf", weight: "700", style: "normal" },
  ],
});

const bebasNeue = localFont({
  src: [
    { path: "/fonts/BebasNeue-Regular.ttf", weight: "400", style: "normal" },
  ],
  variable: "--babas-neue",
});

export const metadata: Metadata = {
  title: "BookWise",
  description:
    "BookWise is a book borrowing university library management solution.",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${ibmPlexSans.className} ${bebasNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
};
function Geist_Mono(arg0: { variable: string; subsets: string[] }) {
  throw new Error("Function not implemented.");
}

export default RootLayout;
