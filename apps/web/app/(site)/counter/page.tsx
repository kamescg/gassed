'use client';
import { Button } from "@/components/ui/button";
import React, { useState } from "react"
import { CounterAbi, CounterAbi__factory } from '@gassed/contracts/sway-api' 
import ContractIds from '@gassed/contracts/sway-api/contract-ids.json' 
import { contractDeployments, getContractId } from '@gassed/contract-deployments/src' 
import { bn } from "fuels";
import { useChain, useConnect, useConnectors, useWallet } from "@fuels/react";

export default function CounterPage(): JSX.Element {
    const { chain } = useChain()
    const { context } = useConnect();
    const { wallet } = useWallet();
    const [contract, setContract] = useState<CounterAbi>();
    const [counter, setCounter] = React.useState(0)

    console.log(context, 'context')
    console.log(chain, 'chain')

    React.useEffect(() => {
        if(!wallet) return;
        const testContract = CounterAbi__factory.connect(getContractId("counter", chain?.name), wallet);
        setContract(testContract);
        testContract.functions.get_count().get().then(({ value }) => {
            setCounter(value.toNumber());
        })
    }, [wallet])

    const handleIncrement = async () => {
        if(contract?.functions) {
          const { value } = await contract.functions.increment_counter(bn(1)).call();
          setCounter(value.toNumber());
        }
    }

  return (
    <div
      className={
        "flex flex-col items-center justify-center min-h-[70vh] py-10"
      }
    >
      <div className='flex flex-col gap-y-4 items-center'>
        <span data-testid="counter" className="text-gray-400 text-8xl">
            {counter}
        </span>
        <div className='flex items-center gap-x-4'>
            <Button onClick={handleIncrement}>Increment</Button>
            <Button>Decrement</Button>
        </div>
      </div>
    </div>
  )
}
