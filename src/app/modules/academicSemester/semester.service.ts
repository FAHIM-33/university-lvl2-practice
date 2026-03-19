import type { ISemester } from './semester.interface.js'
import { Semester } from './semester.model.js'

const createSemester = async (payload: ISemester): Promise<ISemester> => {
  const result = await Semester.create(payload)
  return result
}
export const SemesterService = {
  createSemester,
}
