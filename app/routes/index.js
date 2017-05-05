require("rootpath")();
var path = require("path");
var glob = require("glob");

module.exports = function(app) {
	// Find all route files
	var routes = glob("app/routes/**/*.js", {
		sync: true
	});

	// Loop over the routes
	routes.forEach(function(route) {
		// Exclude this file
		if (route !== "app/routes/index.js") {
			// Require the route file
			require(route)(app);
		}
	});

	// Fallback route
	app.route(["/", "/*"]).all(function(req, res) {
		res.sendFile(path.join(__dirname, "../../dist/index.html"));
	});
};
