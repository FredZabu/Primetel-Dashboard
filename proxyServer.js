/* eslint-disable no-undef */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://20.45.130.169:3001',  // Replace with your backend URL
            changeOrigin: true,
            pathRewrite: {
                '^/api': '', // Remove the '/api' prefix when forwarding requests
            },
        })
    );
};