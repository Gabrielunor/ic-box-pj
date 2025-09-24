type ScriptProvider = "dynatrace";

export const injectScript = (scriptProvider: ScriptProvider): void => {
  switch (scriptProvider) {
    case "dynatrace":
      const script = document.createElement("script");
      script.src =
        "https://dok.js-cdn.dynatrace.com/jstag/17fd4b29df0/bf13338hcr/6b3f500e2c39166e_complete.js";
      script.crossOrigin = "anonymous";
      document.head.prepend(script);
      break;
    default:
      break;
  }
};
