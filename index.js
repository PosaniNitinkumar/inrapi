const express = require("express");

const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });
const userRouter = require("./src/routes/userRoutes");
const cors = require("cors");
app.use(express.json());

app.use(cors());
app.use("/users", userRouter);
app.get("/", (req, res) => {
  res.send("User Login API for inr");
});

const PORT = process.env.PORT || 6000;

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    app.listen(PORT, () => {
      console.log("server running" + PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
