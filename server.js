var express = require("express");
var app  = express();

app.set("port", (process.env.PORT || 5000));

app.listen(app.get("port"), function() {
    console.log("Now listening on port for connections on port: ", app.get("port"));
});

app.get("/home", home);

function home (request, response) {
   
};