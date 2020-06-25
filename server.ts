import { Application } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

import router from "./routes.ts";

const HOST = config().HOST ?? "127.0.0.1";
const PORT = config().PORT ?? "8000";

const server = new Application();

server.use(router.routes());
server.use(router.allowedMethods());

console.log(`> Server is running on ${HOST}:${PORT}`);

await server.listen(`${HOST}:${PORT}`);
