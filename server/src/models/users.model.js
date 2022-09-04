const pool = require("./db");

async function getAllUsers() {
  const users = await pool.query("select * from users");
  return users.rows;
}

async function getUser(userId) {
  const result = await pool.query("select * from users where user_id = $1", [
    userId,
  ]);
  return result.rows[0];
}

module.exports = {
  getUser,
  getAllUsers,
};
