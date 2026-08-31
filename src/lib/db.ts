import mysql from 'mysql2/promise';

const dbConfig: mysql.PoolOptions = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'nitp_user',
  password: process.env.DB_PASSWORD || 'nitppassword',
  database: process.env.DB_NAME || 'convocation_db',
  port: parseInt(process.env.DB_PORT || '3306'),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  ssl: process.env.MYSQL_SSL === 'true' ? {
    rejectUnauthorized: false // Set to false to allow connection to TiDB Cloud without manual CA cert downloads
  } : undefined
};

// Create a connection pool to handle multiple concurrent requests efficiently
export const pool = mysql.createPool(dbConfig);

// Helper function to query the database
export async function query<T>(sql: string, params?: any[]) {
  const [results] = await pool.execute(sql, params);
  return results as T;
}
