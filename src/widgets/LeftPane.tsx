import { tsx } from "esri/widgets/support/widget";
import esriRequest from "esri/request";
import esriConfig from "esri/config";


const CSS = {
  base: "top-nav",
  title: "top-nav-title"
};

let trends: any;

interface LeftPaneProperties {
}

esriConfig.request.corsEnabledServers.push("http://localhost:8080");
esriRequest("http://localhost:8080/trends", {
  responseType: "json"
}).then(function(response: any) {
  trends = response.data[0].trends
    //.filter(hashtag => !!hashtag.tweet_volume)
    .sort((first, second) => second.tweet_volume - first.tweet_volume);
});

export const LeftPane = (props: LeftPaneProperties) => {
  if(!trends){
    return "Loading...";
  }
  const rows = getTrendingHashtagsRows(trends);
  return (<left-pane class={CSS.base}>
    <table class="table modifier-class">
      <thead>
        <tr>
          <th>Hashtag</th>
          <th>Tweet Count</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  </left-pane>);
};

const getTrendingHashtagsRows = (data: Array<any>) => {
  return data.map(item  => (<tr><td>{item.name}</td><td>{item.tweet_volume}</td></tr>));
}