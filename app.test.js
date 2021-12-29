const { macsByRadio } = require("./app");
const probes = require("./probes.json");

describe("macsByRadio", () => {
  // Conta radios
  it("Conta quantidade de radios", () => {
    const result = macsByRadio(probes);

    expect(result.length).toEqual(4);
  });

  // Confere se os radios estão cadastrados
  it("Verifica os radios presentes", () => {
    const result = macsByRadio(probes);

    expect(result.find(el => el.radio === "Rd 1")).toBeDefined();
    expect(result.find(el => el.radio === "Rd 2")).toBeDefined();
    expect(result.find(el => el.radio === "Rd 3")).toBeDefined();
    expect(result.find(el => el.radio === "Rd 4")).toBeDefined();
  });

  // Confere se os radios estão cadastrados
  it("Verifica os radios ausentes", () => {
    const result = macsByRadio(probes);

    expect(result.find(el => el.radio === "Rd 5")).toBeUndefined();
  });

  // Conta qtde de macs por radio
  it("Conta quantidade macs por radio", () => {
    const result = macsByRadio(probes);

    expect(result.find(el => el.radio === "Rd 1").macs.length).toEqual(3);
    expect(result.find(el => el.radio === "Rd 2").macs.length).toEqual(2);
    expect(result.find(el => el.radio === "Rd 3").macs.length).toEqual(2);
    expect(result.find(el => el.radio === "Rd 4").macs.length).toEqual(1);
  });

  // Verifica o retorno quando não se entra com array de probes
  it("Verifica o retorno quando não se entra com array de probes", () => {
    const result = macsByRadio(null);

    expect(result).toBeDefined();
    expect(result.length).toEqual(0);
  });
});