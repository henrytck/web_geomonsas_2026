// src/app/layout.tsx
import type { Metadata } from "next"; // <--- ESTO ES LO QUE FALTABA
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Definición de Metadata
export const metadata: Metadata = {
  title: {
    default: "GMS | Geomatica Moncaleano Sanez SAS",
    template: "%s | GMS"
  },
  description: "Especialistas en cartografia digital, modelado 3D, SIG avanzado y gestión catastral en Colombia.",
  keywords: ["Fotogrametría", "Drones", "SIG", "Modelado 3D", "Topografía", "GMS", "Geomonsas"],
  openGraph: {
    title: "GMS - Innovación Geoespacial",
    description: "Impulsando el futuro de la gestión del territorio con tecnología 3D.",
    url: "https://geomonsas.com",
    siteName: "GMS",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}