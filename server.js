// server dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var Article = require("./models/Article");

// Create a new express app
var app = express();
// Sets an initial port for deployed or local
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

mongoose.connect("mongodb://localhost/nytreact");
var db = mongoose.connection;

db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
});

db.once("open", function() {
    console.log("Mongoose connection successful.");
});

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/api", function(req, res){
    Article.find({}).sort(["date", "descending"])
    limit(5).exec(function(err, doc){
        if(err){
            console.log(err);
        } else {
            res.send(doc);
        }
    });
});

app.post("/api", function(req,res){
    console.log(req.body);
    Article.create({
        title: req.body,
        web_url: req.body,
        date: Date.now()
    }, function(err){
        if(err){
            console.log(err);
        } else {
            res.send("Saved");
        }
    });
});

// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
