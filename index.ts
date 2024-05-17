Bun.serve({
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/form")
      return new Response(Bun.file("./docs/form/index.html"));
    return new Response(Bun.file("./docs/index.html"));
  },
});
