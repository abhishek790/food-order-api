const express = require("express");
const morgan = require("morgan");
const foodRouter = require("./routes/foodRoutes");
const orderRouter = require("./routes/orderRoutes");
const userRouter = require("./routes/userRoutes");
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/user", userRouter);
app.use("/api/v1/food", foodRouter);
app.use("/api/v1/order", orderRouter);
module.exports = app;
