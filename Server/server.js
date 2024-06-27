const express = require("express");
const app = express();
require("../Database/db");
const port = 4000;

app.listen(port, () => {
  console.log(`server listening on port `, port);
});
