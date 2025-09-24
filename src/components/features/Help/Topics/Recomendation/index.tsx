import { useEffect, useState } from "react";
import { HelpTopicProps } from "../../types";
import { AprovaRecommendationContent } from "./Aprova";
import { PreQualRecommendationContent } from "./PreQual";
import { GestaoLimiteRecommendationContent } from "./GestaoLimite";

const Recommendation = ({ variation }: HelpTopicProps) => {
  const [content, setContent] = useState<JSX.Element>(<></>);

  useEffect(() => {
    switch (variation) {
      case "aprova":
        setContent(<AprovaRecommendationContent />);
        break;
      case "pre-qualificacao":
        setContent(<PreQualRecommendationContent />);
        break;
      case "gestao-limite":
        setContent(<GestaoLimiteRecommendationContent />);
        break;
      default:
        setContent(<></>);
        break;
    }
  }, [variation]);

  return content;
};

export default Recommendation;
