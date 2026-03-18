
import z from 'zod'

const createSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum(['Autumn', 'Summer', 'Fall'], {
      message: 'title is required',
    }),
    year: z.number({
      message: 'year is required',
    }),
    code: z.enum(['01', '02', '03'], {
      message: 'code is required',
    }),
    startMonth: z.enum(
      [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      {
        message: 'startMonth is required',
      },
    ),
    endMonth: z.enum(
      [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      {
        message: 'endMonth is required',
      },
    ),
  }),
})

export const SemesterValidation = {
  createSemesterZodSchema,
}
