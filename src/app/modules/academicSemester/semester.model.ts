import { Schema, model } from 'mongoose'
import type { ISemester, SemesterModel } from './semester.interface.js'
import {
  semesterCodes,
  semesterMonths,
  semesterTitles,
} from './semester.constant.js'
import ApiError from '../../../error/ApiError.js'
import status from 'http-status'

const semesterSchema = new Schema<ISemester>(
  {
    // id: { type: String, required: true, unique: true },
    title: { type: String, required: true, enum: semesterTitles },
    year: { type: Number, required: true },
    code: { type: String, required: true, enum: semesterCodes },
    startMonth: {
      type: String,
      required: true,
      enum: semesterMonths,
    },
    endMonth: {
      type: String,
      required: true,
      enum: semesterMonths,
    },
  },
  { timestamps: true },
)

// this has to be fefore creating the Model. Order important
semesterSchema.pre('save', async function () {
  const isExist = await Semester.findOne({
    title: this.title,
    year: this.year,
  })
  if (isExist) {
    throw new ApiError(status.CONFLICT, 'Semester already exist')
  }
  // no Next() is needed
})

export const Semester = model<ISemester, SemesterModel>(
  'Semester',
  semesterSchema,
)
