# Noisekun Back-End

_File server of [Noisekun](https://github.com/mateusfg7/Noisekun)_

Made with **Deno** and **Typescript**

### Use:

Create the `files/sounds/` folder and add your own sounds

![sounds](docs/sounds.png)

#### Local

install [Deno Runtime](https://deno.land/) and run

```bash
$ deno run --allow-net --allow-read --allow-env server.ts
```

> **--allow-net** _flag to abilite the 'net' permissions_
>
> **--allow-read** _flag to abilite the 'read' permissions_
>
> **--allow-read** _flag to abilite the 'environment variables' permissions_
>
> **server.ts** _main server file_

#### Docker

install [Docker](https://www.docker.com/get-started), enter in the folder, and run

```bash
$ sudo docker build -t noisekun-backend .
```

```bash
$ sudo docker run -it --init -p 8000:8000 noisekun-backend
```

Default host: **0.0.0.0:8000**

to change the host and port, create a dotenv file, like `.env`, and add this lines:

```dotenv
HOST=[YOUR_HOST]
PORT=[YOUR_PORT]
```

_e.g:_

```
HOST=127.0.0.1
PORT=8888
```

---

_credits_
[Coffee Shop Ambience Sound Effect](https://www.youtube.com/watch?v=tqZ6i9M0TdE)
