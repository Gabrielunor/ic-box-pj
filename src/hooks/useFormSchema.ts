import messages from "@/constants/messages";
import { z } from "zod";
import { cnpj } from "cpf-cnpj-validator";
import { useICBoxPJStore } from "@/lib/store";

export type FormDefinition = {
  document: string;
};

export const useFormSchema = () => {
  const version = useICBoxPJStore.getState().version;

  const searchFormSchema = z.object({
    document: z
      .string()
      .min(1, messages.REQUIRED_FIELD)
      .refine((doc) => cnpj.isValid(doc), {
        message: messages.INVALID_DOCUMENT,
      }),
    creditOperation: z.string().optional(),
    riskLevel: z.string().optional(),
  });

  const searchFormSchemaBasedOnVersion = () => {
    if (version === "pre-qualificacao") {
      return searchFormSchema.extend({
        creditOperation: z.string({ message: messages.REQUIRED_SELECT }),
        riskLevel: z.string({ message: messages.REQUIRED_SELECT }),
      });
    }

    return searchFormSchema;
  };

  return { searchFormSchemaBasedOnVersion } as const;
};
