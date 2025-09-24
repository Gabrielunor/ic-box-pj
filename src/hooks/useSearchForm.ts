import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormDefinition, useFormSchema } from "./useFormSchema";
import { useICBoxPJStore } from "@/lib/store";

export const useSearchForm = () => {
  const { searchFormSchemaBasedOnVersion } = useFormSchema();
  const getResult = useICBoxPJStore.getState().getResult;

  const form = useForm<FormDefinition>({
    defaultValues: {
      document: "",
    },
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: zodResolver(searchFormSchemaBasedOnVersion()),
  });

  const productSelectData = [
    { AberturaDeConta: "Abertura de Conta" },
    { CapitalDeGiro: "Capital de Giro" },
    { CartaoDeCredito: "Cartão de Crédito" },
  ] as {
    [key: string]: string;
  }[];

  const apetiteSelectData = [
    { Conservador: "Conservador" },
    { Arrojado: "Arrojado" },
    { UltraConservador: "Ultraconservador" },
  ] as {
    [key: string]: string;
  }[];

  const handleFormSubmit: SubmitHandler<FormDefinition> = (data) =>
    getResult(data);

  return {
    form,
    productSelectData,
    apetiteSelectData,
    handleFormSubmit,
  } as const;
};
