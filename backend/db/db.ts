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
              question VARCHAR(255) NOT NULL UNIQUE,
              options VARCHAR(255) NOT NULL,
              answers VARCHAR(255) NOT NULL
            );
          `)
    })

  // gribam jau pašā sākumā kad izveidojam datubāzes, iesetot pirmos datus, 
  // database.get('SELECT * from quiz', (err, quiz) => {
  //     // ieliekam iekšā pirmo autoru
  //     database.run(`
  //       INSERT INTO quiz (question, options, answers)
  //       VALUES('Ko dara nslookup funkcija?', 'Pārbauda, vai tīkla savienojums starp diviem datoriem ir iespējams|Kas palīdz meklēt informāciju par datu bāzes objektiem|Ļauj noteikt, vai dators ir savienots ar internetu un noskaidrot tā IP adresi|
  //       Ļauj automātiski atlasīt un konfigurēt tīkla savienojumus starp vairākiem datoriem un tīkla elementiem', 
  //       'Ļauj noteikt, vai dators ir savienots ar internetu un noskaidrot tā IP adresi');
  //   `);
  //     database.run(`
  //     INSERT INTO quiz (question, options, answers)
  //     VALUES('Kas ir IP adrese?', 'Programmatūras veids, ko izmanto datu bāzu pārvaldīšanai|Unikāls skaitliskais identifikators, kas piešķirts katrai ierīcei tīklā, kas izmanto internetu|
  //     Fiziskā adrese, ko tīkla ierīces izmanto, lai sazinātos savā starpā|Tīmekļa pārlūkprogrammas veids, ko izmanto, lai piekļūtu internetam', 
  //     'Unikāls skaitliskais identifikators, kas piešķirts katrai ierīcei tīklā, kas izmanto internetu');
  // `);
  //     database.run(`
  //     INSERT INTO quiz (question, options, answers)
  //     VALUES('Kas ir HTTPS?', 'Drošs protokols, ko izmanto datu pārsūtīšanai starp tīmekļa pārlūkprogrammu un tīmekļa serveri|Rīks, ko izmanto datu bāzu pārvaldībai|
  //     Programmēšanas valoda, ko izmanto web lapu veidošanai|API', 'Drošs protokols, ko izmanto datu pārsūtīšanai starp tīmekļa pārlūkprogrammu un tīmekļa serveri');
  //   `);
  // })

  // database.run(`DELETE FROM quiz`);
 

    console.log('Database connection Successful')
  } catch (error) {
    throw error
  }
}
