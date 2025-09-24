import { describe, it, expect } from "vitest";
import { RouteKeys, routes } from "../routes";

describe("routes object", () => {
  it("should map route keys to correct paths", () => {
    const expectedRoutes: Record<RouteKeys, string> = {
      "pre-qualificacao": "/pre-qualificacao",
      aprova: "/aprova",
      "gestao-limite": "/gestao-limite",
    };

    expect(routes).toEqual(expectedRoutes);
  });

  it("should have the correct path for 'pre-qualificacao'", () => {
    expect(routes["pre-qualificacao"]).toBe("/pre-qualificacao");
  });

  it("should have the correct path for 'aprova'", () => {
    expect(routes["aprova"]).toBe("/aprova");
  });

  it("should have the correct path for 'gestao-limite'", () => {
    expect(routes["gestao-limite"]).toBe("/gestao-limite");
  });
});
