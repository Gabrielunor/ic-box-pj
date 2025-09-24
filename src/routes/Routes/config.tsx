import HealthCheckPage from "@/components/pages/HealthCheckPage";
import NotFoundPage from "@/components/pages/NotFoundPage";
import { routes } from "@/constants/routes";

const config = [
  ...Object.entries(routes).map(([, path]) => ({
    path,
    protected: true,
  })),
  { path: "/bvs-health", element: <HealthCheckPage /> },
  { path: "*", element: <NotFoundPage /> },
];

export default config;
