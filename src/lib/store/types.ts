import recommendations from "@/constants/recommendations";
import { RouteKeys } from "@/constants/routes";
import { FormDefinition } from "@/hooks/useFormSchema";

export type HelpTopics = "recommendation" | null;

export type Situation = "REGULAR" | "IRREGULAR";

export type Result = {
  summary: {
    name: string;
    document: string;
    situation: string;
  };
  decision: {
    code:
      | keyof (typeof recommendations)["aprova"]
      | keyof (typeof recommendations)["pre-qualificacao"];
    message: [];
    limit?: string;
  };
};

export type ResponseError = {
  status: number;
  message: string | undefined;
};

export type State = {
  loading: boolean;
  result: Result;
  version: RouteKeys;
  authToken: string | null;
  error: ResponseError;
  helpTopic: HelpTopics;
  isHelpActive: boolean;
};

export type Actions = {
  getResult: (data: FormDefinition) => void;
  clearResult: () => void;
  setVersion: (version: RouteKeys) => void;
  setAuthToken: (token: string | null) => void;
  setError: (error: ResponseError | undefined) => void;
  setHelpTopic: (contentId: HelpTopics) => void;
  toggleHelpActive: () => void;
};
