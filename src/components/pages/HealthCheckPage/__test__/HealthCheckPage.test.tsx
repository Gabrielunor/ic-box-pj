import HealthCheckPage from "..";
it("should have an empty groups array when invoked", () => {
  // Act
  const result = JSON.parse(HealthCheckPage());

  // Assert
  expect(result.groups).toEqual(["liveness", "readiness"]);
});
