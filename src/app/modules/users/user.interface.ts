import type { Model } from "mongoose"

export type UserModel = Model<IUser, Record<string, unknown>>

export interface IUser {
  id: string
  role: string
  password: string
  
}
