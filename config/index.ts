// config/index.ts

import { cookieStorage, createStorage } from "@wagmi/core";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { mainnet, arbitrum, solana } from "@reown/appkit/networks";

// Get projectId from https://cloud.reown.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

export const networks = [mainnet, arbitrum, solana];

// Set up the Wagmi Adapter (Config) only if projectId is present
export const wagmiAdapter = projectId
  ? new WagmiAdapter({
      storage: createStorage({
        storage: cookieStorage,
      }),
      ssr: true,
      projectId,
      networks,
    })
  : null;

export const config = wagmiAdapter?.wagmiConfig;
