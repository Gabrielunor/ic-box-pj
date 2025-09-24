import { routes } from "@/constants/routes";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import config from "../config"; // assuming the file is saved as routesConfig

describe("Routes Configuration", () => {
  it("should generate protected routes from the routes constant", () => {
    const expectedRoutes = Object.entries(routes).map(([, path]) => ({
      path,
      protected: true,
    }));

    // @ts-expect-error
    const protectedRoutes = config.filter((route) => route.protected === true);

    expect(protectedRoutes).toEqual(expectedRoutes);
  });

  it("should include the HealthCheckPage for the /bvs-health path", () => {
    const healthRoute = config.find((route) => route.path === "/bvs-health");

    expect(healthRoute).toBeDefined();
    // @ts-expect-error
    expect(healthRoute?.element).toBeDefined();

    // Render the HealthCheckPage component to verify
    // @ts-expect-error
    const { container } = render(healthRoute.element);
    expect(container).toBeDefined();
  });

  it("should include the NotFoundPage for unknown paths", () => {
    const notFoundRoute = config.find((route) => route.path === "*");

    expect(notFoundRoute).toBeDefined();
    // @ts-expect-error
    expect(notFoundRoute?.element).toBeDefined();

    // Render the NotFoundPage component to verify
    // @ts-expect-error
    const { container } = render(notFoundRoute.element);
    expect(container).toBeDefined();
  });
});
