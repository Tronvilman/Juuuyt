import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ResizeObserverFix } from "@/components/resize-observer-fix"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tekijäpuoti | House of Results - Kasvun hallinta digitaalisessa maailmassa",
  description:
    "Tekijäpuoti tarjoaa kokonaisvaltaisia digitaalisia ratkaisuja: sosiaalisen median managerointi, sisällöntuotto ja digitaalisen presenssin optimointi. Aloita kasvupolkusi tänään Helsingissä.",
  generator: "v0.app",
  keywords: "digitaalinen markkinointi, sosiaalinen media, sisällöntuotto, Helsinki, kasvu, digitaalinen läsnäolo",
  openGraph: {
    title: "Tekijäpuoti - Kasvun hallinta digitaalisessa maailmassa",
    description: "Kokonaisvaltaisia digitaalisia ratkaisuja yrityksille",
    type: "website",
    locale: "fi_FI",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fi">
      <body className={`font-sans antialiased`}>
        <ResizeObserverFix />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
