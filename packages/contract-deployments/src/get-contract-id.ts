import { contractDeployments } from './contract-deployments'

function convertNetworkNameToShorthand(network?: string): string {
    switch (network) {
        case "Fuel Sepolia Testnet":
            return "testnet";
        case "local_testnet":
            return "local";
        default:
            return "local";
    }
}

export const getContractId = (contract: string, network?: string): string => {
    let _network = convertNetworkNameToShorthand(network);
    if(contractDeployments?.[contract]?.[_network] !== undefined) {
        return contractDeployments[contract][_network];
    } else {
        throw new Error(`Contract ${contract} not deployed on network ${network}`);
    }
};