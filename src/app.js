const express = require("express");
const app = express();
const connectDb = require("./db/conn");
const {siteRoute} = require('./route/siteManegement.route')
const route = require("./route/materialRoute");
const routequantity = require("./route/QuantityRoute");
const {addressRoute} = require('./route/address.user.route')
const port = process.env.PORT || 9000;
app.use(express.json());
const DB_URL = "mongodb+srv://root:root@cluster0.63corsg.mongodb.net/test";
connectDb(DB_URL);
app.use("/uploads", express.static("uploads"));
app.use(route);
app.use(siteRoute)
app.use(addressRoute)
app.use(routequantity);
app.listen(port, () => {
  console.log(`connnecte ${port}`);
});
