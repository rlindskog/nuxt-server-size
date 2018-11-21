// const connect = require('connect')
// const nuxtResolver = require('./nuxt-resolver')

// const app = connect()

// async function setupMiddleware () {

// }

// async function useMiddleware () {

// }

// async function useMiddleware(middleware) {
//   // Resolve middleware
//   if (typeof middleware === 'string') {
//     middleware = nuxtResolver.requireModule(middleware)
//   }

//   // Resolve handler
//   if (typeof middleware.handler === 'string') {
//     middleware.handler = nuxtResolver.requireModule(middleware.handler)
//   }
//   const handler = middleware.handler || middleware

//   // Resolve path
//   const path = (
//     (middleware.prefix !== false ? this.options.router.base : '') +
//     (typeof middleware.path === 'string' ? middleware.path : '')
//   ).replace(/\/\//g, '/')

//   // Use middleware
//   this.app.use(path, handler)
// }
