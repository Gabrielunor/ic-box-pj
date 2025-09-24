import { describe, it, expect } from "vitest";
import { useCardDecision } from "@/components/features/CardDecision/useCardDecision"; // Adjust the import path as needed

describe("useCardDecision", () => {
  const { getTextClasses } = useCardDecision();

  const expectTextClasses = (
    version: string,
    _profile: string,
    expectedClasses: string[]
  ) => {
    expectedClasses.forEach((expectedClass, index) => {
      expect(getTextClasses(index.toString(), version)).toContain(
        expectedClass
      );
    });
  };

  describe("getTextClasses", () => {
    it("should return correct classes for 'aprova' version", () => {
      expectTextClasses("aprova", "aprova", [
        "text-unavaliable-foreground font-normal",
        "text-best-profile-foreground",
        "text-good-profile-foreground",
        "text-average-profile-foreground",
        "text-high-risk-profile-foreground",
      ]);
    });

    it("should return correct classes for 'pre-qualificacao' version", () => {
      expectTextClasses("pre-qualificacao", "pre-qualificacao", [
        "text-unavaliable-foreground font-normal",
        "text-average-profile-foreground",
        "text-high-risk-profile-foreground",
      ]);
    });

    it("should return an empty string for an unknown version", () => {
      expect(getTextClasses("1", "unknown")).toBe("");
    });

    it("should return correct string for an unknown code in 'aprova'", () => {
      expect(getTextClasses("99", "aprova")).toBe(
        "text-xl font-bold print:text-sm"
      );
    });

    it("should return correct string for an unknown code in 'pre-qualificacao'", () => {
      expect(getTextClasses("99", "pre-qualificacao")).toBe(
        "text-xl font-bold print:text-sm"
      );
    });
  });
});
