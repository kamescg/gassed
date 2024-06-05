"use client"
import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { ModeToggle } from "@/components/core/mode-toggle"

export function LayoutFooter() {

  return (
    <footer
      className={'bg-background/90 border-t-2'}
    >
      <div className="container flex h-20 items-center">
        <div className="flex-1 items-center justify-between space-x-2">
          <Link href="/" className={buttonVariants({ variant: "ghost" })}>
            <Image
              className="rounded-full mr-2"
              alt="Gassed"
              height={32}
              priority
              src="/images/gassed.png"
              width={32}
              style={{ pointerEvents: "none" }}
            />
            Gassed
          </Link>
        </div>
        <div className="hidden flex-1 items-center justify-between space-x-2 md:flex md:justify-end">
        <Link href="/faucet" className="hover:opacity-90 text-sm">
            <span className=" font-bold">Faucet</span>
          </Link>
          <span className='mx-1'>/</span>
          <Link href="/counter" className="hover:opacity-90 text-sm">
            <span className=" font-bold">Counter</span>
          </Link>
          <span className='mx-1'>/</span>
          <Link href="/create-asset" className="hover:opacity-90 text-sm">
            <span className=" font-bold">Create Asset</span>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </footer>
  )
}
