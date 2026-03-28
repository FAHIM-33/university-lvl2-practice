import status from 'http-status'
import ApiError from '../../../error/ApiError.js'
import { semesterTitleCodeMapper } from './semester.constant.js'
import type { ISemester } from './semester.interface.js'
import { Semester } from './semester.model.js'
import type { IPaginationOptions } from './semester.controller.js'

const createSemester = async (payload: ISemester): Promise<ISemester> => {
  if (semesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(status.BAD_REQUEST, 'Invalid Semester Code')
  }
  const result = await Semester.create(payload)
  return result
}

const getAllSemesters = (paginationOptions: IPaginationOptions) => {
  
}

export const SemesterService = {
  createSemester,
  getAllSemesters,
}
