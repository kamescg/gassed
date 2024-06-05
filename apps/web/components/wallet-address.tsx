"use client"

import * as React from "react"
import { cn } from '@/lib/utils';
import { useWallet } from "@fuels/react"

type WalletAddress = React.HTMLAttributes<HTMLElement> & {
    truncate?: boolean
}

const WalletAddress = ({ className, truncate }: WalletAddress) => {
  const classes = cn( className)
  const { wallet } = useWallet();

  const [ address, setAddress ] = React.useState<string>()
  React.useEffect( () => { 
    if(wallet) {
        if(truncate) {
            let address = wallet.address.toHexString().slice(0, 6) + "..." + wallet.address.toHexString().slice(-4)
            setAddress(address)
        } else {
            setAddress(wallet.address.toHexString())
        }
    }
  }, [wallet])

  return (
    <div className={classes}>
      {address}
    </div>
  )
}

export { WalletAddress }
