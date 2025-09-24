import recommendations from "@/constants/recommendations";
import titles from "@/constants/titles";
import { useICBoxPJStore } from "@/lib/store";
import { cn, formatAsBRL } from "@/lib/utils";

export const useCardDecision = () => {
  const decision = useICBoxPJStore((state) => state.result.decision);

  const getTextClasses = (code: string, version: string) => {
    if (version === "aprova") {
      return cn("text-xl font-bold print:text-sm", {
        "text-unavaliable-foreground font-normal": code === "0",
        "text-best-profile-foreground": code === "1",
        "text-good-profile-foreground": code === "2",
        "text-average-profile-foreground": code === "3",
        "text-high-risk-profile-foreground": code === "4",
      });
    }

    if (version === "pre-qualificacao") {
      return cn("text-xl font-bold print:text-sm", {
        "text-unavaliable-foreground font-normal": code === "0",
        "text-average-profile-foreground": code === "1",
        "text-high-risk-profile-foreground": code === "2",
      });
    }

    if (version === "gestao-limite") {
      return cn("text-lg font-bold print:text-sm text-unavaliable-foreground");
    }

    return "";
  };

  const getRecommendationHeaderText = (version: string) => {
    if (version === "gestao-limite") {
      return "";
    } else {
      return "Nossa recomendação é:";
    }
  };

  const getRecommendation = (code: string, version: string) => {
    if (version !== "gestao-limite") {
      return (
        <>
          <h2 className={getTextClasses(code, version)}>
            {
              // @ts-expect-error As opções para o pre-qual só vão até 3, conforme retorno do BFF
              recommendations[version][code]
            }
          </h2>
        </>
      );
    } else {
      return (
        <div className="flex flex-col">
          {code === "0" && (
            <span className="text-sm text-secondary-foreground">
              {titles["gestao-limite"][0]}
            </span>
          )}
          <h2 className={getTextClasses(code, version)}>
            {decision.message.at(0)}
          </h2>
          {code !== "0" && (
            <p className="text-lg font-normal text-unavaliable-foreground">
              {formatAsBRL(decision?.limit)}
            </p>
          )}
        </div>
      );
    }
  };

  return { getTextClasses, getRecommendationHeaderText, getRecommendation };
};
