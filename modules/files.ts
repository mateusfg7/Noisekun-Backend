import { IFiles } from "../types.ts";

export const sounds_mp3: IFiles = {
  "rain": await Deno.readFile("files/sounds/mp3/rain.mp3"),
  "water": await Deno.readFile("files/sounds/mp3/water.mp3"),
  "storm": await Deno.readFile("files/sounds/mp3/storm.mp3"),
  "small-waves": await Deno.readFile("files/sounds/mp3/small-waves.mp3"),
  "ocean-waves": await Deno.readFile("files/sounds/mp3/ocean-waves.mp3"),
  "forest-ambience": await Deno.readFile(
    "files/sounds/mp3/forest-ambience.mp3",
  ),
  "coffee": await Deno.readFile(
    "files/sounds/mp3/coffee.mp3",
  ),
  "wind": await Deno.readFile(
    "files/sounds/mp3/wind.mp3",
  ),
  "leafs": await Deno.readFile(
    "files/sounds/mp3/leafs.mp3",
  ),
  "fire": await Deno.readFile(
    "files/sounds/mp3/fire.mp3",
  ),
  "night": await Deno.readFile(
    "files/sounds/mp3/night.mp3",
  ),
  "train": await Deno.readFile(
    "files/sounds/mp3/train.mp3",
  ),
  "fan": await Deno.readFile(
    "files/sounds/mp3/fan.mp3",
  ),
  "air-plane": await Deno.readFile(
    "files/sounds/mp3/air-plane.mp3",
  ),
  "underwater": await Deno.readFile(
    "files/sounds/mp3/underwater.mp3",
  ),
};

export const sounds_webm: IFiles = {
  "rain": await Deno.readFile("files/sounds/webm/rain.webm"),
  "water": await Deno.readFile("files/sounds/webm/water.webm"),
  "storm": await Deno.readFile("files/sounds/webm/storm.webm"),
  "small-waves": await Deno.readFile("files/sounds/webm/small-waves.webm"),
  "ocean-waves": await Deno.readFile("files/sounds/webm/ocean-waves.webm"),
  "forest-ambience": await Deno.readFile(
    "files/sounds/webm/forest-ambience.webm",
  ),
  "coffee": await Deno.readFile(
    "files/sounds/webm/coffee.webm",
  ),
  "wind": await Deno.readFile(
    "files/sounds/webm/wind.webm",
  ),
  "leafs": await Deno.readFile(
    "files/sounds/webm/leafs.webm",
  ),
  "fire": await Deno.readFile(
    "files/sounds/webm/fire.webm",
  ),
  "night": await Deno.readFile(
    "files/sounds/webm/night.webm",
  ),
  "train": await Deno.readFile(
    "files/sounds/webm/train.webm",
  ),
  "fan": await Deno.readFile(
    "files/sounds/webm/fan.webm",
  ),
  "air-plane": await Deno.readFile(
    "files/sounds/webm/air-plane.webm",
  ),
  "underwater": await Deno.readFile(
    "files/sounds/webm/underwater.webm",
  ),
};
