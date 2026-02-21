import type { Metadata } from "next";
import { Cormorant_Garamond, IBM_Plex_Mono, Lato } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const cormorantSans = Cormorant_Garamond({
  variable: "--font-cormorant-sans",
  subsets: ["latin"],
});

const ibmMono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
const latoSans = Lato({
  variable: "--font-lato-sans",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "TheJect",
  description: "Inteligência de Projectos Verificados",
  icons: {
    icon: [{ url: "/favicon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${cormorantSans.variable} ${ibmMono.variable} ${latoSans.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
