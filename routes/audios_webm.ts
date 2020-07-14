import deps from "../modules/deps.ts";

import { sounds_webm } from "../modules/files.ts";

const audios_webm = new deps.Router();

audios_webm.get("/webm/rain", (context) => {
  context.response.status = 200;
  context.response.body = sounds_webm["rain"];
});
audios_webm.get("/webm/water", (context) => {
  context.response.status = 200;
  context.response.body = sounds_webm["water"];
});
audios_webm.get("/webm/storm", (context) => {
  context.response.status = 200;
  context.response.body = sounds_webm["storm"];
});
audios_webm.get("/webm/small-waves", (context) => {
  context.response.status = 200;
  context.response.body = sounds_webm["small-waves"];
});
audios_webm.get("/webm/ocean-waves", (context) => {
  context.response.status = 200;
  context.response.body = sounds_webm["ocean-waves"];
});
audios_webm.get("/webm/forest-ambience", (context) => {
  context.response.status = 200;
  context.response.body = sounds_webm["forest-ambience"];
});
audios_webm.get("/webm/coffee", (context) => {
  context.response.status = 200;
  context.response.body = sounds_webm["coffee"];
});
audios_webm.get("/webm/wind", (context) => {
  context.response.status = 200;
  context.response.body = sounds_webm["wind"];
});
audios_webm.get("/webm/leafs", (context) => {
  context.response.status = 200;
  context.response.body = sounds_webm["leafs"];
});
audios_webm.get("/webm/fire", (context) => {
  context.response.status = 200;
  context.response.body = sounds_webm["fire"];
});
audios_webm.get("/webm/night", (context) => {
  context.response.status = 200;
  context.response.body = sounds_webm["night"];
});
audios_webm.get("/webm/train", (context) => {
  context.response.status = 200;
  context.response.body = sounds_webm["train"];
});
audios_webm.get("/webm/fan", (context) => {
  context.response.status = 200;
  context.response.body = sounds_webm["fan"];
});
audios_webm.get("/webm/air-plane", (context) => {
  context.response.status = 200;
  context.response.body = sounds_webm["air-plane"];
});
audios_webm.get("/webm/underwater", (context) => {
  context.response.status = 200;
  context.response.body = sounds_webm["underwater"];
});

export default audios_webm;
