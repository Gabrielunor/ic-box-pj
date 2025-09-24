export const AprovaRecommendationContent = () => {
  return (
    <>
      <h1 className="text-primary text-xl mb-4">Recomendação</h1>
      <p className="mb-2">
        A Recomendação do Interconnect Box possui modelos de decisão
        pré-definidos, baseados na inteligência analítica da Equifax | Boa Vista
        que oferece recomendações claras e diretas, sem necessidade de análises
        complexas.
      </p>
      <p className="mb-2">
        É uma solução que indica se uma negociação é recomendável ou não a
        partir de 3 diferentes tipos de retorno de acordo com o perfil do
        documento consultado, sendo eles:
      </p>
      <p className="mb-2">
        <strong>Aprovar</strong> (Melhor Perfil ou Perfil bom),{" "}
        <strong>Avaliar com cautela</strong> (Perfil Mediano) e{" "}
        <strong>Reprovar</strong> (Perfil Arriscado).
      </p>
      <p className="mb-2">
        Caso não existam informações disponíveis em nossa base de dados
        suficientes para uma recomendação sobre o documento consultado, será
        apresentado o retorno "Sem recomendação disponível".
      </p>
      <p>
        Lembramos que a solução traz apenas uma sugestão, sendo de inteira
        responsabilidade do usuário e sua empresa a decisão de aprovar/reprovar
        a negociação.
      </p>
    </>
  );
};
