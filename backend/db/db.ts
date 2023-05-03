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
              questions VARCHAR(255) NOT NULL,
              answers VARCHAR(255) NOT NULL
            );
          `)
    })

    // gribam jau pašā sākumā kad izveidojam datubāzes, iesetot pirmos datus, 
  // tāpēc paprasa datus no autors tabulas lai pārliecinātos vai tabula ir tukša vai nav
  // dati būs pieejami funkcijas argumentā autors
  database.get('SELECT * from quiz', (err, quiz) => {
    // ja autoru nav, tad zinām ka datu vēl datubāzē nav vispār
    if (!quiz) {
      // ieliekam iekšā pirmo autoru
      database.run(`
        INSERT INTO quiz (title, questions, answers)
        VALUES('Datorsistēmas', 'Pārbauda, vai tīkla savienojums starp diviem datoriem ir iespējams|Kas palīdz meklēt informāciju par datu bāzes objektiem|Ļauj noteikt, vai dators ir savienots ar internetu un noskaidrot tā IP adresi|
        Ļauj automātiski atlasīt un konfigurēt tīkla savienojumus starp vairākiem datoriem un tīkla elementiem', 
        'Ļauj noteikt, vai dators ir savienots ar internetu un noskaidrot tā IP adresi');
    `);
    }
  })

  // database.run(`DELETE FROM quiz`);

    

    console.log('Database connection Successful')
  } catch (error) {
    throw error
  }
}
