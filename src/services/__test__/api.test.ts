import MockAdapter from "axios-mock-adapter";
import { AxiosError } from "axios";

describe("API tests", () => {
  it("should set loading state to true when request is made", async () => {
    const { api } = await import("@/services/api");
    const { useICBoxPJStore } = await import("@/lib/store");
    const mockSetState = vi.spyOn(useICBoxPJStore, "setState");

    const mock = new MockAdapter(api);
    mock.onGet("/fake-endpoint").reply(200);

    const requestInterceptor = api.interceptors.request.use((config) => {
      useICBoxPJStore.setState({ loading: true });
      return config;
    });

    await api.get("/fake-endpoint");

    expect(mockSetState).toHaveBeenCalledWith({ loading: true });

    api.interceptors.request.eject(requestInterceptor);
    mock.restore();
  });

  it("should set loading state to false when request is finished", async () => {
    const { api } = await import("@/services/api");
    const { useICBoxPJStore } = await import("@/lib/store");
    const mockSetState = vi.spyOn(useICBoxPJStore, "setState");

    const mock = new MockAdapter(api);
    mock.onGet("/fake-endpoint").reply(200);

    const requestInterceptor = api.interceptors.request.use((config) => {
      useICBoxPJStore.setState({ loading: false });
      return config;
    });

    await api.get("/fake-endpoint");

    expect(mockSetState).toHaveBeenCalledWith({ loading: false });

    api.interceptors.request.eject(requestInterceptor);
    mock.restore();
  });

  it("should handle and reject request errors", async () => {
    const { api } = await import("@/services/api");
    const { useICBoxPJStore } = await import("@/lib/store");
    const mockSetState = vi.spyOn(useICBoxPJStore, "setState");

    const mock = new MockAdapter(api);
    mock.onGet("/fake-endpoint").networkError();

    const requestInterceptor = api.interceptors.request.use(
      (config) => config,
      (error) => {
        useICBoxPJStore.setState({ loading: false });
        return Promise.reject(error);
      }
    );

    const error = new AxiosError("Network Error");
    await expect(api.get("/fake-endpoint")).rejects.toThrow(error);

    expect(mockSetState).toHaveBeenCalledWith({ loading: false });

    api.interceptors.request.eject(requestInterceptor);
    mock.restore();
  });
});
