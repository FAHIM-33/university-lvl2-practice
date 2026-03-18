import { Schema, model } from 'mongoose'
import type { ISemester, SemesterModel } from './semester.interface.js'

const semesterSchema = new Schema<ISemester>(
  {
    // id: { type: String, required: true, unique: true },
    title: { type: String, required: true, enum: ['Autumn', 'Summer', 'Fall'] },
    year: { type: Number, required: true },
    code: { type: String, required: true, enum: ['01', '02', '03'] },
    startMonth: {
      type: String,
      required: true,
      enum: [
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
    },
    endMonth: {
      type: String,
      required: true,
      enum: [
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
    },
  },
  { timestamps: true },
)

export const Semester = model<ISemester, SemesterModel>(
  'Semester',
  semesterSchema,
)
