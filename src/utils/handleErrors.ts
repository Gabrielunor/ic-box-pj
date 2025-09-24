import { ResponseError } from "@/lib/store/types";

export const handleErrors = (
  status: number | undefined,
  message?: string
): ResponseError | undefined => {
  switch (status) {
    case 204:
      return {
        status: 523,
        message: "Documento não encontrado na base.",
      };
    case 400:
      return {
        status,
        message: message,
      };
    case 401:
      return {
        status,
        message: "Consulta não autorizada, faça novamente o login.",
      };
    case 403: {
      return {
        status,
        message:
          "A consulta não pode ser realizada. A aplicação não possui permissão suficiente.",
      };
    }
    case 404:
      return {
        status,
        message: "Documento não encontrado na base.",
      };
    case 422:
      return {
        status,
        message: "As informações do relatório não puderam ser processadas.",
      };
    case 503:
      return {
        status,
        message: "Serviço indisponível. Tente novamente mais tarde.",
      };
    case 0:
    default:
      return {
        status: 500,
        message: "Erro desconhecido, tente novamente mais tarde.",
      };
  }
};
