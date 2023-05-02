//@ts-check

/**
 * * Library imports
 */
import sqlite3 from 'sqlite3'

// Defining the DB
export const database = new sqlite3.Database('./db/database.db')

// Runs at the server start
export async function initializeDB() {
  try {
    database.serialize(() => {
      // Creates the database tables if they do not exist
      database.run(`
            CREATE TABLE IF NOT EXISTS quiz (
              id INTEGER PRIMARY KEY,
              title VARCHAR(255) NOT NULL,
              question VARCHAR(255) NOT NULL,
              answers VARCHAR(255) NOT NULL
            );
          `)
    })

    console.log('Database connection Successful')
  } catch (error) {
    throw error
  }
}
