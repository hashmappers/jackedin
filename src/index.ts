import "./config";

import "@dojo/shim/Promise";

import App from "./widgets/App";

/**
 * Initialize application
 */
export const app = new App({
  appName: "Demo Apps",
  container: document.getElementById("app") as HTMLElement
});
