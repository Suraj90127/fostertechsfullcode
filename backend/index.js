const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const authRoute = require("./routers/userRoutes");
const productRoute = require("./routers/productRoutes");

const dbConnect = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const app = express();

dbConnect();
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/user", authRoute);
app.use("/api/product", productRoute);

app.use("/uploads", express.static("uploads"));

app.listen(PORT, () => {
  console.log(`Server at running on PORT ${PORT}`);
});
