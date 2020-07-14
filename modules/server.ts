import deps from "./deps.ts";
import routes_mp3 from "../routes/audios/routes_mp3.ts";
import routes_webm from "../routes/audios/routes_webm.ts";

const server = new deps.Application();

server.use(routes_mp3.routes());
server.use(routes_mp3.allowedMethods());

server.use(routes_webm.routes());
server.use(routes_webm.allowedMethods());

export default server;
