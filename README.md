# Eurus
The landing and entry page for Windward.

## Dev

```sh
cd client
bun install
bun run dev
```

## Serve

```sh
cd client
bun run build
cd ../server
go run .
```

Serves `client/dist` on port 8080, or `$PORT`.
