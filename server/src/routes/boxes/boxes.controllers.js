const {
  createBox,
  getAllBoxes,
  getBox,
  updateBox,
} = require("../../models/boxes.model");

const { admin } = require("../../../config");

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

async function httpUpdateBox(req, res, next) {
  try {
    const { boxId } = req.params;
    const { password, field, value } = req.body;

    if (password !== admin.password) return res.sendStatus(404);

    const result = await updateBox(boxId, field, value);
    console.log(result);
    if (!result) res.status(400).json({ error: "box_id no encontrado" });

    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  httpCreateBox,
  httpGetAllBoxes,
  httpGetBox,
  httpUpdateBox,
};
