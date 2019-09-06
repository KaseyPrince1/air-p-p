// modules 
const express = require("express");
const app = express();
const PORT = 3000;
const db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// routes
app.use(require('./controller'));

///passport 
app.get('/signIn', (req, res) => {
  res.render('signIn');
}


db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log("App listening on PORT " + PORT));
});
