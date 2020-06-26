const HOST = Deno.env.get("HOST") ?? "0.0.0.0";
const PORT = Deno.env.get("PORT") ?? "8000";

export {
  HOST,
  PORT,
};
