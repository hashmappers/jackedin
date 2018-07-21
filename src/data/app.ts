import StreamLayer from "esri/layers/StreamLayer";
import EsriMap from "esri/Map";

var streamLayer = new StreamLayer({
  url: "https://ps0002022.esri.com/server/rest/services/stream_service_twitter_test/StreamServer",
  purgeOptions: {
    displayCount: 1000
  }
});

export const map = new EsriMap({
  basemap: "dark-gray",
  layers: [streamLayer]
});
