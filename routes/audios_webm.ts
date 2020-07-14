import deps from "../modules/deps.ts";

import sounds from "../modules/files.ts";

const audios_webm = new deps.Router();

audios_webm.get("/webm/rain", (context) => {
  context.response.status = 200;
  context.response.body = sounds["rain"];
});
audios_webm.get("/webm/water", (context) => {
  context.response.status = 200;
  context.response.body = sounds["water"];
});
audios_webm.get("/webm/storm", (context) => {
  context.response.status = 200;
  context.response.body = sounds["storm"];
});
audios_webm.get("/webm/small-waves", (context) => {
  context.response.status = 200;
  context.response.body = sounds["small-waves"];
});
audios_webm.get("/webm/ocean-waves", (context) => {
  context.response.status = 200;
  context.response.body = sounds["ocean-waves"];
});
audios_webm.get("/webm/forest-ambience", (context) => {
  context.response.status = 200;
  context.response.body = sounds["forest-ambience"];
});
audios_webm.get("/webm/coffee", (context) => {
  context.response.status = 200;
  context.response.body = sounds["coffee"];
});
audios_webm.get("/webm/wind", (context) => {
  context.response.status = 200;
  context.response.body = sounds["wind"];
});
audios_webm.get("/webm/leafs", (context) => {
  context.response.status = 200;
  context.response.body = sounds["leafs"];
});
audios_webm.get("/webm/fire", (context) => {
  context.response.status = 200;
  context.response.body = sounds["fire"];
});
audios_webm.get("/webm/night", (context) => {
  context.response.status = 200;
  context.response.body = sounds["night"];
});
audios_webm.get("/webm/train", (context) => {
  context.response.status = 200;
  context.response.body = sounds["train"];
});
audios_webm.get("/webm/fan", (context) => {
  context.response.status = 200;
  context.response.body = sounds["fan"];
});
audios_webm.get("/webm/air-plane", (context) => {
  context.response.status = 200;
  context.response.body = sounds["air-plane"];
});
audios_webm.get("/webm/underwater", (context) => {
  context.response.status = 200;
  context.response.body = sounds["underwater"];
});

export default audios_webm;
