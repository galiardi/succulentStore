const { getUser } = require("../../models/users.model");

async function httpGetUser(req, res) {
  const { userId } = req.params;
  const result = await getUser(userId);
  if (!result) return res.status(404).json({ error: "usuario no encontrado" });
  return res.json(result);
}

module.exports = {
  httpGetUser,
};
