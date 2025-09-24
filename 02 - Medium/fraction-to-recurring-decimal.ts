// Problem: Fraction to Recurring Decimal
// Difficulty: Medium
// Link: https://leetcode.com/problems/fraction-to-recurring-decimal/description/?envType=daily-question&envId=2025-09-24

function fractionToDecimal(numerator: number, denominator: number): string {
  if (numerator === 0) return "0";

  const sign = numerator < 0 !== denominator < 0 ? "-" : "";
  const num = Math.abs(numerator);
  const den = Math.abs(denominator);

  const integerPart = Math.floor(num / den);
  let remainder = num % den;

  let result = sign + integerPart.toString();
  if (remainder === 0) return result;

  result += ".";
  const seen = new Map<number, number>(); // remainder -> index in decimals
  let decimals = "";

  while (remainder !== 0) {
    if (seen.has(remainder)) {
      const idx = seen.get(remainder)!;
      decimals = decimals.slice(0, idx) + "(" + decimals.slice(idx) + ")";
      result += decimals;
      return result;
    }

    seen.set(remainder, decimals.length);

    remainder *= 10;
    const digit = Math.floor(remainder / den);
    decimals += digit.toString();
    remainder = remainder % den;
  }

  result += decimals;
  return result;
}

// Test cases
console.log(fractionToDecimal(1, 2)); // Expected: "0.5"
console.log(fractionToDecimal(2, 1)); // Expected: "2"
console.log(fractionToDecimal(4, 333)); // Expected: "0.(012)"
