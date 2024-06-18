import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Iniciar Sesion - Iibismed",
  description: "Iibismed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
