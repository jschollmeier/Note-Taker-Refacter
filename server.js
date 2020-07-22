var express = require("express");
//var path = require("path");



var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('Develop/public'));

const apiRoutes = require("./Develop/controllers/notesController");
const htmlRoutes = require("./Develop/controllers/htmlController.js");
app.use(apiRoutes);
app.use(htmlRoutes);


// require("./Develop/routes/apiRoutes")(app);

// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "Develop/public/index.html"));
// });

//   app.get("/notes", function(req, res) {
//     res.sendFile(path.join(__dirname, "Develop/public/notes.html"));
//   });

  app.listen(PORT, function() {
    console.log("App listening on localhost:" + PORT);
  });