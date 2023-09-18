let express = require("express");
let app = express();
module.exports = app;

app.get("/", (request, response) => {
  response.send("Express JS");
});

module.exports;

app.listen(3000);
