require("rootpath")();

module.exports = {
    server: {
        hostname: 'http://localhost:3000/',
        port: 3000,
        apiKey: "000-000",
        tenant: "example-website",
        proxy: {
            baseUrl: "http://wcm.district01.be/",
            path: "tenant/",
            suffix: "api/1.0.0/"
        }
    }
};
