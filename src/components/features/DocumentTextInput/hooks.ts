import { cnpj } from "cpf-cnpj-validator";
import {
  ControllerRenderProps,
  FieldValues,
  UseFormSetValue,
} from "react-hook-form";

export const useCNPJInput = () => {
  const formatCNPJ = (document: string) => {
    return document ? document.replace(/\D/g, "").padStart(14, "0") : "";
  };
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement>,
    field: ControllerRenderProps<FieldValues, "document">,
    setValue: UseFormSetValue<FieldValues>
  ) => {
    cnpj.isValid(formatCNPJ(e.target.value)) &&
      setValue("document", formatCNPJ(e.target.value), {
        shouldValidate: true,
      });
    field.onBlur();
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select();
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.currentTarget.blur();
      e.currentTarget.focus();
    }
  };

  return { formatCNPJ, handleBlur, handleFocus, handleKeyPress };
};
