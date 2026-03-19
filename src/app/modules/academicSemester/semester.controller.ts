import type { NextFunction, Request, Response } from 'express'
import { SemesterService } from './semester.service.js'

const createSemester = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const semesterData = {...req.body}
    const result = await SemesterService.createSemester(semesterData)

    res.status(200).json({
      success: true,
      message: 'Semester created successfully',
      data: result,
    })
  } catch (err) {
    next(err)
  }
}

export const  SemesterController = {
  createSemester,
}
