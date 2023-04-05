const express = require("express");
const app = express();
const connectDb = require("./db/conn");
const route = require("./route/materialRoute");
const routequantity = require("./route/QuantityRoute");
const docs = require("./models/DocumentModel");
const routePermission = require('./route/permission.route')
const document_master = require("./models/DocumentModel");
const ServiceRoute = require("./route/ServiceRoute")
const userroute = require("./routes/user");
const roleRoute = require("./routes/role");
const port = process.env.PORT || 9000;
app.use(express.json());
const DB_URL = "mongodb://localhost:27017";
connectDb(DB_URL);
app.use(userroute);
app.use(roleRoute)
app.use("/uploads", express.static("uploads"));
app.use(route);
app.use(routequantity);
app.use(routePermission);
app.use(ServiceRoute);
app.listen(port, () => {
  console.log(`connnecte ${port}`);
});
