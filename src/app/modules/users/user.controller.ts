import type { NextFunction, Request, Response } from 'express'
import { UserService } from './user.service.js'
import sendRes from '../../../shared/sendResponse.js'

const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { user } = req.body
  // console.log(user, 'asdfasdfasdf')
  try {
    const result = await UserService.createUser(user)
    // res.status(200).json({
    //   success: true,
    //   message: 'successfully created a murgi',
    //   data: result,
    // })
    sendRes(res, {
      statusCode: 200,
      success: true,
      message: 'successfully created a murgi',
      data: result,
    })
    next()
  } catch (err) {
    next(err)
  }
}

export const UserController = {
  createUserController,
}
