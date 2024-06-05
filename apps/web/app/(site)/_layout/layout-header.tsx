"use client"

import Image from "next/image"
import Link from "next/link"

import useScroll from "@/lib/hooks/use-scroll"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { WalletConnect } from "@/components/wallet-connect"
import { WalletIsDisconnected } from "@/components/wallet-is-disconnected"
import { WalletIsConnected } from "@/components/wallet-is-connected"
import { WalletBalance } from "@/components/wallet-balance"
import { WalletAddress } from "@/components/wallet-address"

export function LayoutHeader() {
  const scrolled = useScroll(0)

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/40 backdrop-blur transition-all",
        scrolled && "bg-background/90"
      )}
    >
      <div className="container flex h-20 items-center">
        <div className="flex-1 items-center justify-between space-x-2">
          <Link href="/" className="hover:opacity-90">
            <span className="uppercase font-bold">Gassed</span>
          </Link>
        </div>
        <div className="hidden flex-1 items-center justify-between space-x-2 md:flex md:justify-end">
          <WalletIsDisconnected>
            <WalletConnect>
              <button className={buttonVariants({ variant: "ghost" })}>
                Connect Wallet
              </button>
            </WalletConnect>
          </WalletIsDisconnected>
          <WalletIsConnected>
            <WalletAddress truncate />
            <span className='mx-1'>|</span>
            <WalletBalance label='Balance' />
          </WalletIsConnected>
        </div>
      </div>
    </header>
  )
}
