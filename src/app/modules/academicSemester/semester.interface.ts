import type { Model } from 'mongoose'

export type IMonth =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December'

export type ISemesterTitle = 'Autumn' | 'Summer' | 'Fall'
export type ISemesterCode = '01' | '02' | '03'

export type ISemester = {
  title: ISemesterTitle
  year: number
  code: ISemesterCode
  startMonth: IMonth
  endMonth: IMonth
  // id: string
  // syncId?: string
  // createdAt?: Date
  // updatedAt?: Date
}

export type SemesterModel = Model<ISemester>
