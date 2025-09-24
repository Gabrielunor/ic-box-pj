const HealthCheckPage = () => {
  return JSON.stringify({
    status: "UP",
    groups: ["liveness", "readiness"],
  });
};

export default HealthCheckPage;
