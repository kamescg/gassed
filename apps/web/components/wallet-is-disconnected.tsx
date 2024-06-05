"use client"

import * as React from "react"
import { useWallet } from "@fuels/react"

type WalletIsDisconnected = React.HTMLAttributes<HTMLElement>

const WalletIsDisconnected = ({ children }: WalletIsDisconnected) => {
  const { wallet } = useWallet();
  
  if(wallet) return null;

  return (
    <>
      {children}
    </>
  )
}

export { WalletIsDisconnected }
