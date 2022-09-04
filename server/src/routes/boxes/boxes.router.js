const { Router } = require("express");

const {
  httpCreateBox,
  httpGetAllBoxes,
  httpGetBox,
  httpUpdateBox,
  httpDeleteBox,
} = require("./boxes.controllers");

const boxesRouter = Router();

boxesRouter.post("/", httpCreateBox);

boxesRouter.get("/", httpGetAllBoxes);

boxesRouter.get("/:boxId", httpGetBox);

boxesRouter.put("/:boxId", httpUpdateBox);

boxesRouter.delete("/:boxId", httpDeleteBox);

module.exports = boxesRouter;
