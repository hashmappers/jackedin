import StreamLayer from "esri/layers/StreamLayer";
import EsriMap from "esri/Map";

const calculateScore = (target: any) => {
  // target.graphic.attributes;
  // target.graphic.geometry;
  return "\"This is my first tweet 3esri\" has a score of 0.15"
}

const streamLayer = new StreamLayer({
  //url: "https://ps0002022.esri.com/server/rest/services/twitter-out-connector-2/StreamServer",
  url: "https://geoeventsample1.esri.com:6443/arcgis/rest/services/LABus/StreamServer",
  purgeOptions: {
    displayCount: 1000
  },
  popupTemplate: {
    title: "{seconds_since_report}",
    content: calculateScore
  },
  renderer: {
    type: "simple",
    symbol: {
      type: "picture-marker",
      url: "https://arcgis.github.io/arcgis-samples-javascript/sample-data/cat5.png"
    }
  }
});

export const map = new EsriMap({
  basemap: "dark-gray",
  layers: [streamLayer]
});
