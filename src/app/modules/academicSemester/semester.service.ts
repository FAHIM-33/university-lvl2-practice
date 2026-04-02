import status from 'http-status'
import ApiError from '../../../error/ApiError.js'
import { semesterTitleCodeMapper } from './semester.constant.js'
import type { ISemester } from './semester.interface.js'
import { Semester } from './semester.model.js'
import type { IGenericRes } from '../../interfaces/common.js'
import {
  calculatePagination,
  type IPaginationOptions,
} from '../../../shared/pagination.js'

const createSemester = async (payload: ISemester): Promise<ISemester> => {
  if (semesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(status.BAD_REQUEST, 'Invalid Semester Code')
  }
  const result = await Semester.create(payload)
  return result
}

const getAllSemesters = async (
  paginationOptions: IPaginationOptions,
): Promise<IGenericRes<ISemester[]>> => {
  // const { page = 1, limit = 10, sortBy } = paginationOptions
  // const skip = (page - 1) * limit
  const { page, limit, skip, sortBy, sortOrder } =
    calculatePagination(paginationOptions)

  const result = await Semester.find()
    .limit(limit)
    .skip(skip)
    .sort({ [sortBy]: sortOrder })

  const total = await Semester.countDocuments()

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  }
}

export const SemesterService = {
  createSemester,
  getAllSemesters,
}
