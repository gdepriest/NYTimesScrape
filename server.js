var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var expressHandlebars = require("express-handlebars");

var PORT = process.env.PORT || 3000;

var axios = require("axios");
var cheerio = require("cheerio");

var db = require("./models");

var app = express();

app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}));

// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/timesScrape", { useNewUrlParser: true });

app.get("/", function(req, res) {
    res.render("home");
})

app.get("/saved", function(req, res) {
    res.render("saved");
})

app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });
  
