import { createConfig } from "@ponder/core";
import { http } from "viem";

import { SwaplaceAbi } from "./abis/SwaplaceAbi";

export default createConfig({
  networks: {
    sepolia: {
      chainId: 11155111,
      transport: http(process.env.ALCHEMY_RPC_URL),
    },
    kakarot_sepolia: {
      chainId: 1802203764,
      transport: http(process.env.KAKAROT_SEPOLIA_RPC_URL),
    },
    amoy: {
      chainId: 80002,
      transport: http(process.env.AMOY_RPC_URL),
    },
    optmism_sepolia: {
      chainId: 11155420,
      transport: http(process.env.OPSEPOLIA_RPC_URL),
    },
    // fuji: {
    //   chainId: 43113,
    //   transport: http(process.env.FUJI_RPC_URL),
    // },
    base_sepolia: {
      chainId: 84532,
      transport: http(process.env.BASESEPOLIA_RPC_URL),
    },
    // // bnb_testnet: {
    // //   chainId: 97,
    // //   transport: http(process.env.BNB_TESTNET_RPC_UR),
    // // },
    arbitrum_sepolia: {
      chainId: 421614,
      transport: http(process.env.ARBITRUMSEPOLIA_RPC_URL),
    },
  },
  contracts: {
    Swaplace: {
      abi: SwaplaceAbi,
      network: {
        sepolia: {
          address: "0x7819d778dB1b5309dfcbe1A67553aC89Ae1cA53f",
          startBlock: 6107909,
        },
        kakarot_sepolia: {
          address: "0x12Fe1E060B0B1c4Efc6d7A8dC9394ffC53842b78",
          startBlock: 10346,
        },
        amoy: {
          address: "0x7819d778dB1b5309dfcbe1A67553aC89Ae1cA53f",
          startBlock: 8279045,
        },
        optmism_sepolia: {
          address: "0x7819d778dB1b5309dfcbe1A67553aC89Ae1cA53f",
          startBlock: 13295338,
        },
        // fuji: {
        //   address: "0x7819d778dB1b5309dfcbe1A67553aC89Ae1cA53f",
        //   startBlock: 34124607,
        // },
        base_sepolia: {
          address: "0x7819d778dB1b5309dfcbe1A67553aC89Ae1cA53f",
          startBlock: 11318526,
        },
        // // bnb_testnet: {
        // //   address: "0x7819d778dB1b5309dfcbe1A67553aC89Ae1cA53f",
        // //   startBlock: 41228333,
        // // },
        arbitrum_sepolia: {
          address: "0x7819d778dB1b5309dfcbe1A67553aC89Ae1cA53f",
          startBlock: 54752822,
        },
      },
    },
  },
});
