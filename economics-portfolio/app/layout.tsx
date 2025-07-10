import type React from "react"
import type { Metadata } from "next"
import { Inter, Georama as Georgia } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const georgia = Georgia({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-georgia" })

export const metadata: Metadata = {
  title: "Emnet Assefa - Economics Graduate & Business Analyst",
  description:
    "Recent B.A. Economics graduate from Wolkite University with expertise in economic analysis, market research, and business development. Passionate about applying economic theories to real-world challenges.",
  keywords:
    "Economics Graduate, Business Analyst, Market Research, Economic Analysis, Sales Consultant, Wolkite University, Ethiopia",
  authors: [{ name: "Emnet Assefa" }],
  creator: "Emnet Assefa",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://emnetassefa.com",
    title: "Emnet Assefa - Economics Graduate & Business Analyst",
    description: "Recent B.A. Economics graduate with expertise in economic analysis and business development.",
    siteName: "Emnet Assefa Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emnet Assefa - Economics Graduate & Business Analyst",
    description: "Recent B.A. Economics graduate with expertise in economic analysis and business development.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${georgia.variable} font-sans`}>{children}</body>
    </html>
  )
}
