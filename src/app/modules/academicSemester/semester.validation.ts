import z from 'zod'
import {
  semesterCodes,
  semesterMonths,
  semesterTitles,
} from './semester.constant.js'

const createSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum(semesterTitles, {
      message: 'title is required',
    }),
    year: z.number({
      message: 'year is required',
    }),
    code: z.enum(semesterCodes, {
      message: 'code is required',
    }),
    startMonth: z.enum(semesterMonths, {
      message: 'startMonth is required',
    }),
    endMonth: z.enum(semesterMonths, {
      message: 'endMonth is required',
    }),
  }),
})

export const SemesterValidation = {
  createSemesterZodSchema,
}
