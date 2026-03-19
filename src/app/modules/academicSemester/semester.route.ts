import express from 'express'
import validateRequest from '../../middlewares/validateRequest.js'
import { SemesterValidation } from './semester.validation.js'
import { SemesterController } from './semester.controller.js'

const router = express.Router()

router.post(
  '/create-semester',
  validateRequest(SemesterValidation.createSemesterZodSchema),
  SemesterController.createSemester,
)

export const SemesterRoute = router
