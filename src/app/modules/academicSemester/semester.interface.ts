import type { Model } from 'mongoose'

export type TMonth = 
  | 'January' | 'February' | 'March' | 'April' 
  | 'May' | 'June' | 'July' | 'August' 
  | 'September' | 'October' | 'November' | 'December';

export type ISemester = {
  title: 'Autumn' | 'Summer' | 'Fall'
  year: number
  code: "01" | "02" | "03"
  startMonth: TMonth
  endMonth: TMonth
  // id: string
  // syncId?: string
  // createdAt?: Date
  // updatedAt?: Date
}

export type SemesterModel = Model<ISemester>
