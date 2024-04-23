const express = require("express");

const app = express();

app.use(
  express.static("public", {
    maxAge: 86_400_000 /* one day in ms */,
    etag: false,
    lastModified: false,
  })
);

app.listen("3000", () => console.log("Server running on port 3000."));
