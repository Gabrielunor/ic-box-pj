export const getDefineUrl = (): string => {
  const hostname = window.location.hostname;
  const environments = {
    dev: "https://cliente-dev.bvsnet.com.br/produto/pj-define-limite-positivo",
    hom: "https://cliente-hom.bvsnet.com.br/produto/pj-define-limite-positivo",
    prod: "https://cliente.bvsnet.com.br/produto/pj-define-limite-positivo",
  };

  const environment =
    hostname.includes("localhost") || hostname.includes("dev")
      ? "dev"
      : hostname.includes("hom")
      ? "hom"
      : "prod";

  return environments[environment];
};
