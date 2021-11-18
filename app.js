const morgan = require("morgan");
const express = require("express");
const layout = require("./views/layout");
const { db } = require("./models");

const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
db.authenticate().then(() => {
  console.log("connected to the database");
});

app.get("/", (req, res) => {
  res.send(layout("hi there"));
});

const start = async () => {
  await db.sync({ force: true });
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
};

start();
