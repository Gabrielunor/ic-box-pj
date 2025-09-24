import { RouteKeys } from "@/constants/routes";
import { cn } from "@/lib/utils";
import { getDefineUrl } from "@/utils/getDefineUrl";
import { Link } from "react-router-dom";

export const useCardInformation = () => {
  const getTextClasses = (code: string, version: RouteKeys) => {
    const baseClasses = "text-[1rem] font-bold mb-2";

    if (version === "aprova") {
      return cn(baseClasses, {
        "text-unavaliable-foreground/50": code === "0",
        "text-best-profile-foreground": code === "1",
        "text-good-profile-foreground": code === "2",
        "text-average-profile-foreground": code === "3",
        "text-high-risk-profile-foreground": code === "4",
      });
    }

    if (version === "pre-qualificacao") {
      return cn(baseClasses, {
        "text-unavaliable-foreground/50": code === "0",
        "text-average-profile-foreground": code === "1",
        "text-high-risk-profile-foreground": code === "2",
      });
    }

    if (version === "gestao-limite") {
      return cn(baseClasses, {
        "text-unavaliable-foreground/50": code === "0",
        "text-best-profile-foreground": code === "1",
        "text-good-profile-foreground": code === "2",
        "text-average-profile-foreground": code === "3",
        "text-high-risk-profile-foreground": code === "4" || code === "5",
      });
    }

    return "";
  };

  const getDefinePositivoSuggestion = (version: RouteKeys) => {
    return (
      version === "pre-qualificacao" && (
        <p className="mt-4 text-md">
          Para informações mais detalhadas, sugerimos consultar os produto da
          família{" "}
          <Link
            className="text-primary font-bold"
            to={getDefineUrl()}
            target="_blank"
          >
            Define Positivo
          </Link>
          .
        </p>
      )
    );
  };

  return {
    getTextClasses,
    getDefinePositivoSuggestion,
  };
};
