import type { HubspotFormConfig, InitConfig } from "./Config.types";
import ConfiguraAdvance from "./configura-advance/ConfiguraAdvance.svelte";
import Empresa from "./empresa/Empresa.svelte";
import Floorbed1 from "./floorbed1/Floorbed1.svelte";

/**
 * Floorbed1
 */
export const AccoraFloorbedOne = (
  targetId: string,
  config: InitConfig,
  hubspotFormConfig: HubspotFormConfig
) => {
  const app = new Floorbed1({
    target: document.getElementById(targetId),
    props: {
      config: {
        mainTitle: "Customize your Accora Floorbed 1",
        bookADemoHref: "https://us.accora.care/book-a-demo",
        ...config,
        hubspotFormConfig,
      },
    },
  });

  return app;
};

(window as any).AccoraFloorbedOne = AccoraFloorbedOne;

/**
 * Empresa
 */
export const EmpresaConfigurator = (
  targetId: string,
  config: InitConfig,
  hubspotFormConfig: HubspotFormConfig
) => {
  const app = new Empresa({
    target: document.getElementById(targetId),
    props: {
      config: {
        mainTitle: "Customize your Accora Floor Bed",
        bookADemoHref: "https://us.accora.care/book-a-demo",
        ...config,
        hubspotFormConfig,
      },
    },
  });

  return app;
};

(window as any).EmpresaConfigurator = EmpresaConfigurator;

/**
 * Configura advance
 */

export const ConfiguraAdvanceConfigurator = (
  targetId: string,
  config: InitConfig,
  hubspotFormConfig: HubspotFormConfig
) => {
  const app = new ConfiguraAdvance({
    target: document.getElementById(targetId),
    props: {
      config: {
        mainTitle: "Customize your Accora Configura Advance",
        bookADemoHref: "https://us.accora.care/book-a-demo",
        ...config,
        hubspotFormConfig,
      },
    },
  });

  return app;
};

(window as any).ConfiguraAdvance = ConfiguraAdvanceConfigurator;
