import "./config";

import "@dojo/shim/Promise";

import App from "./widgets/App";

/**
 * Initialize application
 */
export const app = new App({
  appName: "JackedIn",
  container: document.getElementById("app") as HTMLElement
});
