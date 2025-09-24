import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const formatAsBRL = (value: string | number | undefined): string => {
  if (typeof value === "undefined") {
    return "-"; // Return "-" if value is undefined
  }

  // Handle the case where value is "-"
  if (value === "-") {
    return "-"; // Just return "-" as it is
  }

  // Convert value to number, handle invalid cases by returning an empty string
  const numericValue =
    typeof value === "string"
      ? parseFloat(value.replace(".", "").replace(",", "."))
      : value;

  if (isNaN(numericValue)) {
    return ""; // Return an empty string if value is not a valid number
  }

  // Format the number using Brazilian currency format
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(numericValue);
};
