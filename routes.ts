import { ServerRequest } from "https://deno.land/std/http/server.ts";

import { IFiles } from "./types.ts";

export default async function routes(req: ServerRequest, sounds: IFiles) {
  if (req.url === "/rain" || req.url === "/rain/") {
    return req.respond({ body: sounds.rain, status: 200 });
  }
  if (req.url === "/water" || req.url === "/water/") {
    return req.respond({ body: sounds.water, status: 200 });
  }
  if (req.url === "/storm" || req.url === "/storm/") {
    return req.respond({ body: sounds.storm, status: 200 });
  }
  if (req.url === "/small_waves" || req.url === "/small_waves/") {
    return req.respond({ body: sounds.small_waves, status: 200 });
  }
  if (req.url === "/ocean_waves" || req.url === "/ocean_waves/") {
    return req.respond({ body: sounds.ocean_waves, status: 200 });
  }
  if (req.url === "/forest_ambience" || req.url === "/forest_ambience/") {
    return req.respond({ body: sounds.forest_ambience, status: 200 });
  }

  return req.respond({ status: 404 });
}
