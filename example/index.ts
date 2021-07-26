import { Vault__factory } from "elf-contracts-typechain/dist/types/factories/Vault__factory";
import { Vault } from "elf-contracts-typechain/dist/types/Vault";
import hre from "hardhat";

export const { provider } = hre.ethers;

// https://docs.balancer.fi/developers/smart-contracts/deployment-addresses
const BALANCER_VAULT_ADDRESS = "0xBA12222222228d8Ba445958a75a0704d566BF2C8";

export const vaultContract: Vault = Vault__factory.connect(
  BALANCER_VAULT_ADDRESS,
  provider
);

// Basic smart contract call.  This is just to show that the types and class
// instances all work as expected.
async function logBalancerWethAddress() {
  const wethAddress = await vaultContract.functions.WETH();
  console.log(wethAddress);
}

logBalancerWethAddress();
