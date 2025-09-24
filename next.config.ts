/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    const toAdd = ["pino-pretty", "lokijs", "encoding"];

    if (Array.isArray(config.externals)) {
      config.externals = [...config.externals, ...toAdd];
    } else if (typeof config.externals === "function") {
      const original = config.externals;
      config.externals = async (ctx: unknown, cb: unknown) => {
        const res = await (original as (...args: any[]) => any)(
          ctx as any,
          cb as any
        );
        if (Array.isArray(res)) return [...res, ...toAdd];
        return res;
      };
    } else if (config.externals == null) {
      config.externals = toAdd;
    }

    return config;
  },
};

export default nextConfig;
