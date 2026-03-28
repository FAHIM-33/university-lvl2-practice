import type { NextFunction, Request, Response } from 'express'
import { SemesterService } from './semester.service.js'
import catchAsync from '../../../shared/catchAsync.js'
import sendRes from '../../../shared/sendResponse.js'

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const semesterData = { ...req.body }
    const result = await SemesterService.createSemester(semesterData)

    // res.status(200).json({
    //   success: true,
    //   message: 'Semester created successfully',
    //   data: result,
    // })
    sendRes(res, {
      statusCode: 200,
      success: true,
      message: 'Semester created successfully',
      data: result,
    })
    next()
  },
)

export const SemesterController = {
  createSemester,
}
