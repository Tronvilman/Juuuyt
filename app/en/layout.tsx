import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ResizeObserverFix } from "@/components/resize-observer-fix"
import "../globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "House of Results | Tekijäpuoti - Growth Management in the Digital World",
  description:
    "House of Results offers comprehensive digital solutions: social media management, content production, and digital presence optimization. Start your growth journey today in Helsinki.",
  generator: "v0.app",
  keywords: "digital marketing, social media, content production, Helsinki, growth, digital presence",
  openGraph: {
    title: "House of Results - Growth Management in the Digital World",
    description: "Comprehensive digital solutions for businesses",
    type: "website",
    locale: "en_US",
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

export default function EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <ResizeObserverFix />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
