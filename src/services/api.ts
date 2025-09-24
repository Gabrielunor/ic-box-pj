import { useICBoxPJStore } from "@/lib/store";
import { handleErrors } from "@/utils/handleErrors";
import axios, { AxiosError } from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_APIGEE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// REQUEST INTERCEPTOR
api.interceptors.request.use(
  (request) => {
    useICBoxPJStore.setState({ loading: true });
    return request;
  },
  (error: AxiosError) => {
    useICBoxPJStore.setState({ loading: false });
    const e = handleErrors(
      error.response?.status || error.request?.status,
      error.response?.statusText ||
        error.request?.statusText ||
        "Erro desconhecido."
    );
    useICBoxPJStore.getState().setError(e);
    return Promise.reject(error);
  }
);

// RESPONSE INTERCEPTOR
api.interceptors.response.use(
  (response) => {
    useICBoxPJStore.setState({ loading: false });
    return response;
  },
  (error: AxiosError) => {
    const e = handleErrors(
      error.response?.status || error.request?.status,
      error.response?.statusText ||
        error.request?.statusText ||
        "Erro desconhecido."
    );
    useICBoxPJStore.getState().setError(e);
    useICBoxPJStore.setState({ loading: false });
    return Promise.reject(error);
  }
);
