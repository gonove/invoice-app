import dotenv from "dotenv";
import { Sequelize } from 'sequelize';
// Config dot.env
dotenv.config();


const db = new Sequelize(
    process.env.DB_NAME || '',
    process.env.DB_NAME || '',
    process.env.DB_PASSWORD || '',
    {
        host : process.env.DB_HOST,
        dialect : 'postgres',
        port : Number(process.env.DB_PORT) || 5432,
        // logging : false
    }
)

// Create a single supabase client for interacting with your database
// const supabase = createClient(
//     process.env.SUPABASE_URL || '',
//     process.env.SUPABASE_KEY || ''
// )

export default db;