import deps from "../modules/deps.ts";

import sounds from "../modules/files.ts";

const audios_mp3 = new deps.Router();

audios_mp3.get("/mp3/rain", (context) => {
  context.response.status = 200;
  context.response.body = sounds["rain"];
});
audios_mp3.get("/mp3/water", (context) => {
  context.response.status = 200;
  context.response.body = sounds["water"];
});
audios_mp3.get("/mp3/storm", (context) => {
  context.response.status = 200;
  context.response.body = sounds["storm"];
});
audios_mp3.get("/mp3/small-waves", (context) => {
  context.response.status = 200;
  context.response.body = sounds["small-waves"];
});
audios_mp3.get("/mp3/ocean-waves", (context) => {
  context.response.status = 200;
  context.response.body = sounds["ocean-waves"];
});
audios_mp3.get("/mp3/forest-ambience", (context) => {
  context.response.status = 200;
  context.response.body = sounds["forest-ambience"];
});
audios_mp3.get("/mp3/coffee", (context) => {
  context.response.status = 200;
  context.response.body = sounds["coffee"];
});
audios_mp3.get("/mp3/wind", (context) => {
  context.response.status = 200;
  context.response.body = sounds["wind"];
});
audios_mp3.get("/mp3/leafs", (context) => {
  context.response.status = 200;
  context.response.body = sounds["leafs"];
});
audios_mp3.get("/mp3/fire", (context) => {
  context.response.status = 200;
  context.response.body = sounds["fire"];
});
audios_mp3.get("/mp3/night", (context) => {
  context.response.status = 200;
  context.response.body = sounds["night"];
});
audios_mp3.get("/mp3/train", (context) => {
  context.response.status = 200;
  context.response.body = sounds["train"];
});
audios_mp3.get("/mp3/fan", (context) => {
  context.response.status = 200;
  context.response.body = sounds["fan"];
});
audios_mp3.get("/mp3/air-plane", (context) => {
  context.response.status = 200;
  context.response.body = sounds["air-plane"];
});
audios_mp3.get("/mp3/underwater", (context) => {
  context.response.status = 200;
  context.response.body = sounds["underwater"];
});

export default audios_mp3;
