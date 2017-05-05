require("rootpath")();
var proxy = require("http-proxy").createProxyServer({});
var config = require("config");

var fallback = function(err, req, res) {
    return res.status(500).json({
        err: "Error while proxing to " + config.server.proxy.baseUrl
    });
};

module.exports = function(req, res, options) {
    proxy.web(req, res, options, fallback);
};
