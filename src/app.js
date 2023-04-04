const express = require("express");
const app = express();
const connectDb = require("./db/conn");
const {site_route} = require('./route/site_manegement.route')
const route = require("./route/materialRoute");
const routequantity = require("./route/QuantityRoute");
const Address_route = require('./route/address.user.route')
const port = process.env.PORT || 9000;
app.use(express.json());
const DB_URL = "mongodb+srv://root:root@cluster0.63corsg.mongodb.net/test";
connectDb(DB_URL);
app.use("/uploads", express.static("uploads"));
app.use(route);
app.use(site_route)
app.use(Address_route)
app.use(routequantity);
app.listen(port, () => {
  console.log(`connnecte ${port}`);
});
