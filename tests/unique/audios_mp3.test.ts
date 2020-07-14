import { expect } from "https://deno.land/x/expect/expect.ts";

try {
  await fetch("http://0.0.0.0:8000/");
} catch (err) {
  console.log("\nTHE SERVER NEEDS TO BE RUNNING ON PORT 8000\n");
  console.log(err);
  Deno.exit();
}

const routes = {
  "/mp3/rain": await fetch("http://0.0.0.0:8000/mp3/rain"),
  "/mp3/water": await fetch("http://0.0.0.0:8000/mp3/water"),
  "/mp3/storm": await fetch("http://0.0.0.0:8000/mp3/storm"),
  "/mp3/small-waves": await fetch("http://0.0.0.0:8000/mp3/small-waves"),
  "/mp3/ocean-waves": await fetch("http://0.0.0.0:8000/mp3/ocean-waves"),
  "/mp3/forest-ambience": await fetch(
    "http://0.0.0.0:8000/mp3/forest-ambience",
  ),
  "/mp3/coffee": await fetch("http://0.0.0.0:8000/mp3/coffee"),
  "/mp3/wind": await fetch("http://0.0.0.0:8000/mp3/wind"),
  "/mp3/leafs": await fetch("http://0.0.0.0:8000/mp3/leafs"),
  "/mp3/drops": await fetch("http://0.0.0.0:8000/mp3/drops"),
  "/mp3/fire": await fetch("http://0.0.0.0:8000/mp3/fire"),
  "/mp3/night": await fetch("http://0.0.0.0:8000/mp3/night"),
  "/mp3/train": await fetch("http://0.0.0.0:8000/mp3/train"),
  "/mp3/fan": await fetch("http://0.0.0.0:8000/mp3/fan"),
  "/mp3/air-plane": await fetch("http://0.0.0.0:8000/mp3/air-plane"),
  "/mp3/underwater": await fetch("http://0.0.0.0:8000/mp3/underwater"),
};

Deno.test("Route /mp3/rain", () => {
  expect(routes["/mp3/rain"].status).toBe(200);
  expect(routes["/mp3/rain"].headers.get("content-length")).toBeGreaterThan(0);
});
Deno.test("Route /mp3/water", () => {
  expect(routes["/mp3/water"].status).toBe(200);
  expect(routes["/mp3/water"].headers.get("content-length")).toBeGreaterThan(0);
});
Deno.test("Route /mp3/storm", () => {
  expect(routes["/mp3/storm"].status).toBe(200);
  expect(routes["/mp3/storm"].headers.get("content-length")).toBeGreaterThan(0);
});
Deno.test("Route /mp3/small-waves", () => {
  expect(routes["/mp3/small-waves"].status).toBe(200);
  expect(routes["/mp3/small-waves"].headers.get("content-length"))
    .toBeGreaterThan(
      0,
    );
});
Deno.test("Route /mp3/ocean-waves", () => {
  expect(routes["/mp3/ocean-waves"].status).toBe(200);
  expect(routes["/mp3/ocean-waves"].headers.get("content-length"))
    .toBeGreaterThan(
      0,
    );
});
Deno.test("Route /mp3/forest-ambience", () => {
  expect(routes["/mp3/forest-ambience"].status).toBe(200);
  expect(routes["/mp3/forest-ambience"].headers.get("content-length"))
    .toBeGreaterThan(0);
});
Deno.test("Route /mp3/coffee", () => {
  expect(routes["/mp3/coffee"].status).toBe(200);
  expect(routes["/mp3/coffee"].headers.get("content-length")).toBeGreaterThan(
    0,
  );
});
Deno.test("Route /mp3/wind", () => {
  expect(routes["/mp3/wind"].status).toBe(200);
  expect(routes["/mp3/wind"].headers.get("content-length")).toBeGreaterThan(0);
});
Deno.test("Route /mp3/leafs", () => {
  expect(routes["/mp3/leafs"].status).toBe(200);
  expect(routes["/mp3/leafs"].headers.get("content-length")).toBeGreaterThan(0);
});
Deno.test("Route /mp3/drops", () => {
  expect(routes["/mp3/drops"].status).toBe(200);
  expect(routes["/mp3/drops"].headers.get("content-length")).toBeGreaterThan(0);
});
Deno.test("Route /mp3/fire", () => {
  expect(routes["/mp3/fire"].status).toBe(200);
  expect(routes["/mp3/fire"].headers.get("content-length")).toBeGreaterThan(0);
});
Deno.test("Route /mp3/night", () => {
  expect(routes["/mp3/night"].status).toBe(200);
  expect(routes["/mp3/night"].headers.get("content-length")).toBeGreaterThan(0);
});
Deno.test("Route /mp3/train", () => {
  expect(routes["/mp3/train"].status).toBe(200);
  expect(routes["/mp3/train"].headers.get("content-length")).toBeGreaterThan(0);
});
Deno.test("Route /mp3/fan", () => {
  expect(routes["/mp3/fan"].status).toBe(200);
  expect(routes["/mp3/fan"].headers.get("content-length")).toBeGreaterThan(0);
});
Deno.test("Route /mp3/air-plane", () => {
  expect(routes["/mp3/air-plane"].status).toBe(200);
  expect(routes["/mp3/air-plane"].headers.get("content-length"))
    .toBeGreaterThan(0);
});
Deno.test("Route /mp3/underwater", () => {
  expect(routes["/mp3/underwater"].status).toBe(200);
  expect(routes["/mp3/underwater"].headers.get("content-length"))
    .toBeGreaterThan(
      0,
    );
});
