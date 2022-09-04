const Router = require("express");

const { admin } = require("../../../config");
const adminUsersRouter = require("./adminUsers/admin.users.router");
const adminBoxesRouter = require("./adminBoxes/admin.boxes.router");

const adminRouter = Router();

adminRouter.use((req, res, next) => {
  const { password } = req.body;
  if (password !== admin.password) return res.sendStatus(404);
  next();
});

adminRouter.use("/users", adminUsersRouter);
// adminRouter.use("/boxes", adminBoxesRouter);

module.exports = adminRouter;
