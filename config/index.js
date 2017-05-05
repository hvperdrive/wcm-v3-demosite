require("rootpath")();

module.exports = require(__dirname + "/env/" + process.env.NODE_ENV.toLowerCase() + ".js")
