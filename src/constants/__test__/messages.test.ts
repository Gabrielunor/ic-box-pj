import { describe, it, expect } from "vitest";
import messages from "../messages";

describe("validationMessages", () => {
  it("should have the correct key-value pairs", () => {
    expect(messages.REQUIRED_FIELD).toBe("Preencha este campo");
    expect(messages.INVALID_DOCUMENT).toBe("Documento inválido!");
  });

  it("should have only the expected keys", () => {
    const keys = Object.keys(messages);
    expect(keys).toHaveLength(3);
    expect(keys).toContain("REQUIRED_FIELD");
    expect(keys).toContain("INVALID_DOCUMENT");
  });

  it("should return undefined for non-existent keys", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect((messages as any).UNKNOWN_KEY).toBeUndefined();
  });
});
