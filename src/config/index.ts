import { configDotenv } from 'dotenv'
import path from 'path'
configDotenv({ path: path.join(process.cwd(), '.env') })
export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  default_user_pass: process.env.DEFAULT_PASS_USER,
  env: process.env.NODE_ENV,
}
