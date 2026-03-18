import mongoose from 'mongoose'
import config from './config/index.js'
import app from './app.js'
import logger from './shared/logger.js'
import type { Server } from 'http'
// import { error } from 'node:console'
const port = config.port

process.on('uncaughtException', error => {
  console.log('uncaughtException is detected. closing server');
  process.exit(1)
})

let server: Server

async function main() {
  

  try {
    await mongoose.connect(config.database_url as string)
    // logger.info(`🔥 database is connected`)
    console.log(`🔥 database is connected`)

    server = app.listen(port, () => {
      // logger.info(`Example app listening on port ${port}`)
      console.log(`Example app listening on port ${port}`)
    })
  } catch (error) {
    logger.error(error)
  }

  process.on('unhandledRejection', error => {
    console.log('unhandled rejection reason')
    if (server) {
      server.close(() => {
        console.log('server crash reason', error)
      })
    }
    process.exit(1)
  })
}

main()

// process.on('SIGTERM',()=>{
//   console.log('signal is received');
//   if(server){
//     server.close()
//   }
// })