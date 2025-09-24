import { RouteKeys } from "@/constants/routes";

export const getProductVersion = (): RouteKeys => {
  return window.location.pathname.split("/").at(2) as RouteKeys;
};
