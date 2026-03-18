// import { SerialPort } from 'serialport';

// We initialize the port outside the function to keep the connection alive
// const port = new SerialPort({
//   path: '/dev/ttyUSB0',
//   baudRate: 9600, // Match this to your Arduino/Device code (e.g., Serial.begin(9600))
//   autoOpen: true,
// });

// Error handling for the hardware connection
// port.on('error', (err) => {
//   console.error('Serial Port Error: ', err.message);
// });

// const sendCommandToUSB = async (char: string): Promise<string> => {
//   return new Promise((resolve, reject) => {
//     // Check if port is open before writing
//     if (!port.isOpen) {
//        return reject(new Error("Serial port is not open"));
//     }

//     port.write(char, (err) => {
//       if (err) {
//         return reject(err);
//       }
//       resolve(`Successfully sent "${char}" to hardware`);
//     });
//   });
// };
const sendCommandToUSB = ()=>{}
export const HardwareService = {
  sendCommandToUSB,
};