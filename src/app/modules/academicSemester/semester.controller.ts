import type { Request, Response } from 'express'
import { SemesterService } from './semester.service.js'
import catchAsync from '../../../shared/catchAsync.js'

const createSemester = catchAsync(async (req: Request, res: Response) => {
  const semesterData = { ...req.body }
  const result = await SemesterService.createSemester(semesterData)

  res.status(200).json({
    success: true,
    message: 'Semester created successfully',
    data: result,
  })
})

export const SemesterController = {
  createSemester,
}
