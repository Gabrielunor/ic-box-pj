import Card from "@/components/ui/card";
import titles from "@/constants/titles";
import { useICBoxPJStore } from "@/lib/store";
import { useCardInformation } from "./useCardInformation";

const CardInformation = () => {
  const { message, code } = useICBoxPJStore((state) => state.result.decision);
  const version = useICBoxPJStore((state) => state.version);
  const { getDefinePositivoSuggestion, getTextClasses } = useCardInformation();

  return (
    <Card className="w-2/4 px-6 py-8 flex flex-col justify-items-center border border-border">
      {version !== "pre-qualificacao" && (
        <p className={getTextClasses(code, version)}>{titles[version][code]}</p>
      )}

      <p className="text-md print:text-sm text-foreground">{message.at(0)}</p>
      {code !== "0" ? getDefinePositivoSuggestion(version) : null}
    </Card>
  );
};

export default CardInformation;
