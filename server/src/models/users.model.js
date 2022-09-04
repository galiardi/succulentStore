const pool = require("./db");

async function getUser(userId) {
  const result = await pool.query("select * from users where user_id = $1", [
    userId,
  ]);
  return result.rows[0];
}

module.exports = {
  getUser,
};
