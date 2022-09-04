const { admin } = require("../../config");
const pool = require("./db");

async function createBox(boxId, imageUrl) {
  const result = await pool.query(
    "insert into boxes (box_id, image_url, reserved, sold) values ($1, $2, false, false) returning *",
    [boxId, imageUrl]
  );
  return result.rows[0];
}

async function getAllBoxes() {
  const boxes = await pool.query("select * from boxes");
  return boxes.rows;
}

async function getBox(boxId) {
  const result = await pool.query("select * from boxes where box_id = $1", [
    boxId,
  ]);
  return result.rows[0];
}

async function updateBox(boxId, field, value) {
  const result = await pool.query(
    `update boxes set ${field} = $1 where box_id = $2 returning *`,
    [value, boxId]
  );
  return result.rows[0];
}

async function deleteBox(boxId) {
  const result = await pool.query("delete from boxes where box_id = $1", [
    boxId,
  ]);
  return result.rowCount;
}

module.exports = {
  createBox,
  getAllBoxes,
  getBox,
  updateBox,
  deleteBox,
};
