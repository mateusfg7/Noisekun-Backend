import server from "./server.ts";

import { HOST, PORT } from "./configs.ts";

console.log(`> Server is running on ${HOST}:${PORT}`);

await server.listen(`${HOST}:${PORT}`);
