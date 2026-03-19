import express, {
  type NextFunction,
  type Request,
  type Response, // type NextFunction,
  // type Request,
} from 'express'

// import arduinoRoute from './app/modules/arduino/arduino.router.js'

const app = express()

import cors from 'cors'
import globalErrorHandler from './app/middlewares/globalErrorHandler.js'
import { UserRoute } from './app/modules/users/user.route.js'
import { SemesterRoute } from './app/modules/academicSemester/semester.route.js'
// import ApiError from './error/ApiError.js'

app.use(cors())
// parser
app.use(express.json())

// routes
app.use('/api/v1/users/', UserRoute)
app.use('/api/v1/semester/', SemesterRoute)
// app.use('/', arduinoRoute)

//testing
app.get('/', async (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello World!')
  // throw new ApiError(400, 'bla bla bla')
  // Promise.reject(new Error('unhandled promise rejected'))
})

//global error handler
app.use(globalErrorHandler)

export default app
