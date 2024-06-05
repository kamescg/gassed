"use client"

import * as React from "react"
import { cn } from '@/lib/utils';
import { useWallet } from "@fuels/react"

type WalletBalance = React.HTMLAttributes<HTMLElement> & {
  label?: string
}

const WalletBalance = ({ className, label = "ETH" }: WalletBalance) => {
  const classes = cn( className)
  const { wallet } = useWallet();

  const [ balance, setBalance ] = React.useState<string>()
  React.useEffect( () => { 
    if(wallet) {
      wallet.getBalance().then( balance => setBalance(balance.toString()))
    }
  }, [wallet])

  return (
    <div className={classes}>
      {label}: {balance}
    </div>
  )
}

export { WalletBalance }
