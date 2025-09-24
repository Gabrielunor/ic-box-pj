import AverageProfile from "@/assets/icons/average-profile.png";
import BestProfile from "@/assets/icons/best-profile.png";
import EvaluateProfile from "@/assets/icons/evaluate.png";
import GoodProfile from "@/assets/icons/good-profile.png";
import HighRiskProfile from "@/assets/icons/high-risk-profile.png";
import UnvaliableIcon from "@/assets/icons/unavaliable.png";
import { useIcon } from "@/hooks/useIcon";
import { describe, expect, it } from "vitest";

// Mock the imported icons with default keys
vi.mock("@/assets/icons/unavaliable.png", () => ({
  default: "UnvaliableIcon",
}));
vi.mock("@/assets/icons/best-profile.png", () => ({ default: "BestProfile" }));
vi.mock("@/assets/icons/evaluate.png", () => ({ default: "EvaluateProfile" }));
vi.mock("@/assets/icons/good-profile.png", () => ({ default: "GoodProfile" }));
vi.mock("@/assets/icons/high-risk-profile.png", () => ({
  default: "HighRiskProfile",
}));
vi.mock("@/assets/icons/average-profile.png", () => ({
  default: "AverageProfile",
}));
vi.mock("@/assets/icons/risk-profile.png", () => ({ default: "RiskProfile" }));

describe("useIcon hook", () => {
  const { getIcon, getBackgroundClasses } = useIcon();

  const expectIcons = (version: string, expectedIcons: string[]) => {
    expectedIcons.forEach((expectedIcon, index: any) => {
      expect(getIcon(index.toString(), version)).toBe(expectedIcon);
    });
  };

  const expectBackgroundClasses = (
    version: string,
    expectedClasses: string[]
  ) => {
    expectedClasses.forEach((expectedClass, index) => {
      expect(getBackgroundClasses(index.toString(), version)).toContain(
        expectedClass
      );
    });
  };

  describe("getIcon", () => {
    it("should return the correct icon for 'aprova' version", () => {
      expectIcons("aprova", [
        UnvaliableIcon,
        BestProfile,
        GoodProfile,
        AverageProfile,

        HighRiskProfile,
      ]);
    });

    it("should return the correct icon for 'pre-qualificacao' version", () => {
      expectIcons("pre-qualificacao", [
        UnvaliableIcon,
        EvaluateProfile,
        HighRiskProfile,
      ]);
    });

    it("should return the default for unsupported version and code", () => {
      expect(getIcon("1", "other-version")).toBe("");
    });
  });

  describe("getBackgroundClasses", () => {
    it("should return the correct background class for 'aprova' version", () => {
      expectBackgroundClasses("aprova", [
        "bg-unavaliable-foreground/10",
        "bg-best-profile-foreground/10",
        "bg-good-profile-foreground/10",
        "bg-average-profile-foreground/10",
        "bg-high-risk-profile-foreground/10",
      ]);
    });

    it("should return the correct background class for 'pre-qualificacao' version", () => {
      expectBackgroundClasses("pre-qualificacao", [
        "bg-unavaliable-foreground/10",
        "bg-average-profile-foreground/10",
        "bg-high-risk-profile-foreground/10",
      ]);
    });

    it("should return an empty string for unsupported version", () => {
      expect(getBackgroundClasses("1", "other-version")).toBe("");
    });
  });
});
