import deps from "./deps.ts";

import sounds from "./files.ts";

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

export default router;
