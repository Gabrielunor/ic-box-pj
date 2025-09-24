import ResultsPage from "@/components/pages/ResultsPage";
import SearchFormPage from "@/components/pages/SearchFormPage";
import { useICBoxPJStore } from "@/lib/store";
import ProtectedRoute from "./ProtectedRoute";

const useHandleProtection = () => {
  const result = useICBoxPJStore((state) => state.result);

  return (
    <ProtectedRoute>
      {Object.keys(result).length > 0 ? <ResultsPage /> : <SearchFormPage />}
    </ProtectedRoute>
  );
};

export default useHandleProtection;
