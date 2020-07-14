import deps from "../modules/deps.ts";

import sounds from "../modules/files.ts";

const routes_mp3 = new deps.Router();

routes_mp3.get("/mp3/rain", (context) => {
  context.response.status = 200;
  context.response.body = sounds["rain"];
});
routes_mp3.get("/mp3/water", (context) => {
  context.response.status = 200;
  context.response.body = sounds["water"];
});
routes_mp3.get("/mp3/storm", (context) => {
  context.response.status = 200;
  context.response.body = sounds["storm"];
});
routes_mp3.get("/mp3/small-waves", (context) => {
  context.response.status = 200;
  context.response.body = sounds["small-waves"];
});
routes_mp3.get("/mp3/ocean-waves", (context) => {
  context.response.status = 200;
  context.response.body = sounds["ocean-waves"];
});
routes_mp3.get("/mp3/forest-ambience", (context) => {
  context.response.status = 200;
  context.response.body = sounds["forest-ambience"];
});
routes_mp3.get("/mp3/coffee", (context) => {
  context.response.status = 200;
  context.response.body = sounds["coffee"];
});
routes_mp3.get("/mp3/wind", (context) => {
  context.response.status = 200;
  context.response.body = sounds["wind"];
});
routes_mp3.get("/mp3/leafs", (context) => {
  context.response.status = 200;
  context.response.body = sounds["leafs"];
});
routes_mp3.get("/mp3/fire", (context) => {
  context.response.status = 200;
  context.response.body = sounds["fire"];
});
routes_mp3.get("/mp3/night", (context) => {
  context.response.status = 200;
  context.response.body = sounds["night"];
});
routes_mp3.get("/mp3/train", (context) => {
  context.response.status = 200;
  context.response.body = sounds["train"];
});
routes_mp3.get("/mp3/fan", (context) => {
  context.response.status = 200;
  context.response.body = sounds["fan"];
});
routes_mp3.get("/mp3/air-plane", (context) => {
  context.response.status = 200;
  context.response.body = sounds["air-plane"];
});
routes_mp3.get("/mp3/underwater", (context) => {
  context.response.status = 200;
  context.response.body = sounds["underwater"];
});

export default routes_mp3;
