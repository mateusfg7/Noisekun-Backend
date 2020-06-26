import deps from "./deps.ts";
import router from "./routes.ts";

const server = new deps.Application();

server.use(router.routes());
server.use(router.allowedMethods());

export default server;
