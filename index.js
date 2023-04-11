const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { userRoutes } = require("./Routes/user.routes");
const app = express();
app.use(cors());
// app.use(Auth)
app.use(express.json());
app.use("/user", userRoutes);
// new
app.listen(8080, async () => {
  try {
    await connection;
    console.log("conncted to database");
  } catch (error) {
    console.log(error);
  }
  console.log("server is running");
});
