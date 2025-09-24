// import ActionButtons from "@/components/features/ActionButtons";
import AppHeader from "@/components/features/AppHeader";
import CardDecision from "@/components/features/CardDecision";
import CardDocument from "@/components/features/CardDocument";
import CardDocumentStatus from "@/components/features/CardDocumentStatus";
import CardInformation from "@/components/features/CardInformation";
import ConfidentiallityText from "@/components/features/ConfidentiallityText";
import Help from "@/components/features/Help";
import { useICBoxPJStore } from "@/lib/store";

const ResultsPage = () => {
  const version = useICBoxPJStore((state) => state.version);

  return (
    <div className="w-screen max-w-screen-ic mx-auto">
      <AppHeader />

      <div className="flex flex-row gap-6 mt-2 mb-6">
        <CardDocument />
        <CardDocumentStatus />
      </div>

      <div className="flex flex-row gap-6 mt-2">
        <CardDecision />
        {version !== "gestao-limite" && <CardInformation />}
      </div>

      <ConfidentiallityText />

      {/* <ActionButtons /> */}
      <Help />
    </div>
  );
};

export default ResultsPage;
