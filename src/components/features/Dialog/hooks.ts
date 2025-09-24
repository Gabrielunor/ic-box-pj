import { useICBoxPJStore } from "@/lib/store";
import { ResponseError } from "@/lib/store/types";

export const useDialog = () => {
  const setError = useICBoxPJStore((state) => state.setError);
  const handleClose = () => {
    setError({} as ResponseError);
  };
  return { handleClose };
};
