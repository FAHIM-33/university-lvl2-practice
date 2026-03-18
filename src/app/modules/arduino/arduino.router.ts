import express from 'express'
import { HardwareController } from './arduino.controller.js'

const router = express.Router()

router.get('/arduino', HardwareController.triggerUSB)

export default router
