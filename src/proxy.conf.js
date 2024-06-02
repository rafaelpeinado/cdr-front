const PROXY_CONFIG = [
  {
    context: ['/api'],
    logLevel: 'debug',
    target: 'http://localhost:8080/',
    secure: false,
    // changeOrigin: true,
    // pathRewrite: { '^/api': '' },
  }
]

module.exports = PROXY_CONFIG;
