import {
  AlertDialogFooter,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useICBoxPJStore } from "@/lib/store";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from "@radix-ui/react-alert-dialog";
import { useDialog } from "./hooks";
import { cn } from "@/lib/utils";

const Dialog = () => {
  const error = useICBoxPJStore((state) => state.error);
  const { handleClose } = useDialog();
  return (
    <div
      className={cn(
        "absolute top-0 left-0 transition-all duration-700 w-full bg-black/60 grid h-screen place-items-center",
        {
          hidden: !!error?.message === false,
        }
      )}
    >
      <AlertDialog open={!!error?.message}>
        <AlertDialogContent className="bg-white w-1/3 text-secondary-foreground p-8 rounded-xs">
          <AlertDialogHeader>
            <span>
              <AlertDialogTitle
                data-testid="dialog-title"
                className="text-center text-foreground font-bold mb-4"
              >
                ERRO AO REALIZAR A CONSULTA
              </AlertDialogTitle>
              <AlertDialogDescription
                data-testid="dialog-description"
                className="text-center text-sm text-foreground mb-4"
              >
                A consulta retornou um erro:
                <span
                  data-testid="dialog-clode"
                  className="mt-2 font-bold m-2 block"
                >
                  CODE: {error?.status}
                </span>
                <span data-testid="dialog-message" className="mb-4 block">
                  {error?.message}
                </span>
              </AlertDialogDescription>
            </span>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex sm:justify-center">
            <AlertDialogAction asChild>
              <Button data-testid="dialog-close-button" onClick={handleClose}>
                Fechar
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Dialog;
