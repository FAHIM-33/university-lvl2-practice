import type { Request, Response } from 'express'
import { HardwareService } from './arduino.service.js'

const triggerUSB = async (req: Request, res: Response) => {
  const led = req.query.led
  console.log('sent led is :', led)
  try {
    if (led === 'r') {
      await HardwareService.sendCommandToUSB('r')
    } else if (led === 'g') {
      await HardwareService.sendCommandToUSB('g')
    } else if (led === 'b') {
      await HardwareService.sendCommandToUSB('b')
    } else {
      await HardwareService.sendCommandToUSB('o')
    }
    // res.status(200).json({
    //   success: true,
    //   message: 'Command sent to /dev/ttyUSB0',
    // })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      error: err.message,
    })
  }
}

export const HardwareController = {
  triggerUSB,
}
