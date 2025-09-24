// context/index.tsx
"use client";
import { wagmiAdapter, projectId } from "../config";

import { createAppKit } from "@reown/appkit/react";
import {
  mainnet,
  arbitrum,
  avalanche,
  base,
  optimism,
  polygon,
  solana,
} from "@reown/appkit/networks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { type ReactNode } from "react";
import { cookieToInitialState, WagmiProvider, type Config } from "wagmi";
import { Box, Typography } from "@mui/material";

// Set up queryClient
const queryClient = new QueryClient();
const isConfigured = Boolean(projectId && wagmiAdapter);

// Set up metadata
const metadata = {
  name: "DarkPool",
  description: "Maximize your crypto returns across chains",
  url: "https://reown.com/appkit", // origin must match your domain & subdomain
  icons: ["https://assets.reown.com/reown-profile-pic.png"],
};

// Create the modal only when configured (no assignment to avoid unused variable)
if (isConfigured) {
  createAppKit({
    adapters: [wagmiAdapter!],
    projectId: projectId!,
    networks: [mainnet, arbitrum, avalanche, base, optimism, polygon, solana],
    defaultNetwork: mainnet,
    metadata: metadata,
    features: {
      analytics: true,
      socials: ["google", "farcaster", "x"],
      emailShowWallets: false,
    },
    themeMode: "dark",
  });
}

export default function ContextProvider({
  children,
  cookies,
}: {
  children: ReactNode;
  cookies: string | null;
}) {
  if (!isConfigured) {
    return (
      <Box sx={{ p: 2 }}>
        <Typography color="error">
          Missing NEXT_PUBLIC_PROJECT_ID. Set it in your env and restart the dev
          server.
        </Typography>
      </Box>
    );
  }

  const initialState = cookieToInitialState(
    wagmiAdapter!.wagmiConfig as Config,
    cookies
  );

  return (
    <WagmiProvider
      config={wagmiAdapter!.wagmiConfig as Config}
      initialState={initialState}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
