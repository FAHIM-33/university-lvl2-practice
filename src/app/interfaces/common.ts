import type { IGenericErrorMessage } from '../middlewares/globalErrorHandler.js'

export type IGenericErrorResponse = {
  statusCode: number | string
  message: string
  errorMessages: IGenericErrorMessage[]
}

export type IGenericRes<T> = {
  meta: {
    page: number
    limit: number
    total: number
  }
  data: T
}