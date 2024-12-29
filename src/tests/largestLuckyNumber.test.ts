// Jest test suite for largestLuckyNumber function
import LargestLuckyNumber from "../components/LargestLuckyNumber";

describe("largestLuckyNumber", () => {
  test("should return the largest lucky number less than or equal to the given number", () => {
    expect(LargestLuckyNumber(854)).toBe(777);
    expect(LargestLuckyNumber(7744)).toBe(7744);
    expect(LargestLuckyNumber(475)).toBe(474);
    expect(LargestLuckyNumber(324)).toBe(77);
    expect(LargestLuckyNumber(7)).toBe(7);
    expect(LargestLuckyNumber(4)).toBe(4);
    expect(LargestLuckyNumber(100)).toBe(77);
    expect(LargestLuckyNumber(1000)).toBe(777);
    expect(LargestLuckyNumber(50)).toBe(47);
  });

  test("should handle edge cases correctly", () => {
    expect(LargestLuckyNumber(1)).toBe(0);
    expect(LargestLuckyNumber(47)).toBe(47);
    expect(LargestLuckyNumber(44)).toBe(44);
    expect(LargestLuckyNumber(99)).toBe(77);
  });
});
