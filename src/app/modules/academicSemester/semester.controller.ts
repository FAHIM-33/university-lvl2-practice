import type { NextFunction, Request, Response } from 'express'
import { SemesterService } from './semester.service.js'
import catchAsync from '../../../shared/catchAsync.js'
import sendRes from '../../../shared/sendResponse.js'
import pick, { paginationFields } from '../../../shared/pagination.js'

export type IPaginationOptions = {
  page?: number
  limit?: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

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

const getAllSemester = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const paginationOptions: IPaginationOptions = pick(
      req.query,
      paginationFields,
    )

    const result = await SemesterService.getAllSemesters(paginationOptions)

    sendRes(res, {
      statusCode: 200,
      success: true,
      message: 'All semesters',
      meta: result.meta,
      data: result.data,
    })
  } catch (err) {
    next(err)
  }
}

export const SemesterController = {
  createSemester,
  getAllSemester,
}
