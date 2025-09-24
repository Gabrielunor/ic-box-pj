export type RouteKeys = "aprova" | "pre-qualificacao" | "gestao-limite";

export const routes: Record<RouteKeys, string> = {
  "pre-qualificacao": "/pre-qualificacao",
  aprova: "/aprova",
  "gestao-limite": "/gestao-limite",
};
