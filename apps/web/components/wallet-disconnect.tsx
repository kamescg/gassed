"use client"

import * as React from "react"
import { cn } from '@/lib/utils';
import { useDisconnect } from "@fuels/react";

type WalletDisconnect = React.HTMLAttributes<HTMLElement>

const WalletDisconnect = ({ children, className }: WalletDisconnect) => {
  const classes = cn(className)
  const { disconnect } = useDisconnect();

  return (
    <span className={classes} onClick={()=>disconnect()}>
      {children}
    </span>
  )
}

export { WalletDisconnect }
