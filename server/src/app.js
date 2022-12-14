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
app.get("/", (req, res) => {
  res.status(200).json({ hello: "world" });
});

app.use((err, req, res, next) => {
  return res.status(500).json({ err });
});

module.exports = app;
