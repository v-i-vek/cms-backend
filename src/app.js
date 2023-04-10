const express = require("express");
const app = express();
const connectDb = require("./db/conn");

const cookieParser = require("cookie-parser")
const LoginRoute = require("./route/loginRouter");
const routeUser =require("./route/userRouter");

const route = require("./route/materialRoute");
const routequantity = require("./route/QuantityRoute");

const addressRoute = require('./route/address.user.route')
 const port = process.env.PORT || 3001;

const docs = require("./models/DocumentModel");
const routePermission = require('./route/permission.route')
const document_master = require("./models/DocumentModel");
const ServiceRoute = require("./route/ServiceRoute")
// const userroute = require("./route/user");
const roleRoute = require("./route/role");
const siteRoute = require('./route/siteManegement.route')
app.use(cookieParser());
app.use(express.json());
const DB_URL = "mongodb://localhost:27017/";
connectDb(DB_URL);
//app.use(userroute);
app.use(roleRoute)
app.use("/uploads", express.static("uploads"));
app.use(route);
app.use(siteRoute)
app.use(addressRoute)
app.use(routequantity);
app.use(routePermission);
app.use(ServiceRoute);
app.use(routeUser);
app.use(LoginRoute);
app.listen(port, () => {
  console.log(`connnecte ${port}`);
});
