const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://realestatebackend-d7m4.onrender.com",
      changeOrigin: true,
    })
  );
};
