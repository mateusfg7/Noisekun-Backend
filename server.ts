import { serve } from "https://deno.land/std/http/server.ts";
const server = serve({ port: 8000 });

import routes from "./routes.ts";

console.log("> Init server on http://localhost:8000");

for await (const req of server) {
  console.log(`> Connect with ${req.conn.rid} by ${req.url}`)
	routes(req);
}
