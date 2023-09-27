import "@/styles/tailwind.css";
import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";

const font = Hanken_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Results Summary Component Solution - Arda Eker",
  description: "Results Summary Component Solution - Arda Eker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
