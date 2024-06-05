"use client"

import * as React from "react"
import { defaultConnectors } from "@fuels/connectors"
import { FuelProvider } from "@fuels/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "next-themes"

type Providers = React.HTMLAttributes<HTMLElement>

const queryClient = new QueryClient()

const Providers = ({ children }: Providers) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryClientProvider client={queryClient}>
        <FuelProvider
          fuelConfig={{ connectors: defaultConnectors({ devMode: true }) }}
        >
          {children}
        </FuelProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export { Providers }
