import esri = __esri;

import { declared, subclass } from "esri/core/accessorSupport/decorators";
import { tsx } from "esri/widgets/support/widget";

import MapView from "esri/views/MapView";
import Widget from "esri/widgets/Widget";

import { Header } from "./Header";
import { LeftPane } from "./LeftPane";

interface AppViewParams extends esri.WidgetProperties {}

const CSS = {
  base: "main",
  webmap: "webmap"
};

@subclass("app.widgets.webmapview")
export default class App extends declared(Widget) {
  constructor(params: Partial<AppViewParams>) {
    super(params);
  }

  render() {
    return (
      <div class={CSS.base}>
        {Header({ appName: "GoldMind" })}
        {LeftPane({})}
        <div class={CSS.webmap} bind={this} afterCreate={this.onAfterCreate} />
      </div>
    );
  }

  private onAfterCreate(element: HTMLDivElement) {
    import("./../data/app").then(({ map }) => {
      new MapView({
        map,
        container: element,
        center: [0, 30],
        zoom: 3,
        popup: {
          dockEnabled: true,
          dockOptions: {
            buttonEnabled: false,
            //breakpoint: false,
            position: "bottom-right"
          }
        },
        highlightOptions: {
          color: "#ff642e",
          haloOpacity: 1,
          fillOpacity: 0.25
        }
      });
    });
  }
}
