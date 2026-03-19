import express from 'express'
import { UserRoute } from '../modules/users/user.route.js'
import { SemesterRoute } from '../modules/academicSemester/semester.route.js'

const router = express.Router()

router.use('/users/', UserRoute)
router.use('/semester/', SemesterRoute)

export default router
