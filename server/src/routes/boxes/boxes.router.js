const { Router } = require("express");

const {
  httpCreateBox,
  httpGetAllBoxes,
  httpGetBox,
  httpUpdateBox,
  httpDeleteBox,
} = require("./boxes.controllers");

const boxesRouter = Router();

boxesRouter.get("/", httpGetAllBoxes);

boxesRouter.get("/:boxId", httpGetBox);

/************ user or admin authentication required ***********/

boxesRouter.put("/:boxId", httpUpdateBox);

/**************** admin authentication required ***************/

boxesRouter.post("/", httpCreateBox);

boxesRouter.delete("/:boxId", httpDeleteBox);

/**************************************************************/

module.exports = boxesRouter;
