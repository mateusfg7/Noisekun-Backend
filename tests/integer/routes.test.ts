import { expect } from "https://deno.land/x/expect/expect.ts";

// console.info("\nTHE SERVER NEEDS TO BE RUNNING ON PORT 8000\n");

// await fetch("http://0.0.0.0:8000/").catch(() => {
// });

try {
  await fetch("http://0.0.0.0:8000/");
} catch (err) {
  console.log("\nTHE SERVER NEEDS TO BE RUNNING ON PORT 8000\n");
  console.log(err);
}

Deno.exit();
// throw new Error("THE SERVER NEEDS TO BE RUNNING ON PORT 8000");

const routes = {
  "/rain": await fetch("http://0.0.0.0:8000/rain"),
  "/water": await fetch("http://0.0.0.0:8000/water"),
  "/storm": await fetch("http://0.0.0.0:8000/storm"),
  "/small_waves": await fetch("http://0.0.0.0:8000/small_waves"),
  "/ocean_waves": await fetch("http://0.0.0.0:8000/ocean_waves"),
  "/forest_ambience": await fetch("http://0.0.0.0:8000/forest_ambience"),
  "/coffee": await fetch("http://0.0.0.0:8000/coffee"),
  "/air": await fetch("http://0.0.0.0:8000/air"),
  "/brow_noise": await fetch("http://0.0.0.0:8000/brow_noise"),
  "/leafs": await fetch("http://0.0.0.0:8000/leafs"),
  "/drops": await fetch("http://0.0.0.0:8000/drops"),
  "/fire": await fetch("http://0.0.0.0:8000/fire"),
  "/night": await fetch("http://0.0.0.0:8000/night"),
  "/train": await fetch("http://0.0.0.0:8000/train"),
  "/fan": await fetch("http://0.0.0.0:8000/fan"),
  "/air_plane": await fetch("http://0.0.0.0:8000/air_plane"),
  "/underwater": await fetch("http://0.0.0.0:8000/underwater"),
};

Deno.test("Route /rain", () => {
  expect(routes["/rain"].status).toBe(200);
});
Deno.test("Route /water", () => {
  expect(routes["/water"].status).toBe(200);
});
Deno.test("Route /storm", () => {
  expect(routes["/storm"].status).toBe(200);
});
Deno.test("Route /small_waves", () => {
  expect(routes["/small_waves"].status).toBe(200);
});
Deno.test("Route /ocean_waves", () => {
  expect(routes["/ocean_waves"].status).toBe(200);
});
Deno.test("Route /forest_ambience", () => {
  expect(routes["/forest_ambience"].status).toBe(200);
});
Deno.test("Route /coffee", () => {
  expect(routes["/coffee"].status).toBe(200);
});
Deno.test("Route /air", () => {
  expect(routes["/air"].status).toBe(200);
});
Deno.test("Route /brow_noise", () => {
  expect(routes["/brow_noise"].status).toBe(200);
});
Deno.test("Route /leafs", () => {
  expect(routes["/leafs"].status).toBe(200);
});
Deno.test("Route /drops", () => {
  expect(routes["/drops"].status).toBe(200);
});
Deno.test("Route /fire", () => {
  expect(routes["/fire"].status).toBe(200);
});
Deno.test("Route /night", () => {
  expect(routes["/night"].status).toBe(200);
});
Deno.test("Route /train", () => {
  expect(routes["/train"].status).toBe(200);
});
Deno.test("Route /fan", () => {
  expect(routes["/fan"].status).toBe(200);
});
Deno.test("Route /air_plane", () => {
  expect(routes["/air_plane"].status).toBe(200);
});
Deno.test("Route /underwater", () => {
  expect(routes["/underwater"].status).toBe(200);
});
