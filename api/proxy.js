const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
  let target = '';

  if (req.url.startsWith('/localhost')) {
    target = 'http://localhost:8880/';
  }

  // @ts-ignore
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      '^/localhost:8880/': '/'
    }
  })(req, res);
};