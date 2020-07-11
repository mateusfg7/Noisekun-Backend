import deps from "../modules/deps.ts";

import sounds from "../modules/files.ts";

const router = new deps.Router();

router.get("/rain", (context) => {
  context.response.status = 200;
  context.response.body = sounds["rain"];
});
router.get("/water", (context) => {
  context.response.status = 200;
  context.response.body = sounds["water"];
});
router.get("/storm", (context) => {
  context.response.status = 200;
  context.response.body = sounds["storm"];
});
router.get("/small-waves", (context) => {
  context.response.status = 200;
  context.response.body = sounds["small-waves"];
});
router.get("/ocean-waves", (context) => {
  context.response.status = 200;
  context.response.body = sounds["ocean-waves"];
});
router.get("/forest-ambience", (context) => {
  context.response.status = 200;
  context.response.body = sounds["forest-ambience"];
});
router.get("/coffee", (context) => {
  context.response.status = 200;
  context.response.body = sounds["coffee"];
});
router.get("/wind", (context) => {
  context.response.status = 200;
  context.response.body = sounds["wind"];
});
router.get("/leafs", (context) => {
  context.response.status = 200;
  context.response.body = sounds["leafs"];
});
router.get("/fire", (context) => {
  context.response.status = 200;
  context.response.body = sounds["fire"];
});
router.get("/night", (context) => {
  context.response.status = 200;
  context.response.body = sounds["night"];
});
router.get("/train", (context) => {
  context.response.status = 200;
  context.response.body = sounds["train"];
});
router.get("/fan", (context) => {
  context.response.status = 200;
  context.response.body = sounds["fan"];
});
router.get("/air-plane", (context) => {
  context.response.status = 200;
  context.response.body = sounds["air-plane"];
});
router.get("/underwater", (context) => {
  context.response.status = 200;
  context.response.body = sounds["underwater"];
});

export default router;
