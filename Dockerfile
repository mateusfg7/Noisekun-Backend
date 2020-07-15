FROM hayd/alpine-deno:1.2.0

WORKDIR /app

USER deno

COPY . .
RUN deno cache modules/deps.ts

ADD . .
RUN deno cache modules/server.ts

CMD ["run", "--allow-net", "--allow-read", "--allow-env", "main.ts"]
