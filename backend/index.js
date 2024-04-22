const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const authRoute = require("./routers/userRoutes");
const productRoute = require("./routers/productRoutes");
const leaderRoute = require("./routers/leaderRoutes");
const teamRoute = require("./routers/teamRoutes");
const cors = require("cors");

const dbConnect = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const app = express();

dbConnect();
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use("/api/user", authRoute);
app.use("/api/product", productRoute);
app.use("/api/leader", leaderRoute);
app.use("/api/team", teamRoute);
app.use("/uploads", express.static("uploads"));

app.listen(PORT, () => {
  console.log(`Server at running on PORT ${PORT}`);
});
