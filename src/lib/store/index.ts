import { api } from "@/services/api";
import { create } from "zustand";
import { Actions, ResponseError, Result, State } from "./types";
import { RouteKeys, routes } from "@/constants/routes";

export const useICBoxPJStore = create<State & Actions>()((set) => ({
  loading: false,
  result: {} as Result,
  version: "" as RouteKeys,
  setVersion: (version) => {
    set(() => ({
      version: version,
    }));
  },
  authToken: "",
  error: {} as ResponseError,
  setAuthToken: (token) => {
    set(() => ({
      authToken: token,
    }));
  },
  getResult: (data) => {
    api
      .request({
        method: "POST",
        url: `${routes[useICBoxPJStore.getState().version]}`,
        data,
        headers: {
          Authorization: `Bearer ${useICBoxPJStore.getState().authToken}`,
          client_id: import.meta.env.VITE_APIGEE_CLIENT,
          client_secret: import.meta.env.VITE_APIGEE_SECRET,
        },
      })
      .then((res) => {
        set(() => ({
          result: { ...res.data },
        }));
      });
  },
  clearResult: () => {
    set(() => ({ result: {} as Result }));
  },
  setError: (error) => {
    set(() => ({ error }));
  },
  helpTopic: null,
  setHelpTopic: (contentId) => {
    set(() => ({ helpTopic: contentId }));
  },
  isHelpActive: false,
  toggleHelpActive: () => {
    set(() => ({ isHelpActive: !useICBoxPJStore.getState().isHelpActive }));
  },
}));
