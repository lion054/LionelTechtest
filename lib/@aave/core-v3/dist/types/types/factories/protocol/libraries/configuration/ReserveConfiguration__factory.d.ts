import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { ReserveConfiguration, ReserveConfigurationInterface } from "../../../../protocol/libraries/configuration/ReserveConfiguration";
type ReserveConfigurationConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ReserveConfiguration__factory extends ContractFactory {
    constructor(...args: ReserveConfigurationConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ReserveConfiguration>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ReserveConfiguration;
    connect(signer: Signer): ReserveConfiguration__factory;
    static readonly bytecode = "0x60ab610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe7300000000000000000000000000000000000000003014608060405260043610603d5760003560e01c8063280d5de914604257806331b561ba14605c575b600080fd5b6049600281565b6040519081526020015b60405180910390f35b6063608081565b60405161ffff9091168152602001605356fea2646970667358221220be0a3e99d26ffba601a5d3e651a3c0db4e4f14e8d76e6e9bf800f900ffcd11a064736f6c634300080a0033";
    static readonly abi: {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): ReserveConfigurationInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ReserveConfiguration;
}
export {};
//# sourceMappingURL=ReserveConfiguration__factory.d.ts.map