import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  dbUser: process.env.DATABASE_USER,
  dbPassword: process.env.DATABASE_PASSWORD,
};
