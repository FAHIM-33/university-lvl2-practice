import status from 'http-status'
import ApiError from '../../../error/ApiError.js'
import { semesterTitleCodeMapper } from './semester.constant.js'
import type { ISemester } from './semester.interface.js'
import { Semester } from './semester.model.js'
import type { IPaginationOptions } from './semester.controller.js'
import type { IGenericRes } from '../../interfaces/common.js'

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
  const { page = 1, sortOrder, limit = 10, sortBy } = paginationOptions

  // const sortCondition: { [key: string]: 'asc' | 'desc' } = {}
  // if (sortBy && sortOrder) {
  //   sortCondition[sortBy] = sortOrder
  // } else {
  //   sortCondition['createdAt'] = 'desc'
  // }

  const skip = (page - 1) * limit

  console.log(paginationOptions, skip, limit)
  const result = await Semester.find().limit(limit).skip(skip).sort(sortBy)

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
