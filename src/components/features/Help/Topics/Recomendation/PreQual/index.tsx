export const PreQualRecommendationContent = () => {
  return (
    <>
      <h1 className="text-primary text-xl mb-4">Recomendação</h1>
      <p>
        Essa solução realiza a pré-qualificação dos seus clientes no topo do
        funil de crédito. Ao realizar a consulta, apresentamos 3 possíveis
        retornos, de acordo com o perfil do documento consultado, sendo eles:
      </p>
      <ul className="list-disc">
        <li className="mt-6">
          <strong>REPROVAR</strong>
          <p>
            Empresas com este perfil apresentam alto risco de inadimplência.
          </p>
        </li>
        <li className="mt-6">
          <strong>REQUER MAIS ANÁLISE</strong>
          <p>
            Recomendamos considerar a análise de outras informações, de acordo
            com os critérios e políticas internas.
          </p>
        </li>
        <li className="mt-6">
          <strong>SEM RECOMENDAÇÃO DISPONÍVEL</strong>
          <p>
            Não há informações suficientes para uma recomendação sobre o
            documento consultado.
          </p>
        </li>
      </ul>
      <p>
        Lembramos que a solução traz apenas uma sugestão, sendo de inteira
        responsabilidade do usuário e sua empresa a decisão de aprovar/reprovar
        a negociação.
      </p>
    </>
  );
};
