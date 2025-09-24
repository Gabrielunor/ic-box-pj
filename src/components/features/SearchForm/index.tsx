import Card from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useSearchForm } from "@/hooks/useSearchForm";
import { useICBoxPJStore } from "@/lib/store";
import DocumentTextInput from "../DocumentTextInput";
import FormDisclaimer from "../FormDisclaimer";
import SearchButton from "../SearchButton";
import SelectInput from "../SelectInput";

const SearchForm = () => {
  const { form, productSelectData, apetiteSelectData, handleFormSubmit } =
    useSearchForm();
  const version = useICBoxPJStore((state) => state.version);

  return (
    <Card className="mt-2 p-0 pb-8 rounded-none shadow-none">
      <Form {...form}>
        <form role="form" onSubmit={form.handleSubmit(handleFormSubmit)}>
          <div className="flex flex-row justify-between">
            <DocumentTextInput />
            {version === "pre-qualificacao" && (
              <>
                <SelectInput
                  name="creditOperation"
                  label="Operação de Crédito"
                  data={productSelectData}
                />
                <SelectInput
                  name="riskLevel"
                  label="Apetite ao risco"
                  data={apetiteSelectData}
                />
              </>
            )}
          </div>
          <div className="flex flex-row justify-between bg-muted p-6 rounded-xs mt-8 space-x-40">
            <FormDisclaimer />
            <SearchButton />
          </div>
        </form>
      </Form>
    </Card>
  );
};

export default SearchForm;
