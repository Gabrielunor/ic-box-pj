import { describe, it, expect } from "vitest";
import titles from "../titles";

describe("titles object", () => {
  it("has the correct structure for 'aprova'", () => {
    expect(titles).toHaveProperty("aprova");
    expect(titles.aprova).toEqual({
      "0": "Sem recomendação",
      "1": "Melhor Perfil",
      "2": "Perfil Bom",
      "3": "Perfil Mediano",
      "4": "Perfil Arriscado",
    });
  });

  it("has the correct structure for 'pre-qualificacao'", () => {
    expect(titles).toHaveProperty("pre-qualificacao");
    expect(titles["pre-qualificacao"]).toEqual({
      "0": "Sem recomendação",
      "1": "CNPJ dentro do perfil",
      "2": "CNPJ fora de perfil",
    });
  });

  it("returns the expected title for given keys", () => {
    // Check specific keys and their values
    expect(titles.aprova["1"]).toBe("Melhor Perfil");
    expect(titles["pre-qualificacao"]["2"]).toBe("CNPJ fora de perfil");
    expect(titles.aprova["0"]).toBe("Sem recomendação");
  });

  it("does not have unexpected keys", () => {
    const allowedKeys = ["aprova", "pre-qualificacao"];
    expect(Object.keys(titles)).toEqual(allowedKeys);
  });
});
