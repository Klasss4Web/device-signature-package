import { SayHelloProps } from "./types";

export const generateHash = () => {
  const data = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    hardwareConcurrency: navigator.hardwareConcurrency,
    screenResolution: `${window.screen.width}x${window.screen.height}`,
  };

  return data;
};
