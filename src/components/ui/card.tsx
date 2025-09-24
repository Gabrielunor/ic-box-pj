import { cn } from "@/lib/utils";
import { ComponentProps, PropsWithChildren } from "react";

type Card = PropsWithChildren & ComponentProps<"div">;

export const Card = ({ children, className }: Card) => {
  return (
    <div
      className={cn(
        "bg-card text-card-foreground text-sm shadow-md rounded-sm",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
