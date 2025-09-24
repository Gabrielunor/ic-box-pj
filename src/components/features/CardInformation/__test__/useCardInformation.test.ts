import { describe, expect, it } from "vitest";
import { RouteKeys } from "@/constants/routes"; // Ensure this path is correct
import { useCardInformation } from "../useCardInformation";

describe("useCardInformation", () => {
  const { getTextClasses } = useCardInformation();

  const expectTextClasses = (version: RouteKeys, expectedClasses: string[]) => {
    expectedClasses.forEach((expectedClass, index) => {
      expect(getTextClasses(index.toString(), version)).toContain(
        expectedClass
      );
    });
  };

  describe("getTextClasses", () => {
    it("should return correct classes for 'aprova' version", () => {
      expectTextClasses("aprova", [
        "text-unavaliable-foreground/50",
        "text-best-profile-foreground",
        "text-good-profile-foreground",
        "text-average-profile-foreground",
        "text-high-risk-profile-foreground",
      ]);
    });

    it("should return correct classes for 'pre-qualificacao' version", () => {
      expectTextClasses("pre-qualificacao", [
        "text-unavaliable-foreground/50",
        "text-average-profile-foreground",
        "text-high-risk-profile-foreground",
      ]);
    });

    it("should return an empty string for unknown version", () => {
      expect(getTextClasses("1", "unknown" as RouteKeys)).toBe("");
    });
  });

  describe("getDefinePositivoSuggestion", () => {
    it("should return suggestion for 'pre-qualificacao' version", () => {
      // Uncomment and implement test case if needed
      // const suggestion = getDefinePositivoSuggestion("pre-qualificacao");
      // expect(suggestion).toContain("Para informações mais detalhadas");
      // expect(suggestion).toContain("Define Positivo");
    });

    it("should return undefined for non-pre-qualificacao version", () => {
      // Uncomment and implement test case if needed
      // const suggestion = getDefinePositivoSuggestion("aprova");
      // expect(suggestion).toBeUndefined();
    });
  });
});
