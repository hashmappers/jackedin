import EsriMap from "esri/Map";
import StreamLayer from "esri/layers/StreamLayer";

const getScoreText = (target: any) => {
  return `This tweet has a TFIDF Score of ${target.graphic.attribute.tfidfScore} and a location score of ${target.graphic.attribute.locScore}`;
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
        type: "picture-marker",
        url: baseUrl + url
      }
    }
  });
}

const streamLayer = new StreamLayer({
  url: "https://ps0002022.esri.com/server/rest/services/stream-service-out-original2/StreamServer",
  purgeOptions: {
    displayCount: 1000
  },
  popupTemplate: {
    title: "{text}",
    content: getScoreText
  },
  renderer: {
    type: "unique-value",
    field: "polarity",
    uniqueValueInfos: createUniqueValueInfos()
  }
});

export const map = new EsriMap({
  basemap: "dark-gray",
  layers: [streamLayer]
});
