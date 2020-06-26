import { expect } from "https://deno.land/x/expect/expect.ts";

const routes = {
  "/": await fetch("http://0.0.0.0:8000/"),
  "/rain": await fetch("http://0.0.0.0:8000/rain"),
  "/water": await fetch("http://0.0.0.0:8000/water"),
  "/storm": await fetch("http://0.0.0.0:8000/storm"),
  "/small_waves": await fetch("http://0.0.0.0:8000/small_waves"),
  "/ocean_waves": await fetch("http://0.0.0.0:8000/ocean_waves"),
  "/forest_ambience": await fetch("http://0.0.0.0:8000/forest_ambience"),
};

Deno.test("Route /", () => {
  expect(routes["/"].status).toBe(404);
});
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
