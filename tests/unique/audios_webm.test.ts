import { expect } from "https://deno.land/x/expect/expect.ts";

try {
  await fetch("http://0.0.0.0:8000/");
} catch (err) {
  console.log("\nTHE SERVER NEEDS TO BE RUNNING ON PORT 8000\n");
  console.log(err);
  Deno.exit();
}

const routes = {
  "/webm/rain": await fetch("http://0.0.0.0:8000/webm/rain"),
  "/webm/water": await fetch("http://0.0.0.0:8000/webm/water"),
  "/webm/storm": await fetch("http://0.0.0.0:8000/webm/storm"),
  "/webm/small-waves": await fetch("http://0.0.0.0:8000/webm/small-waves"),
  "/webm/ocean-waves": await fetch("http://0.0.0.0:8000/webm/ocean-waves"),
  "/webm/forest-ambience": await fetch(
    "http://0.0.0.0:8000/webm/forest-ambience",
  ),
  "/webm/coffee": await fetch("http://0.0.0.0:8000/webm/coffee"),
  "/webm/wind": await fetch("http://0.0.0.0:8000/webm/wind"),
  "/webm/leafs": await fetch("http://0.0.0.0:8000/webm/leafs"),
  "/webm/drops": await fetch("http://0.0.0.0:8000/webm/drops"),
  "/webm/fire": await fetch("http://0.0.0.0:8000/webm/fire"),
  "/webm/night": await fetch("http://0.0.0.0:8000/webm/night"),
  "/webm/train": await fetch("http://0.0.0.0:8000/webm/train"),
  "/webm/fan": await fetch("http://0.0.0.0:8000/webm/fan"),
  "/webm/air-plane": await fetch("http://0.0.0.0:8000/webm/air-plane"),
  "/webm/underwater": await fetch("http://0.0.0.0:8000/webm/underwater"),
};

Deno.test("Route /webm/rain", () => {
  expect(routes["/webm/rain"].status).toBe(200);
  expect(routes["/webm/rain"].headers.get("content-length")).toBeGreaterThan(0);
});
Deno.test("Route /webm/water", () => {
  expect(routes["/webm/water"].status).toBe(200);
  expect(routes["/webm/water"].headers.get("content-length")).toBeGreaterThan(
    0,
  );
});
Deno.test("Route /webm/storm", () => {
  expect(routes["/webm/storm"].status).toBe(200);
  expect(routes["/webm/storm"].headers.get("content-length")).toBeGreaterThan(
    0,
  );
});
Deno.test("Route /webm/small-waves", () => {
  expect(routes["/webm/small-waves"].status).toBe(200);
  expect(routes["/webm/small-waves"].headers.get("content-length"))
    .toBeGreaterThan(
      0,
    );
});
Deno.test("Route /webm/ocean-waves", () => {
  expect(routes["/webm/ocean-waves"].status).toBe(200);
  expect(routes["/webm/ocean-waves"].headers.get("content-length"))
    .toBeGreaterThan(
      0,
    );
});
Deno.test("Route /webm/forest-ambience", () => {
  expect(routes["/webm/forest-ambience"].status).toBe(200);
  expect(routes["/webm/forest-ambience"].headers.get("content-length"))
    .toBeGreaterThan(0);
});
Deno.test("Route /webm/coffee", () => {
  expect(routes["/webm/coffee"].status).toBe(200);
  expect(routes["/webm/coffee"].headers.get("content-length")).toBeGreaterThan(
    0,
  );
});
Deno.test("Route /webm/wind", () => {
  expect(routes["/webm/wind"].status).toBe(200);
  expect(routes["/webm/wind"].headers.get("content-length")).toBeGreaterThan(0);
});
Deno.test("Route /webm/leafs", () => {
  expect(routes["/webm/leafs"].status).toBe(200);
  expect(routes["/webm/leafs"].headers.get("content-length")).toBeGreaterThan(
    0,
  );
});
Deno.test("Route /webm/drops", () => {
  expect(routes["/webm/drops"].status).toBe(200);
  expect(routes["/webm/drops"].headers.get("content-length")).toBeGreaterThan(
    0,
  );
});
Deno.test("Route /webm/fire", () => {
  expect(routes["/webm/fire"].status).toBe(200);
  expect(routes["/webm/fire"].headers.get("content-length")).toBeGreaterThan(0);
});
Deno.test("Route /webm/night", () => {
  expect(routes["/webm/night"].status).toBe(200);
  expect(routes["/webm/night"].headers.get("content-length")).toBeGreaterThan(
    0,
  );
});
Deno.test("Route /webm/train", () => {
  expect(routes["/webm/train"].status).toBe(200);
  expect(routes["/webm/train"].headers.get("content-length")).toBeGreaterThan(
    0,
  );
});
Deno.test("Route /webm/fan", () => {
  expect(routes["/webm/fan"].status).toBe(200);
  expect(routes["/webm/fan"].headers.get("content-length")).toBeGreaterThan(0);
});
Deno.test("Route /webm/air-plane", () => {
  expect(routes["/webm/air-plane"].status).toBe(200);
  expect(routes["/webm/air-plane"].headers.get("content-length"))
    .toBeGreaterThan(0);
});
Deno.test("Route /webm/underwater", () => {
  expect(routes["/webm/underwater"].status).toBe(200);
  expect(routes["/webm/underwater"].headers.get("content-length"))
    .toBeGreaterThan(
      0,
    );
});
