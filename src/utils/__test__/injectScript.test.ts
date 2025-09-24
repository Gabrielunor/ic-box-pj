import { describe, expect, it } from "vitest";
import { injectScript } from "../injectScript";

describe("injectScript", () => {
  beforeEach(() => {
    // Clear any previously added scripts
    document.head.innerHTML = "";
  });

  it("should inject a dynatrace script into the document head", () => {
    injectScript("dynatrace");

    const script = document.head.querySelector("script");

    expect(script).not.toBeNull();
    expect(script?.src).toBe(
      "https://dok.js-cdn.dynatrace.com/jstag/17fd4b29df0/bf13338hcr/6b3f500e2c39166e_complete.js"
    );
    expect(script?.crossOrigin).toBe("anonymous");
  });

  it("should not inject any script for an unknown script provider", () => {
    injectScript("unknown" as any); // Force unknown value

    const script = document.head.querySelector("script");

    expect(script).toBeNull(); // No script should be injected
  });
});
