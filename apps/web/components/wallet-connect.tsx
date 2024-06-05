"use client"

import * as React from "react"
import { cn } from '@/lib/utils';
import { useConnectUI } from "@fuels/react"

type WalletConnect = React.HTMLAttributes<HTMLElement>

const WalletConnect = ({ children, className }: WalletConnect) => {
  const classes = cn("connect-wallet", className)
  const { connect, error, isError, theme, isConnecting } = useConnectUI()

  return (
    <span className={classes} onClick={() => connect()}>
      {children}
    </span>
  )
}

export { WalletConnect }
