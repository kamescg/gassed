'use client';
import { Button } from "@/components/ui/button";
import { useFaucet } from "@/lib/hooks/use-faucet";
import { useWallet } from "@fuels/react";
import React, { useState } from "react"


export default function FaucetPage(): JSX.Element {
    const {wallet} = useWallet();
    const { faucetWallet } = useFaucet();

  const sendFunds = async () => {
    if (!wallet) {
      return;
    }
    if (!faucetWallet) {
      return;
    }
    const tx = await faucetWallet.transfer(wallet?.address, '1000000');
    await tx.waitForResult();

    alert("Funds sent!");
  };

  return (
    <div
      className={
        "flex flex-col items-center justify-center min-h-[70vh] py-10"
      }
    >
      <div className='flex flex-col gap-y-4 items-center'>
        <span className="text-gray-400 text-8xl">
            Faucet
        </span>
        <div className='flex items-center gap-x-4'>
            <Button onClick={sendFunds}>Request Funds</Button>
        </div>
      </div>
    </div>
  )
}
