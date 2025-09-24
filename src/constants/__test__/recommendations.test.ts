import { describe, it, expect } from "vitest";
import recommendations from "../recommendations";

describe("recommendations", () => {
  it("should have the correct key-value pairs", () => {
    expect(recommendations["aprova"]["0"]).toBe("Sem recomendação disponível.");
    expect(recommendations["aprova"]["1"]).toBe("APROVAR");
    expect(recommendations["aprova"]["2"]).toBe("APROVAR");
    expect(recommendations["aprova"]["3"]).toBe("AVALIAR COM CAUTELA");
    expect(recommendations["aprova"]["4"]).toBe("REPROVAR");
  });

  it("should have only the expected keys", () => {
    const keys = Object.keys(recommendations);
    expect(keys).toHaveLength(2);
    expect(keys).toContain("aprova");
    expect(keys).toContain("pre-qualificacao");
  });

  it("should return undefined for non-existent keys", () => {
    //@ts-expect-error testint undefined values
    expect(recommendations["400"]).toBeUndefined();
    //@ts-expect-error testint undefined values
    expect(recommendations["500"]).toBeUndefined();
  });
});
