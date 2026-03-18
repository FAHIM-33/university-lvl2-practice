import mongoose from 'mongoose'
import type { IGenericErrorMessage } from '../app/middlewares/globalErrorHandler.js'

const handleVarificationError = (err: mongoose.Error.ValidationError) => {
  const errors: IGenericErrorMessage[] = Object.values(err.errors).map(
    (elem: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: elem?.path || '',
        message: elem?.message,
      }
    },
  )

  const statusCode = 400
  return {
    statusCode,
    message: 'Validation Error',
    errorMessages: errors,
  }
}

export default handleVarificationError
