import { Button } from "@/components/ui/button";
import { useActionButtons } from "./hooks";

const ActionButtons = () => {
  const { handlePrint, handleExportPdf, handleNewQuery } = useActionButtons();

  return (
    <div className="flex flex-row justify-end gap-4 print:hidden">
      {/* <Button variant="ghost">Ajude-nos a melhorar</Button> */}
      <Button variant="outline" onClick={handlePrint}>
        Imprimir
      </Button>
      <Button variant="outline" onClick={handleExportPdf}>
        Salvar PDF
      </Button>
      <Button onClick={handleNewQuery}>Realizar nova consulta</Button>
    </div>
  );
};

export default ActionButtons;
