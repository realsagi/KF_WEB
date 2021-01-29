import "./polyfills";
import { Navigator } from "./Navigator";
import { Home } from "./Home";
import { Stock } from "./Stock";
/** imports */

import { NgModule, Component } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { UIRouterModule } from "@uirouter/angular";

/** States */

const homeState = { name: "home", url: "/home", component: Home };
const aboutState = { name: "stock", url: "/stock", component: Stock };

/** Root Application NgModule */

@NgModule({
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({ states: [homeState, aboutState], useHash: true })
  ],
  declarations: [Navigator, Home, Stock],
  bootstrap: [Navigator]
})
class RootAppModule {}

/** Angular bootstrap */

platformBrowserDynamic()
  .bootstrapModule(RootAppModule)
  .then(ref => {
    // Ensure Angular destroys itself on hot reloads.
    if (window["ngRef"]) {
      window["ngRef"].destroy();
    }
    window["ngRef"] = ref;

    // Otherwise, log the boot error
  })
  .catch(err => console.error(err));
