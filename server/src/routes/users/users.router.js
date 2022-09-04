const { Router } = require("express");

const { httpGetUser } = require("./users.controllers");

const userRouter = Router();

userRouter.get("/:userId", httpGetUser);

module.exports = userRouter;
