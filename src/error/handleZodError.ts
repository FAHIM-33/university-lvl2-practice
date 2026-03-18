import type { ZodError, ZodIssue } from 'zod/v3'
import type { IGenericErrorResponse } from '../app/interfaces/common.js'
import type { IGenericErrorMessage } from '../app/middlewares/globalErrorHandler.js'

const handleZodError = (err: ZodError): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = err.issues.map((iss: ZodIssue) => {
    // console.log(iss.path);
    return {
      path: iss?.path[iss.path.length - 1] || '',
      message: iss.message,
    }
  })

  const statusCode = 400

  return {
    statusCode,
    message: 'Zod validation error',
    errorMessages: errors,
  }
}

export default handleZodError
