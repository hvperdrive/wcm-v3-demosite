require("rootpath")();
var config = require("config");
var _ = require("lodash");
var compress = require("compression");
var ProxyMiddleware = require("app/middleware/proxy");
// Set default proxy options
var proxyOptions = {
    target: config.server.proxy.baseUrl + config.server.proxy.path + config.server.proxy.suffix,
    changeOrigin: true,
    headers: {
        host: config.server.hostname,
        apikey: config.server.apiKey,
        tenant: config.server.tenant
    }
    };
    // Copy proxy options
    var proxyOptionsFiles = _.cloneDeep(proxyOptions);

    // Update target for file routes
    proxyOptionsFiles.target += "files/";

    // Setup proxy for files
    var fileRoutes = [
    "/files",
    "/file",
    "/" + config.server.proxy.suffix + "files",
    "/" + config.server.proxy.suffix + "file",
    "/api/1.0.0/files",
    "/api/1.0.0/file"
    ];

    module.exports = function(app) {
    // Start compression
    app.use(compress());

    // Setup express
    require("./express")(app);

    // Setup dumb proxy
    app.use("/proxy", function(req, res) {
        ProxyMiddleware(req, res, proxyOptions);
    });

    // Setup dumb proxy
    app.use(fileRoutes, function(req, res) {
        ProxyMiddleware(req, res, proxyOptionsFiles);
    });

    // Init routes
    require("app/routes")(app);
};
