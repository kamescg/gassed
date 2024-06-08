import ContractIds from '@gassed/contracts/sway-api/contract-ids.json' 

export const contractDeployments: {
    [contract: string]: {
        [network: string]: string;
    };

} = {
    counter: {
        local: ContractIds.counter,
        testnet: "0x22a88b2228c4755194b73c19167c74deee83cb326b294ecf721e0e50bc99d3e0"
    }
}