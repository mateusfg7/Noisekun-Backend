import { IFiles } from "../types.ts";

const sounds: IFiles = {
  rain: await Deno.readFile("files/sounds/rain.mp3"),
  water: await Deno.readFile("files/sounds/water.mp3"),
  storm: await Deno.readFile("files/sounds/storm.mp3"),
  small_waves: await Deno.readFile("files/sounds/small_waves.mp3"),
  ocean_waves: await Deno.readFile("files/sounds/ocean_waves.mp3"),
  forest_ambience: await Deno.readFile(
    "files/sounds/forest_ambience.mp3",
  ),
  coffee: await Deno.readFile(
    "files/sounds/coffee.mp3",
  ),
  wind: await Deno.readFile(
    "files/sounds/wind.mp3",
  ),
  leafs: await Deno.readFile(
    "files/sounds/leafs.mp3",
  ),
  fire: await Deno.readFile(
    "files/sounds/fire.mp3",
  ),
  night: await Deno.readFile(
    "files/sounds/night.mp3",
  ),
};

export default sounds;
