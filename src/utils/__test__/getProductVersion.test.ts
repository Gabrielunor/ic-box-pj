import { describe, it, expect } from "vitest";
import { getProductVersion } from "../getProductVersion";

const setPathname = (pathname: string) => {
  Object.defineProperty(window, "location", {
    value: { pathname },
    writable: true,
  });
};

describe("getProductVersion", () => {
  it('should return "aprova" when the URL path contains it as the third segment', () => {
    setPathname("/front-icbox-pj/aprova/");
    expect(getProductVersion()).toBe("aprova");
  });

  it('should return "recompra" when the URL path contains it as the third segment', () => {
    setPathname("/front-icbox-pj/recompra/");
    expect(getProductVersion()).toBe("recompra");
  });

  it('should return "pre-qualificacao" when the URL path contains it as the third segment', () => {
    setPathname("/front-icbox-pj/pre-qualificacao/");
    expect(getProductVersion()).toBe("pre-qualificacao");
  });

  it("should return undefined if the third segment does not match any RouteKeys", () => {
    setPathname("/front-icbox-pj/");
    expect(getProductVersion()).toBe("");
  });
});
