const express = require("express");
const app = express();
const connectDb = require("./db/conn");
const cors = require("cors");
const cookieParser = require("cookie-parser")
const LoginRoute = require("./route/loginRouter");
const AddUser =require("./route/AddUser");

const route = require("./route/materialRoute");
const routequantity = require("./route/QuantityRoute");

const addressRoute = require('./route/address.user.route')
 const port = process.env.PORT || 3000;
const LogOutRoute = require('./route/LogOutRoute');
const docs = require("./models/DocumentModel");
const routePermission = require('./route/permission.route')
const document_master = require("./models/DocumentModel");
const ServiceRoute = require("./route/ServiceRoute")
// const userroute = require("./route/user");
const roleRoute = require("./route/role");
const siteRoute = require('./route/siteManegement.route')
app.use(cookieParser());
app.use(express.json());
const DB_URL = "mongodb+srv://root:root@cluster0.63corsg.mongodb.net/test";
connectDb(DB_URL);
//app.use(userroute);



const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
    'DELETE',
    'PATCH',
    'PUT'
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};

app.use(cors(corsOpts));



app.use(roleRoute)
app.use("/uploads", express.static("uploads"));
app.use("/Site_img_uploads",express.static("Site_img_uploads"))
app.use(route);
app.use(siteRoute)
app.use(addressRoute)
app.use(routequantity);
app.use(routePermission);
app.use(ServiceRoute);
app.use(AddUser);
app.use(LoginRoute);
app.use(LogOutRoute);
app.listen(port, () => {
  console.log(`connnecte ${port}`);
});
