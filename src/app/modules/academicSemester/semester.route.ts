import express from 'express'
import validateRequest from '../../middlewares/validateRequest.js'
import { SemesterValidation } from './semester.validation.js'

const router = express.Router()

router.post('/semester', validateRequest(SemesterValidation.createSemesterZodSchema), )