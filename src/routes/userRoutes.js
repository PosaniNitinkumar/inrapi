const express = require("express");
const { sigup, sigin } = require("../controller/userController");
const userRouter = express();
userRouter.post("/signup", sigup);
userRouter.post("/signin", sigin);

module.exports = userRouter;
