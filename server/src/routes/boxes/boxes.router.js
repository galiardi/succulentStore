const { Router } = require("express");

const {
  httpCreateBox,
  httpGetAllBoxes,
  httpGetBox,
  httpUpdateBox,
} = require("./boxes.controllers");

const boxesRouter = Router();

boxesRouter.post("/", httpCreateBox);

boxesRouter.get("/", httpGetAllBoxes);

boxesRouter.get("/:boxId", httpGetBox);

boxesRouter.put("/:boxId", httpUpdateBox);

module.exports = boxesRouter;
