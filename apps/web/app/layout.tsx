import "@/styles/app.css"
import "@/styles/globals.css"
import "./globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { Providers } from "./providers"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gassed",
  description: "Gassed is Fuel React Application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background font-sans antialiased')} style={inter.style}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
