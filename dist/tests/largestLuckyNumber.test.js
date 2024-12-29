"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Jest test suite for largestLuckyNumber function
const LargestLuckyNumber_1 = __importDefault(require("../components/LargestLuckyNumber"));
describe("largestLuckyNumber", () => {
    test("should return the largest lucky number less than or equal to the given number", () => {
        expect((0, LargestLuckyNumber_1.default)(854)).toBe(777);
        expect((0, LargestLuckyNumber_1.default)(7744)).toBe(7744);
        expect((0, LargestLuckyNumber_1.default)(475)).toBe(474);
        expect((0, LargestLuckyNumber_1.default)(324)).toBe(77);
        expect((0, LargestLuckyNumber_1.default)(7)).toBe(7);
        expect((0, LargestLuckyNumber_1.default)(4)).toBe(4);
        expect((0, LargestLuckyNumber_1.default)(100)).toBe(77);
        expect((0, LargestLuckyNumber_1.default)(1000)).toBe(777);
        expect((0, LargestLuckyNumber_1.default)(50)).toBe(47);
    });
    test("should handle edge cases correctly", () => {
        expect((0, LargestLuckyNumber_1.default)(1)).toBe(0);
        expect((0, LargestLuckyNumber_1.default)(47)).toBe(47);
        expect((0, LargestLuckyNumber_1.default)(44)).toBe(44);
        expect((0, LargestLuckyNumber_1.default)(99)).toBe(77);
    });
});
