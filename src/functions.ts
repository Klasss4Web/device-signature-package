async function hashText(text: string) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);

  // Convert buffer to hex string
  return Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16))
    .join("");
}

// Example Usage: Get hash value and store in a variable
export async function getHashedString(text: string) {
  const hashedValue = await hashText(text);
  return hashedValue;
}

export const getDeviceSignature = () => {
  const data = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    hardwareConcurrency: navigator.hardwareConcurrency,
    screenResolution: `${window.screen.width}x${window.screen.height}`,
  };

  const stringifiedData = JSON.stringify(data);
  const hashedData = getHashedString(stringifiedData);

  return hashedData;
};
