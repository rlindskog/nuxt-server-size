const { Server } = require('http')
const { Nuxt } = require('@nuxt/core')


let config = {
  dev: false
}


const nuxt = new Nuxt(config)

const server = new Server(nuxt.render)

const port = 3000

server.listen(port, error => {
  console.log('listening at http://localhost:' + port)
})
