import ApplicationIsLoading from "@/components/features/ApplicationIsLoading";
import InvalidSession from "@/components/features/InvalidSession";
import { useICBoxPJStore } from "@/lib/store";
import { getProductVersion } from "@/utils/getProductVersion";
import { PropsWithChildren, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const authToken = useICBoxPJStore((state) => state.authToken);
  const setAuthToken = useICBoxPJStore((state) => state.setAuthToken);
  const setVersion = useICBoxPJStore((state) => state.setVersion);

  const [params] = useSearchParams();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    setAuthToken(params.get("auth_token") || "");
    setVersion(getProductVersion());
    setIsInitialized(true);
  }, [params, setAuthToken, setVersion]);

  if (!isInitialized) return <ApplicationIsLoading />;

  return !authToken ? <InvalidSession /> : children;
};

export default ProtectedRoute;
