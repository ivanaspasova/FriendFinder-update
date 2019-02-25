var express = require("express");
var path = require("path");

var app = express();
var port = process.env.PORT || 3000;

require("../app/routing/htmlRoutes")(app, path);
require("../app/routing/apiRoutes")(app);
app.listen(port, function() {
  console.log("App Listening on Port 3000");
});
