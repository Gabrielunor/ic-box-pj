import Card from "@/components/ui/card";
import { useICBoxPJStore } from "@/lib/store";
import { cnpj } from "cpf-cnpj-validator";

const CardDocument = () => {
  const { document, name } = useICBoxPJStore((state) => state.result.summary);

  return (
    <Card className="w-2/3 p-4 print:whitespace-normal border border-border">
      <div className="flex flex-row">
        <div className="w-60 print:w-40">
          <p className="text-secondary-foreground text-sm">CNPJ</p>
          <h2 className="text-lg text-foreground print:text-sm">
            {cnpj.format(document.padStart(14, "0"))}
          </h2>
        </div>
        <div>
          <p className="text-secondary-foreground text-sm">
            {name ? "Razão Social" : ""}
          </p>
          <h2 className="text-lg text-foreground print:text-sm">
            {name ? name : ""}
          </h2>
        </div>
      </div>
    </Card>
  );
};

export default CardDocument;
