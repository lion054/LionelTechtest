/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export declare namespace IPoolDataProvider {
  export type TokenDataStruct = {
    symbol: PromiseOrValue<string>;
    tokenAddress: PromiseOrValue<string>;
  };

  export type TokenDataStructOutput = [string, string] & {
    symbol: string;
    tokenAddress: string;
  };
}

export interface IPoolDataProviderInterface extends utils.Interface {
  functions: {
    "ADDRESSES_PROVIDER()": FunctionFragment;
    "getATokenTotalSupply(address)": FunctionFragment;
    "getAllATokens()": FunctionFragment;
    "getAllReservesTokens()": FunctionFragment;
    "getDebtCeiling(address)": FunctionFragment;
    "getDebtCeilingDecimals()": FunctionFragment;
    "getFlashLoanEnabled(address)": FunctionFragment;
    "getInterestRateStrategyAddress(address)": FunctionFragment;
    "getLiquidationProtocolFee(address)": FunctionFragment;
    "getPaused(address)": FunctionFragment;
    "getReserveCaps(address)": FunctionFragment;
    "getReserveConfigurationData(address)": FunctionFragment;
    "getReserveData(address)": FunctionFragment;
    "getReserveEModeCategory(address)": FunctionFragment;
    "getReserveTokensAddresses(address)": FunctionFragment;
    "getSiloedBorrowing(address)": FunctionFragment;
    "getTotalDebt(address)": FunctionFragment;
    "getUnbackedMintCap(address)": FunctionFragment;
    "getUserReserveData(address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "ADDRESSES_PROVIDER"
      | "getATokenTotalSupply"
      | "getAllATokens"
      | "getAllReservesTokens"
      | "getDebtCeiling"
      | "getDebtCeilingDecimals"
      | "getFlashLoanEnabled"
      | "getInterestRateStrategyAddress"
      | "getLiquidationProtocolFee"
      | "getPaused"
      | "getReserveCaps"
      | "getReserveConfigurationData"
      | "getReserveData"
      | "getReserveEModeCategory"
      | "getReserveTokensAddresses"
      | "getSiloedBorrowing"
      | "getTotalDebt"
      | "getUnbackedMintCap"
      | "getUserReserveData"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "ADDRESSES_PROVIDER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getATokenTotalSupply",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllATokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllReservesTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDebtCeiling",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getDebtCeilingDecimals",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getFlashLoanEnabled",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getInterestRateStrategyAddress",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getLiquidationProtocolFee",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPaused",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getReserveCaps",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getReserveConfigurationData",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getReserveData",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getReserveEModeCategory",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getReserveTokensAddresses",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSiloedBorrowing",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalDebt",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getUnbackedMintCap",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserReserveData",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "ADDRESSES_PROVIDER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getATokenTotalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllATokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllReservesTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDebtCeiling",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDebtCeilingDecimals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFlashLoanEnabled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInterestRateStrategyAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLiquidationProtocolFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPaused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getReserveCaps",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReserveConfigurationData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReserveData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReserveEModeCategory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReserveTokensAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSiloedBorrowing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalDebt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUnbackedMintCap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserReserveData",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IPoolDataProvider extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IPoolDataProviderInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<[string]>;

    getATokenTotalSupply(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getAllATokens(
      overrides?: CallOverrides
    ): Promise<[IPoolDataProvider.TokenDataStructOutput[]]>;

    getAllReservesTokens(
      overrides?: CallOverrides
    ): Promise<[IPoolDataProvider.TokenDataStructOutput[]]>;

    getDebtCeiling(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getDebtCeilingDecimals(overrides?: CallOverrides): Promise<[BigNumber]>;

    getFlashLoanEnabled(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getInterestRateStrategyAddress(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string] & { irStrategyAddress: string }>;

    getLiquidationProtocolFee(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPaused(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean] & { isPaused: boolean }>;

    getReserveCaps(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { borrowCap: BigNumber; supplyCap: BigNumber }
    >;

    getReserveConfigurationData(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean,
        boolean,
        boolean,
        boolean
      ] & {
        decimals: BigNumber;
        ltv: BigNumber;
        liquidationThreshold: BigNumber;
        liquidationBonus: BigNumber;
        reserveFactor: BigNumber;
        usageAsCollateralEnabled: boolean;
        borrowingEnabled: boolean;
        stableBorrowRateEnabled: boolean;
        isActive: boolean;
        isFrozen: boolean;
      }
    >;

    getReserveData(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number
      ] & {
        unbacked: BigNumber;
        accruedToTreasuryScaled: BigNumber;
        totalAToken: BigNumber;
        totalStableDebt: BigNumber;
        totalVariableDebt: BigNumber;
        liquidityRate: BigNumber;
        variableBorrowRate: BigNumber;
        stableBorrowRate: BigNumber;
        averageStableBorrowRate: BigNumber;
        liquidityIndex: BigNumber;
        variableBorrowIndex: BigNumber;
        lastUpdateTimestamp: number;
      }
    >;

    getReserveEModeCategory(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getReserveTokensAddresses(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        aTokenAddress: string;
        stableDebtTokenAddress: string;
        variableDebtTokenAddress: string;
      }
    >;

    getSiloedBorrowing(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getTotalDebt(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getUnbackedMintCap(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getUserReserveData(
      asset: PromiseOrValue<string>,
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        boolean
      ] & {
        currentATokenBalance: BigNumber;
        currentStableDebt: BigNumber;
        currentVariableDebt: BigNumber;
        principalStableDebt: BigNumber;
        scaledVariableDebt: BigNumber;
        stableBorrowRate: BigNumber;
        liquidityRate: BigNumber;
        stableRateLastUpdated: number;
        usageAsCollateralEnabled: boolean;
      }
    >;
  };

  ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;

  getATokenTotalSupply(
    asset: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAllATokens(
    overrides?: CallOverrides
  ): Promise<IPoolDataProvider.TokenDataStructOutput[]>;

  getAllReservesTokens(
    overrides?: CallOverrides
  ): Promise<IPoolDataProvider.TokenDataStructOutput[]>;

  getDebtCeiling(
    asset: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getDebtCeilingDecimals(overrides?: CallOverrides): Promise<BigNumber>;

  getFlashLoanEnabled(
    asset: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getInterestRateStrategyAddress(
    asset: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  getLiquidationProtocolFee(
    asset: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPaused(
    asset: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getReserveCaps(
    asset: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { borrowCap: BigNumber; supplyCap: BigNumber }
  >;

  getReserveConfigurationData(
    asset: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      boolean,
      boolean,
      boolean,
      boolean,
      boolean
    ] & {
      decimals: BigNumber;
      ltv: BigNumber;
      liquidationThreshold: BigNumber;
      liquidationBonus: BigNumber;
      reserveFactor: BigNumber;
      usageAsCollateralEnabled: boolean;
      borrowingEnabled: boolean;
      stableBorrowRateEnabled: boolean;
      isActive: boolean;
      isFrozen: boolean;
    }
  >;

  getReserveData(
    asset: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      number
    ] & {
      unbacked: BigNumber;
      accruedToTreasuryScaled: BigNumber;
      totalAToken: BigNumber;
      totalStableDebt: BigNumber;
      totalVariableDebt: BigNumber;
      liquidityRate: BigNumber;
      variableBorrowRate: BigNumber;
      stableBorrowRate: BigNumber;
      averageStableBorrowRate: BigNumber;
      liquidityIndex: BigNumber;
      variableBorrowIndex: BigNumber;
      lastUpdateTimestamp: number;
    }
  >;

  getReserveEModeCategory(
    asset: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getReserveTokensAddresses(
    asset: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string] & {
      aTokenAddress: string;
      stableDebtTokenAddress: string;
      variableDebtTokenAddress: string;
    }
  >;

  getSiloedBorrowing(
    asset: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getTotalDebt(
    asset: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getUnbackedMintCap(
    asset: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getUserReserveData(
    asset: PromiseOrValue<string>,
    user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      number,
      boolean
    ] & {
      currentATokenBalance: BigNumber;
      currentStableDebt: BigNumber;
      currentVariableDebt: BigNumber;
      principalStableDebt: BigNumber;
      scaledVariableDebt: BigNumber;
      stableBorrowRate: BigNumber;
      liquidityRate: BigNumber;
      stableRateLastUpdated: number;
      usageAsCollateralEnabled: boolean;
    }
  >;

  callStatic: {
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<string>;

    getATokenTotalSupply(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllATokens(
      overrides?: CallOverrides
    ): Promise<IPoolDataProvider.TokenDataStructOutput[]>;

    getAllReservesTokens(
      overrides?: CallOverrides
    ): Promise<IPoolDataProvider.TokenDataStructOutput[]>;

    getDebtCeiling(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDebtCeilingDecimals(overrides?: CallOverrides): Promise<BigNumber>;

    getFlashLoanEnabled(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getInterestRateStrategyAddress(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    getLiquidationProtocolFee(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPaused(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getReserveCaps(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { borrowCap: BigNumber; supplyCap: BigNumber }
    >;

    getReserveConfigurationData(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean,
        boolean,
        boolean,
        boolean
      ] & {
        decimals: BigNumber;
        ltv: BigNumber;
        liquidationThreshold: BigNumber;
        liquidationBonus: BigNumber;
        reserveFactor: BigNumber;
        usageAsCollateralEnabled: boolean;
        borrowingEnabled: boolean;
        stableBorrowRateEnabled: boolean;
        isActive: boolean;
        isFrozen: boolean;
      }
    >;

    getReserveData(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number
      ] & {
        unbacked: BigNumber;
        accruedToTreasuryScaled: BigNumber;
        totalAToken: BigNumber;
        totalStableDebt: BigNumber;
        totalVariableDebt: BigNumber;
        liquidityRate: BigNumber;
        variableBorrowRate: BigNumber;
        stableBorrowRate: BigNumber;
        averageStableBorrowRate: BigNumber;
        liquidityIndex: BigNumber;
        variableBorrowIndex: BigNumber;
        lastUpdateTimestamp: number;
      }
    >;

    getReserveEModeCategory(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReserveTokensAddresses(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        aTokenAddress: string;
        stableDebtTokenAddress: string;
        variableDebtTokenAddress: string;
      }
    >;

    getSiloedBorrowing(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getTotalDebt(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUnbackedMintCap(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserReserveData(
      asset: PromiseOrValue<string>,
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        boolean
      ] & {
        currentATokenBalance: BigNumber;
        currentStableDebt: BigNumber;
        currentVariableDebt: BigNumber;
        principalStableDebt: BigNumber;
        scaledVariableDebt: BigNumber;
        stableBorrowRate: BigNumber;
        liquidityRate: BigNumber;
        stableRateLastUpdated: number;
        usageAsCollateralEnabled: boolean;
      }
    >;
  };

  filters: {};

  estimateGas: {
    ADDRESSES_PROVIDER(overrides?: CallOverrides): Promise<BigNumber>;

    getATokenTotalSupply(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllATokens(overrides?: CallOverrides): Promise<BigNumber>;

    getAllReservesTokens(overrides?: CallOverrides): Promise<BigNumber>;

    getDebtCeiling(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDebtCeilingDecimals(overrides?: CallOverrides): Promise<BigNumber>;

    getFlashLoanEnabled(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getInterestRateStrategyAddress(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLiquidationProtocolFee(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPaused(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReserveCaps(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReserveConfigurationData(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReserveData(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReserveEModeCategory(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReserveTokensAddresses(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSiloedBorrowing(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTotalDebt(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUnbackedMintCap(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserReserveData(
      asset: PromiseOrValue<string>,
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ADDRESSES_PROVIDER(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getATokenTotalSupply(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllATokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAllReservesTokens(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDebtCeiling(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDebtCeilingDecimals(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFlashLoanEnabled(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getInterestRateStrategyAddress(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLiquidationProtocolFee(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPaused(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReserveCaps(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReserveConfigurationData(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReserveData(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReserveEModeCategory(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReserveTokensAddresses(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSiloedBorrowing(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTotalDebt(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUnbackedMintCap(
      asset: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserReserveData(
      asset: PromiseOrValue<string>,
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
