import deps from "../modules/deps.ts";

import sounds from "../modules/files.ts";

const router = new deps.Router();

router.get("/rain", (context) => {
  context.response.status = 200;
  context.response.body = sounds.rain;
});
router.get("/water", (context) => {
  context.response.status = 200;
  context.response.body = sounds.water;
});
router.get("/storm", (context) => {
  context.response.status = 200;
  context.response.body = sounds.storm;
});
router.get("/small_waves", (context) => {
  context.response.status = 200;
  context.response.body = sounds.small_waves;
});
router.get("/ocean_waves", (context) => {
  context.response.status = 200;
  context.response.body = sounds.ocean_waves;
});
router.get("/forest_ambience", (context) => {
  context.response.status = 200;
  context.response.body = sounds.forest_ambience;
});
router.get("/coffee", (context) => {
  context.response.status = 200;
  context.response.body = sounds.coffee;
});
router.get("/wind", (context) => {
  context.response.status = 200;
  context.response.body = sounds.wind;
});
router.get("/leafs", (context) => {
  context.response.status = 200;
  context.response.body = sounds.leafs;
});
router.get("/fire", (context) => {
  context.response.status = 200;
  context.response.body = sounds.fire;
});
router.get("/night", (context) => {
  context.response.status = 200;
  context.response.body = sounds.night;
});
router.get("/train", (context) => {
  context.response.status = 200;
  context.response.body = sounds.train;
});
router.get("/fan", (context) => {
  context.response.status = 200;
  context.response.body = sounds.fan;
});

export default router;
