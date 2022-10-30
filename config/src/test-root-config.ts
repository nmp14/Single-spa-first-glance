import { registerApplication, start } from "single-spa";
import * as isActive from './activity-functions';

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@test/appNav",
  // @ts-ignore
  app: () => System.import("@test/appNav"),
  activeWhen: isActive.nav
});

registerApplication({
  name: "@test/mfe1",
  // @ts-ignore
  app: () => System.import("@test/mfe1"),
  activeWhen: isActive.mfe1
});

registerApplication({
  name: "@test/mfe2",
  // @ts-ignore
  app: () => System.import("@test/mfe2"),
  activeWhen: isActive.mfe2
});

start();
