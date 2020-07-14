import deps from "../modules/deps.ts";

import { sounds_mp3 } from "../modules/files.ts";

const audios_mp3 = new deps.Router();

audios_mp3.get("/mp3/rain", (context) => {
  context.response.status = 200;
  context.response.body = sounds_mp3["rain"];
});
audios_mp3.get("/mp3/water", (context) => {
  context.response.status = 200;
  context.response.body = sounds_mp3["water"];
});
audios_mp3.get("/mp3/storm", (context) => {
  context.response.status = 200;
  context.response.body = sounds_mp3["storm"];
});
audios_mp3.get("/mp3/small-waves", (context) => {
  context.response.status = 200;
  context.response.body = sounds_mp3["small-waves"];
});
audios_mp3.get("/mp3/ocean-waves", (context) => {
  context.response.status = 200;
  context.response.body = sounds_mp3["ocean-waves"];
});
audios_mp3.get("/mp3/forest-ambience", (context) => {
  context.response.status = 200;
  context.response.body = sounds_mp3["forest-ambience"];
});
audios_mp3.get("/mp3/coffee", (context) => {
  context.response.status = 200;
  context.response.body = sounds_mp3["coffee"];
});
audios_mp3.get("/mp3/wind", (context) => {
  context.response.status = 200;
  context.response.body = sounds_mp3["wind"];
});
audios_mp3.get("/mp3/leafs", (context) => {
  context.response.status = 200;
  context.response.body = sounds_mp3["leafs"];
});
audios_mp3.get("/mp3/fire", (context) => {
  context.response.status = 200;
  context.response.body = sounds_mp3["fire"];
});
audios_mp3.get("/mp3/night", (context) => {
  context.response.status = 200;
  context.response.body = sounds_mp3["night"];
});
audios_mp3.get("/mp3/train", (context) => {
  context.response.status = 200;
  context.response.body = sounds_mp3["train"];
});
audios_mp3.get("/mp3/fan", (context) => {
  context.response.status = 200;
  context.response.body = sounds_mp3["fan"];
});
audios_mp3.get("/mp3/air-plane", (context) => {
  context.response.status = 200;
  context.response.body = sounds_mp3["air-plane"];
});
audios_mp3.get("/mp3/underwater", (context) => {
  context.response.status = 200;
  context.response.body = sounds_mp3["underwater"];
});

export default audios_mp3;
