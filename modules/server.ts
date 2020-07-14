import deps from "./deps.ts";
import audios_mp3 from "../routes/audios_mp3.ts";
import audios_webm from "../routes/audios_webm.ts";

const server = new deps.Application();

server.use(audios_mp3.routes());
server.use(audios_mp3.allowedMethods());

server.use(audios_webm.routes());
server.use(audios_webm.allowedMethods());

export default server;
