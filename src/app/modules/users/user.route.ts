import express from 'express'
import { UserController } from './user.controller.js'
import validateRequest from '../../middlewares/validateRequest.js'
import { UserValidation } from './user.validation.js'


const router = express.Router()

router.post(
  '/create-user',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createUserController,
)

export const UserRoute = router
