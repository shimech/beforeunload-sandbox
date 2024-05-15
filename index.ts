Bun.serve({
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/form")
      return new Response(Bun.file("./public/form.html"));
    return new Response(Bun.file("./public/detail.html"));
  },
});
