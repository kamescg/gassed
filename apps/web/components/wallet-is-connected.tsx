"use client"

import * as React from "react"
import { useWallet } from "@fuels/react"

type WalletIsConnected = React.HTMLAttributes<HTMLElement>

const WalletIsConnected = ({ children }: WalletIsConnected) => {
  const { wallet } = useWallet();

  if(!wallet) return null;

  return (
    <>
      {children}
    </>
  )
}

export { WalletIsConnected }
