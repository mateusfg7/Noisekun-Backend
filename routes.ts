import { ServerRequest } from "https://deno.land/std/http/server.ts";

export default async function routes(req: ServerRequest) {
  // read audio file e.g: const rain = await Deno.readFile("rain.mp3");
  const hello = "Hello Word";

  if (req.url === "/" ) {
    return req.respond({ body: hello, status: 200 });
  }
  else {
    return req.respond({ body: "ERROR 404, PAGE NOT FOUND!", status: 404 });
  }
}
