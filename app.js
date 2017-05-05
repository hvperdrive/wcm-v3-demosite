require("rootpath")();
var app = require("express")();

// Set NODE_ENV
process.env.NODE_ENV = process.env.NODE_ENV || "acceptance";

var config = require("config");

// Set base path
global.__base = __dirname + "/";

// Init app
require("app/middleware")(app);

app.listen(config.server.port, function() {
	console.log("Server listening at port %s.", config.server.port); // eslint-disable-line no-console
});
