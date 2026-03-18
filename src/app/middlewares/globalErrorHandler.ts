import type { ErrorRequestHandler } from 'express'
import config from '../../config/index.js'
import handleVarificationError from '../../error/HandleVarificationError.js'
import ApiError from '../../error/ApiError.js'
import type mongoose from 'mongoose'

import handleZodError from '../../error/handleZodError.js'
// import { ZodError } from 'zod/v3'
import { ZodError } from 'zod'

export type IGenericErrorMessage = {
  path: string | number
  message: string
}

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode: number = 500
  let message = 'Something went wrong'
  let errorMessages: IGenericErrorMessage[] = []
  // console.log(err)
  if (err?.name === 'ValidationError') {
    const simplifiedError = handleVarificationError(
      err as mongoose.Error.ValidationError,
    )
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessages = simplifiedError.errorMessages
  } else if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err as any)
    statusCode = (simplifiedError.statusCode as number) * 1
    message = simplifiedError.message
    errorMessages = simplifiedError.errorMessages
  } else if (err instanceof ApiError) {
    statusCode = err?.statusCode
    message = err.message
    errorMessages = err?.message ? [{ path: '', message: err.message }] : []
  } else if (err instanceof Error) {
    message = err?.message
    errorMessages = err?.message ? [{ path: '', message: err.message }] : []
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== 'production' ? err?.stack : undefined,
  })

  next()
}
export default globalErrorHandler
