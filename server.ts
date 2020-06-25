import { serve } from "https://deno.land/std/http/server.ts";
const server = serve({ port: 8000 });

import routes from "./routes.ts";
import sounds from "./files.ts";

console.log("> Init server on http://localhost:8000");

for await (const req of server) {
  routes(req, sounds);
}
