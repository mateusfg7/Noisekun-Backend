import deps from "../modules/deps.ts";

import sounds from "../modules/files.ts";

const routes_webm = new deps.Router();

routes_webm.get("/webm/rain", (context) => {
  context.response.status = 200;
  context.response.body = sounds["rain"];
});
routes_webm.get("/webm/water", (context) => {
  context.response.status = 200;
  context.response.body = sounds["water"];
});
routes_webm.get("/webm/storm", (context) => {
  context.response.status = 200;
  context.response.body = sounds["storm"];
});
routes_webm.get("/webm/small-waves", (context) => {
  context.response.status = 200;
  context.response.body = sounds["small-waves"];
});
routes_webm.get("/webm/ocean-waves", (context) => {
  context.response.status = 200;
  context.response.body = sounds["ocean-waves"];
});
routes_webm.get("/webm/forest-ambience", (context) => {
  context.response.status = 200;
  context.response.body = sounds["forest-ambience"];
});
routes_webm.get("/webm/coffee", (context) => {
  context.response.status = 200;
  context.response.body = sounds["coffee"];
});
routes_webm.get("/webm/wind", (context) => {
  context.response.status = 200;
  context.response.body = sounds["wind"];
});
routes_webm.get("/webm/leafs", (context) => {
  context.response.status = 200;
  context.response.body = sounds["leafs"];
});
routes_webm.get("/webm/fire", (context) => {
  context.response.status = 200;
  context.response.body = sounds["fire"];
});
routes_webm.get("/webm/night", (context) => {
  context.response.status = 200;
  context.response.body = sounds["night"];
});
routes_webm.get("/webm/train", (context) => {
  context.response.status = 200;
  context.response.body = sounds["train"];
});
routes_webm.get("/webm/fan", (context) => {
  context.response.status = 200;
  context.response.body = sounds["fan"];
});
routes_webm.get("/webm/air-plane", (context) => {
  context.response.status = 200;
  context.response.body = sounds["air-plane"];
});
routes_webm.get("/webm/underwater", (context) => {
  context.response.status = 200;
  context.response.body = sounds["underwater"];
});

export default routes_webm;
