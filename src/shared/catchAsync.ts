import type { NextFunction, Request, RequestHandler, Response } from 'express'

function catchAsync(fn: RequestHandler) {
  return async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      await fn(req, res, next)
    } catch (err) {
      next(err)
    }
  }
}
export default catchAsync
