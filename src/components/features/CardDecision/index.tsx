import Card from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { useICBoxPJStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import ToggleButton from "../Help/ToggleButton";
import { useCardDecision } from "./useCardDecision";

const CardDecision = () => {
  const { code } = useICBoxPJStore((state) => state.result.decision);
  const version = useICBoxPJStore((state) => state.version);
  const { getRecommendationHeaderText, getRecommendation } = useCardDecision();

  return (
    <Card
      className={cn(
        "w-2/4 px-6 py-8 flex flex-row justify-between border border-border",
        {
          "w-full flex-row justify-between": version === "gestao-limite",
        }
      )}
    >
      <div className="flex flex-row">
        <div className="text-2xl text-foreground flex items-center gap-6">
          <Icon />
          <div className="flex flex-col align-center justify-between">
            <p
              data-testid="indicator-text"
              className={cn("text-xl", {
                hidden: code === "0",
              })}
            >
              {getRecommendationHeaderText(version)}
            </p>
            {getRecommendation(code, version)}
          </div>
        </div>
      </div>
      <ToggleButton contentId="recommendation" />
    </Card>
  );
};

export default CardDecision;
