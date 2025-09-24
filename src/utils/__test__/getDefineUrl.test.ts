import { getDefineUrl } from "../getDefineUrl";

const setHostname = (hostname: string) => {
  Object.defineProperty(window, "location", {
    value: { hostname },
    writable: true,
  });
};

describe("getDefineUrl", () => {
  it("returns dev URL when hostname includes localhost", () => {
    setHostname("localhost");
    expect(getDefineUrl()).toBe(
      "https://cliente-dev.bvsnet.com.br/produto/pj-define-limite-positivo"
    );
  });

  it("returns dev URL when hostname includes dev", () => {
    setHostname("dev.example.com");
    expect(getDefineUrl()).toBe(
      "https://cliente-dev.bvsnet.com.br/produto/pj-define-limite-positivo"
    );
  });

  it("returns hom URL when hostname includes hom", () => {
    setHostname("hom.example.com");
    expect(getDefineUrl()).toBe(
      "https://cliente-hom.bvsnet.com.br/produto/pj-define-limite-positivo"
    );
  });

  it("returns production URL when hostname does not include localhost, dev, or hom", () => {
    setHostname("example.com");
    expect(getDefineUrl()).toBe(
      "https://cliente.bvsnet.com.br/produto/pj-define-limite-positivo"
    );
  });
});
