const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const boxesRouter = require("./routes/boxes/boxes.router");
const usersRouter = require("./routes/users/users.router");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/boxes", boxesRouter);
app.use("/users", usersRouter);

app.use((err, req, res, next) => {
  return res.status(500).json({ error: err.message });
});

module.exports = app;
