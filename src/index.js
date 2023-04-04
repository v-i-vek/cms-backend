const express = require("express");
const document_master = require("./models/document_master");
require("./db/conn");
const route = require("./routes/docs");
const docs = require("./models/document_master");
const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use(route);

app.listen(port, () => {
  console.log(`connection is done at ${port}`);
});
