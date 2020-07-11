import { IFiles } from "../types.ts";

const sounds: IFiles = {
  "rain": await Deno.readFile("files/sounds/rain.mp3"),
  "water": await Deno.readFile("files/sounds/water.mp3"),
  "storm": await Deno.readFile("files/sounds/storm.mp3"),
  "small-waves": await Deno.readFile("files/sounds/small-waves.mp3"),
  "ocean-waves": await Deno.readFile("files/sounds/ocean-waves.mp3"),
  "forest-ambience": await Deno.readFile(
    "files/sounds/forest-ambience.mp3",
  ),
  "coffee": await Deno.readFile(
    "files/sounds/coffee.mp3",
  ),
  "wind": await Deno.readFile(
    "files/sounds/wind.mp3",
  ),
  "leafs": await Deno.readFile(
    "files/sounds/leafs.mp3",
  ),
  "fire": await Deno.readFile(
    "files/sounds/fire.mp3",
  ),
  "night": await Deno.readFile(
    "files/sounds/night.mp3",
  ),
  "train": await Deno.readFile(
    "files/sounds/train.mp3",
  ),
  "fan": await Deno.readFile(
    "files/sounds/fan.mp3",
  ),
  "air-plane": await Deno.readFile(
    "files/sounds/air-plane.mp3",
  ),
  "underwater": await Deno.readFile(
    "files/sounds/underwater.mp3",
  ),
};

export default sounds;
