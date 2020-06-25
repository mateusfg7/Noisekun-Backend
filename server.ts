import deps from "./deps.ts";
import router from "./routes.ts";

const HOST = deps.config().HOST ?? "0.0.0.0";
const PORT = deps.config().PORT ?? "8000";

const server = new deps.Application();

server.use(router.routes());
server.use(router.allowedMethods());

console.log(`> Server is running on ${HOST}:${PORT}`);

await server.listen(`${HOST}:${PORT}`);
