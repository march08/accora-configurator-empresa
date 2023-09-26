import type { CognitoFormConfig, InitConfig } from "../Config.types";
import Floorbed1Svelte from "./Floorbed1.svelte";

const initConfig: InitConfig = {
  mainTitle: "Customize your Accora Floorbed 1",
  bookADemoHref: "https://us.accora.care/book-a-demo",
};

export const AccoraFloorbedOne = (
  targetId: string,
  config: InitConfig,
  cognitoFormConfig: CognitoFormConfig
) => {
  const app = new Floorbed1Svelte({
    target: document.getElementById(targetId),
    props: {
      config: {
        ...initConfig,
        ...config,
        cognitoFormConfig,
      },
    },
  });

  return app;
};

(window as any).AccoraFloorbedOne = AccoraFloorbedOne;
export default AccoraFloorbedOne;
