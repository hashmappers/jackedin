import EsriMap from "esri/Map";
import StreamLayer from "esri/layers/StreamLayer";
import FeatureLayer from "esri/layers/FeatureLayer";

const getScoreText = (target: any) => {
  return `${target.graphic.attributes.text}<div><b>We do not have data available for these hashtags</b></div>`;
}

const createUniqueValueInfos = () => {
  const fireflyImages = [
    "cat1.png",
    "cat2.png",
    "cat3.png",
    "cat4.png",
    "cat5.png"
  ];

  const baseUrl =
    "https://arcgis.github.io/arcgis-samples-javascript/sample-data/";

  return fireflyImages.map(function(url, i) {
    return {
      value: (i + 1) * 0.2,
      symbol: {
        width: 50,
        height: 50,
        type: "picture-marker",
        url: baseUrl + url
      }
    }
  });
}

const featureLayer = new FeatureLayer({
  url: "http://ps0002022.esri.com/server/rest/services/Hosted/OnlyHashtaggedHexagons/FeatureServer/0",
  opacity: 0.8
});

const streamLayer = new StreamLayer({
  url: "https://ps0002022.esri.com/server/rest/services/stream-service-out-original2/StreamServer",
  purgeOptions: {
    displayCount: 1000
  },
  popupTemplate: {
    title: "@{user_name}",
    content: getScoreText
  },
  renderer: {
    type: "simple",
    symbol: {
      type: "picture-marker",
      url: "https://arcgis.github.io/arcgis-samples-javascript/sample-data/cat4.png",
      width: 30,
      height: 30
    }
  }
});

export const map = new EsriMap({
  basemap: "dark-gray",
  layers: [featureLayer, streamLayer]
});
