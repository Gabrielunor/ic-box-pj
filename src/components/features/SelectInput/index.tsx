import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
  ControllerRenderProps,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import { SelectProps } from "./types";

export default function SelectInput({ name, label, data }: SelectProps) {
  const { control } = useFormContext();
  const handleChange = (
    field: ControllerRenderProps<FieldValues, string>,
    value: string
  ) => {
    field.onChange(value);
  };

  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <div className="flex flex-row justify-between items-center h-4 w-80">
            <FormLabel className="text-card-foreground">{label}</FormLabel>
            <FormMessage />
          </div>
          <FormControl>
            <Select
              value={field.value}
              onValueChange={(value: string) => handleChange(field, value)}
            >
              <SelectTrigger
                className={cn("w-80", {
                  "border-destructive": control.getFieldState(name)?.error,
                })}
              >
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                {data.map((item, index) =>
                  Object.entries(item).map(([key, value]) => (
                    <SelectItem key={index} value={key}>
                      {value}
                    </SelectItem>
                  ))
                )}
              </SelectContent>
            </Select>
          </FormControl>
        </FormItem>
      )}
    ></FormField>
  );
}
