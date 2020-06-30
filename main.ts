import server from "./modules/server.ts";

import { HOST, PORT } from "./config/configs.ts";

console.log(`> Server is running on ${HOST}:${PORT}`);

await server.listen(`${HOST}:${PORT}`);
