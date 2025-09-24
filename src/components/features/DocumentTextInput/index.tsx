import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";
import InputMask from "react-input-mask";
import { useCNPJInput } from "./hooks";

const DocumentTextInput = () => {
  const { handleBlur, handleFocus, handleKeyPress } = useCNPJInput();

  const { control, setValue } = useFormContext();

  return (
    <FormField
      control={control}
      name="document"
      render={({ field }) => (
        <FormItem>
          <div className="flex flex-row justify-between items-center h-4 w-80">
            <FormLabel className="text-card-foreground">
              Insira o CNPJ*
            </FormLabel>
            <FormMessage />
          </div>
          <FormControl>
            <InputMask
              mask="99.999.999/9999-99"
              value={field.value}
              onChange={field.onChange}
              onBlur={(e) => handleBlur(e, field, setValue)}
              onFocus={handleFocus}
              onKeyDown={handleKeyPress}
            >
              {
                // @ts-expect-error As docs
                (inputProps) => (
                  <Input
                    role="textbox"
                    placeholder="ex: 11.111.111-1111/11"
                    className={cn("w-80", {
                      "border-destructive":
                        control.getFieldState("document")?.error,
                    })}
                    {...inputProps}
                  />
                )
              }
            </InputMask>
          </FormControl>
          <FormDescription ref={null} className="text-card-foreground">
            *Campo obrigatório
          </FormDescription>
        </FormItem>
      )}
    />
  );
};

export default DocumentTextInput;
