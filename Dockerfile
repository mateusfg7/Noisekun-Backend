FROM hayd/alpine-deno:1.0.0

WORKDIR /app

USER deno

COPY . .
RUN deno cache deps.ts

ADD . .
RUN deno cache server.ts

CMD ["run", "--allow-net", "--allow-read", "--allow-env", "server.ts"]