const Router = require("express");

const { httpGetAllUsers } = require("./admin.users.controllers");

const adminUsersRouter = Router();

adminUsersRouter.get("/", httpGetAllUsers);

module.exports = adminUsersRouter;
