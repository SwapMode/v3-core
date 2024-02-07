import * as dotenv from 'dotenv'
import 'hardhat-typechain'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-etherscan'

dotenv.config()

const accounts = process.env.DEV_KEY !== undefined ? [process.env.DEV_KEY] : []

export default {
  networks: {
    hardhat: {
      // forking: {
      //   url: process.env.BASE_RPC || '',
      //   blockNumber: 2973850, // 8/22/2023 ~4:45PM
      // },
    },
    base: {
      url: process.env.BASE_RPC || '',
      accounts,
      chainId: 8453,
      // gas: 500000,
      // gasPrice: 100,
    },
    base_goerli: {
      url: process.env.BASE_GOERLI_RPC,
      accounts,
      chainId: 84531,
      // gas: 500000,
      // gasPrice: 100,
    },
    mode: {
      url: process.env.MODE_RPC,
      accounts,
      chainId: 34443,
    },
    modeTestnet: {
      url: process.env.MODE_TESTNET_RPC,
      accounts,
      chainId: 919,
    },
  },
  etherscan: {
    apiKey: {
      mode: 'mode', // apiKey is not required, just set a placeholder
    },
    customChains: [
      {
        network: 'mode',
        chainId: 34443,
        urls: {
          apiURL: 'https://api.routescan.io/v2/network/mainnet/evm/34443/etherscan',
          browserURL: 'https://modescan.io',
        },
      },
    ],
  },
  solidity: {
    version: '0.7.6',
    settings: {
      optimizer: {
        enabled: true,
        runs: 800,
      },
      metadata: {
        // do not include the metadata hash, since this is machine dependent
        // and we want all generated code to be deterministic
        // https://docs.soliditylang.org/en/v0.7.6/metadata.html
        bytecodeHash: 'none',
      },
    },
  },
}
