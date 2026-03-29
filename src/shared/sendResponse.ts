import type { Response } from 'express'
export type IApiResponse<T> = {
  statusCode: number
  success: boolean
  message?: string
  meta?: {
    page: number
    limit: number
    total: number
  }
  data?: T
}

const sendRes = <T>(res: Response, data: IApiResponse<T>): void => {
  res.status(data.statusCode).json({
    success: data.success,
    message: data.message,
    data: data.data || null,
  })
}

export default sendRes
