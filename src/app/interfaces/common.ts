import type { IGenericErrorMessage } from '../middlewares/globalErrorHandler.js'

export type IGenericErrorResponse = {
  statusCode: number | string
  message: string
  errorMessages: IGenericErrorMessage[]
}
