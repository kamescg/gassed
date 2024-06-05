import { ReactNode } from "react"

import { LayoutFooter } from "./_layout/layout-footer"
import { LayoutHeader } from "./_layout/layout-header"

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
      <div className="relative flex min-h-screen flex-col bg-background text-foreground">
        <LayoutHeader />
        <main className="flex-1">{children}</main>
        <LayoutFooter />
      </div>
  )
}
