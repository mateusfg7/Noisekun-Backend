import deps from "./deps.ts";
import router from "./routes.ts";

const HOST = Deno.env.get("HOST") ?? "0.0.0.0";
const PORT = Deno.env.get("PORT") ?? "8000";

const server = new deps.Application();

server.use(router.routes());
server.use(router.allowedMethods());

console.log(`> Server is running on ${HOST}:${PORT}`);

await server.listen(`${HOST}:${PORT}`);
