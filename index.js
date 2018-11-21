const { Server } = require('http')
const { Module, Nuxt, Resolver } = require('@nuxt/core')


process.env.NODE_ENV = 'production'
let config = {}
config.dev = process.env.NODE_ENV

const nuxt = new Nuxt(config)

const server = new Server(nuxt.render)

const port = process.env.PORT || 3000

server.listen(port)
