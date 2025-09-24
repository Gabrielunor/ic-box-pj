import moment from "moment";

const ConfidentiallityText = () => {
  const momentDate = moment();
  const day = momentDate.format("DD");
  const month = momentDate.format("MMM").toLocaleLowerCase();
  const year = momentDate.format("YY");
  const responseTime = momentDate.format("HH:mm:ss");

  return (
    <div className="text-card-foreground text-xs mt-8 border-b-[1px] border-b-border pb-6 mb-6">
      <p className="mb-2">
        Esta análise foi baseada na validação de informações existentes na{" "}
        <strong>Boa Vista SCPC</strong> e é de inteira responsabilidade do
        usuário e da empresa a decisão de aprovar/reprovar a negociação.
      </p>
      <p className="font-bold mb-3">
        *A decisão de negociação é de total responsabilidade do credor e de
        acordo com sua própria política de crédito.
      </p>
      <p className="font-bold">
        {`INFORMAÇÕES CONFIDENCIAIS - SÃO PAULO/SP, ${day}.${month}.${year} ${responseTime} NET 9999`}
      </p>
    </div>
  );
};

export default ConfidentiallityText;
