import index from "./index.html";

Bun.serve({
  development: "prod" !== import.meta.env.NODE_ENV,
  routes: {
    "/": index,
  },
});
