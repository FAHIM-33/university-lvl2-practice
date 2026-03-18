import { Schema, model } from 'mongoose'
import type { IUser, UserModel } from './user.interface.js'

const userSchema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
)

export const User = model<IUser, UserModel>('User', userSchema)
