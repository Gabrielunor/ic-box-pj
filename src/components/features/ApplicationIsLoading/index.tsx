import Spinner from "@/components/ui/spinner";
import { cn } from "@/lib/utils";

const ApplicationIsLoading = () => {
  return (
    <div
      data-testid="application-loading-overlay"
      role="alert"
      className={cn(
        "absolute top-0 left-0 transition-all duration-700 w-full bg-white/70 grid h-screen place-items-center"
      )}
    >
      <div className="flex">
        <Spinner />
        <h1>Por favor, aguarde enquanto a aplicação é carregada...</h1>
      </div>
    </div>
  );
};

export default ApplicationIsLoading;
