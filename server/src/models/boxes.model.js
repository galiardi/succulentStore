const { admin } = require("../../config");
const pool = require("./db");

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

/**************** user authentication required ***************/

async function updateReserved(userId, userPassword, boxId, isReserved) {
  // /* TO DO: Where to store user password? (Currently using email as password)
  const password = await pool.query(
    "select email from users where user_id = $1",
    [userId]
  );
  if (userPassword !== password.rows[0].email) return false;
  // */
  const result = pool.query(
    "update boxes set reserved = $1 where box_id = $2 returning *",
    [isReserved, boxId]
  );
  return result;
}

/**************** admin authentication required ***************/

async function updateSold(boxId, isSold) {
  const result = await pool.query(
    "update boxes set sold = $1 where box_id = $2 returning *",
    [isSold, boxId]
  );
  return result.rows[0];
}

async function createBox(boxId, imageUrl) {
  const result = await pool.query(
    "insert into boxes (box_id, image_url, reserved, sold) values ($1, $2, false, false) returning *",
    [boxId, imageUrl]
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
  getAllBoxes,
  getBox,
  updateReserved,
  updateSold,
  createBox,
  deleteBox,
};
