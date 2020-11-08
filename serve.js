const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
const morgan = require('morgan')
const sirv = require('sirv')

const PORT = 1234

serve()

function serve() {
  express()
    .use(morgan('dev'))
    .use(
      '/api',
      createProxyMiddleware({
        target: 'http://localhost:8080',
        secure: false, // ignore ERR_TLS_CERT_ALTNAME_INVALID
        changeOrigin: true, // change HOST header to target domain
      }),
    )
    .use(sirv('dist', { single: true }))
    .listen(PORT, (err) => {
      if (err) {
        throw err
      }

      console.log(`\nRunning on http://localhost:${PORT} 🏃💨\n`)
    })
}
