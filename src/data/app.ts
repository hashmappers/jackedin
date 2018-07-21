import FeatureLayer from "esri/layers/FeatureLayer";
import EsriMap from "esri/Map";

export const featureLayer = new FeatureLayer({
  portalItem: {
    id: "b234a118ab6b4c91908a1cf677941702"
  },
  outFields: ["NAME", "STATE_NAME", "VACANT", "HSE_UNITS"],
  title: "U.S. counties",
  opacity: 0.8
});

export const map = new EsriMap({
  basemap: "streets"
});
