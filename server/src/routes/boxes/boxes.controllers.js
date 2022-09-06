const {
  getAllBoxes,
  getBox,
  updateReserved,
  updateSold,
  createBox,
  deleteBox,
} = require("../../models/boxes.model");

const { admin } = require("../../../config");

async function httpGetAllBoxes(req, res, next) {
  try {
    const boxes = await getAllBoxes();
    return res.status(200).json(boxes);
  } catch (err) {
    next(err);
  }
}

async function httpGetBox(req, res, next) {
  try {
    const boxId = req.params.boxId;
    const result = await getBox(boxId);
    if (!result) return res.status(404).json({ error: "box_id no encontrado" });
    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}

/************ user or admin authentication required ***********/

async function httpUpdateBox(req, res, next) {
  try {
    const { boxId } = req.params;
    const { userId, userPassword, isReserved, adminPassword, isSold } =
      req.body;

    // user request
    if (userId) {
      const result = await updateReserved(
        userId,
        userPassword,
        boxId,
        isReserved
      );
      if (!result) return res.sendStatus(404);
      return res.status(200).json(result.rows[0]);
    }

    // admin request
    if (adminPassword !== admin.password) return res.sendStatus(404);

    const result = await updateSold(boxId, isSold);
    if (!result) res.status(400).json({ error: "box_id no encontrado" });

    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}

/**************** admin authentication required ***************/

async function httpCreateBox(req, res, next) {
  try {
    const { password, boxId, imageUrl } = req.body;
    if (password !== admin.password) return res.sendStatus(404);
    const result = await createBox(boxId, imageUrl);
    return res.json(result);
  } catch (err) {
    next(err);
  }
}

async function httpDeleteBox(req, res, next) {
  try {
    const { boxId } = req.params;
    const { password } = req.body;

    if (password !== admin.password) return res.sendStatus(404);

    const result = await deleteBox(boxId);
    if (!result) return res.status(404).json({ error: "Box not found" });
    return res.sendStatus(204);
  } catch (err) {
    next(err);
  }
}

/**************************************************************/

module.exports = {
  httpCreateBox,
  httpGetAllBoxes,
  httpGetBox,
  httpUpdateBox,
  httpDeleteBox,
};
