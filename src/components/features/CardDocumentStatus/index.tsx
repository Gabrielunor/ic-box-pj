import Card from "@/components/ui/card";
import { useICBoxPJStore } from "@/lib/store";

const CardDocumentStatus = () => {
  const { situation } = useICBoxPJStore((state) => state.result?.summary);
  return (
    <Card className="w-1/3 p-4 text-secondary-foreground border border-border">
      <div>
        <p className="text-sm">Situação do CNPJ</p>
        <h2 role="heading" className="text-lg text-foreground font-bold">
          {situation ? situation.toUpperCase() : "-"}
        </h2>
      </div>
    </Card>
  );
};

export default CardDocumentStatus;
