const express = require("express");
const app = express();
const PORT = 3000;
const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(require('./controller'));


db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log("App listening on PORT " + PORT));
});
