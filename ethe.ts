// Maximum value for Ethereum uint256
export const MAX_UINT256 = 115792089237316195423570985008687907853269984665640564039457584007913129639935n;

// Checks if the input value equals the max uint256
export function isMaxUint256(value: bigint | number | string): boolean {
  return BigInt(value) === MAX_UINT256;
}

// Example algorithm usage
export function cappedAddition(a: bigint | number | string, b: bigint | number | string): bigint {
  const result = BigInt(a) + BigInt(b);
  return result > MAX_UINT256 ? MAX_UINT256 : result;
}