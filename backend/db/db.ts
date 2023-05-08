//@ts-check

/**
 * * Library imports
 */
// ? https://www.npmjs.com/package/sqlite3
import sqlite3 from 'sqlite3'

// Defining the DB
export const database = new sqlite3.Database('./db/database.db')

// Runs at the server start
export async function initializeDB() {
  try {
    database.serialize(() => {
      // Creates the database tables if they do not exist

      // Computer systems table
      database.run(`
            CREATE TABLE IF NOT EXISTS datorsys (
              id INTEGER PRIMARY KEY,
              question VARCHAR(255) NOT NULL,
              options VARCHAR(255) NOT NULL,
              answers VARCHAR(255) NOT NULL
            );
          `)

      // Databases table
      database.run(`
            CREATE TABLE IF NOT EXISTS databases (
              id INTEGER PRIMARY KEY,
              question VARCHAR(255) NOT NULL,
              options VARCHAR(255) NOT NULL,
              answers VARCHAR(255) NOT NULL
            );
          `)

      // Problem analysis table
      database.run(`
          CREATE TABLE IF NOT EXISTS problemAnalysis (
            id INTEGER PRIMARY KEY,
            question VARCHAR(255) NOT NULL,
            options VARCHAR(255) NOT NULL,
            answers VARCHAR(255) NOT NULL
          );
        `)

      // OOP table
      database.run(`
          CREATE TABLE IF NOT EXISTS oop (
            id INTEGER PRIMARY KEY,
            question VARCHAR(255) NOT NULL,
            options VARCHAR(255) NOT NULL,
            answers VARCHAR(255) NOT NULL
          );
        `)

      // API table
      database.run(`
          CREATE TABLE IF NOT EXISTS api (
            id INTEGER PRIMARY KEY,
            question VARCHAR(255) NOT NULL,
            options VARCHAR(255) NOT NULL,
            answers VARCHAR(255) NOT NULL
          );
        `)
    })

    // ! Legacy code

    // // gribam jau pašā sākumā kad izveidojam datubāzes, iesetot pirmos datus,
    // database.get('SELECT * from databases', (err, quiz) => {
    //   // ieliekam iekšā pirmo autoru
    //   database.run(`
    //       INSERT INTO databases (question, options, answers)
    //       VALUES('Kas ir primārā atslēga?', 'Atribūts, kas identificē tabulas datus un to attiecības|Atribūts, kas piešķir tabulas datiem valstisku identifikatoru|Atribūts, kas nosaka tabulas galveno indeksu|
    //       Atribūts, kas atļauj piekļuvi tabulas datiem no ārējām programmām',
    //       'Ļauj noteikt, vai dators ir savienots ar internetu un noskaidrot tā IP adresi');
    //   `)
    //   database.run(`
    //     INSERT INTO databases (question, options, answers)
    //     VALUES('Kuru no sekojošajiem SQL querijiem izmanto, lai ievietotu jaunus datus
    // datubāzē?', 'UPDATE|DELETE|
    //     INSERT|SET',
    //     'INSERT');
    // `)
    //   database.run(`
    //     INSERT INTO databases (question, options, answers)
    //     VALUES('Kas ir NoSQL datubāze?', 'Nav relāciju datu bāze, kas saglabā un izgūst datus elastīgu un mērogojamu veidā|Datubāze, kas izmanto tikai SQL programmēšanas valodu datu izguvei un pārvaldībai|
    //     Datubāze, kurai vienlaikus var piekļūt tikai viens lietotājs|DatuBāze, kas paredzēta tikai mobilajām ierīcēm', 'DatuBāze, kas paredzēta tikai mobilajām ierīcēm');
    //   `)
    // })


    // database.get('SELECT * from datorsys', (err, quiz) => {
    //   // ieliekam iekšā pirmo autoru
    //   database.run(`
    //   INSERT INTO datorsys (question, options, answers)
    //   VALUES('Ko dara nslookup funkcija?', 'Pārbauda, vai tīkla savienojums starp diviem datoriem ir iespējams|Kas palīdz meklēt informāciju par datu bāzes objektiem|Ļauj noteikt, vai dators ir savienots ar internetu un noskaidrot tā IP adresi|Ļauj automātiski atlasīt un konfigurēt tīkla savienojumus starp vairākiem datoriem un tīkla elementiem',
    //   'Ļauj noteikt, vai dators ir savienots ar internetu un noskaidrot tā IP adresi');
    // `)

    //   database.run(`
    //     INSERT INTO datorsys (question, options, answers)
    //     VALUES('Kas ir IP adrese?', 'Programmatūras veids, ko izmanto datu bāzu pārvaldīšanai|Unikāls skaitliskais identifikators, kas piešķirts katrai ierīcei tīklā, kas izmanto internetu|
    //     Fiziskā adrese, ko tīkla ierīces izmanto, lai sazinātos savā starpā|Tīmekļa pārlūkprogrammas veids, ko izmanto, lai piekļūtu internetam',
    //     'Fiziskā adrese, ko tīkla ierīces izmanto, lai sazinātos savā starpā');
    // `)
    //   database.run(`
    //     INSERT INTO datorsys (question, options, answers)
    //     VALUES('Kas ir HTTPS?', 'Drošs protokols, ko izmanto datu pārsūtīšanai starp tīmekļa pārlūkprogrammu un tīmekļa serveri|Rīks, ko izmanto datu bāzu pārvaldībai|
    //     Programmēšanas valoda, ko izmanto web lapu veidošanai|API',
    //     'INSERT');
    // `)
    // })


    // database.get('SELECT * from oop', (err, quiz) => {
    //   // ieliekam iekšā pirmo autoru
    //   database.run(`
    //       INSERT INTO oop (question, options, answers)
    //       VALUES('Kas ir Polymorphism?', 'Mehānisms, kas ļauj jaunai klasei balstīties uz esošu klasi, mantojot visas tās metodes un atribūtus|Programmēšanas princips, ko izmanto, lai paslēptu klases ieviešanas informāciju no lietotājiem|Vairāku objektu izveides process no vienas klases|
    //       Princips, kā modificēt metodes uzvedību apakšklasē, nemainot tās ieviešanu esošajā klasē',
    //       'Mehānisms, kas ļauj jaunai klasei balstīties uz esošu klasi, mantojot visas tās metodes un atribūtus');
    //   `)
    //   database.run(`
    //     INSERT INTO oop (question, options, answers)
    //     VALUES('Kurš no šiem nav OOP princips?', 'Polymorphism|Inheritance|Abstraction|Iteration',
    //     'Abstraction');
    // `)
    //   database.run(`
    //     INSERT INTO oop (question, options, answers)
    //     VALUES('Kas ir Enkapsulācija?', 'Princips, kas ierobežo tiešu piekļuvi objekta atribūtiem un metodēm, un tā vietā nodrošina piekļuvi, izmantojot publiskas metodes|Princips, kas ļauj jaunai klasei balstīties uz esošu klasi, mantojot visas tās metodes un atribūtus|Princips, kas ļauj pret dažādu klašu objektiem izturēties tā, it kā tie būtu vienas klases|Princips, kas ļauj apakšklasei ignorēt tās vecāku klases metodes',
    //     'Princips, kas ļauj apakšklasei ignorēt tās vecāku klases metodes');
    //   `)
    // })


    // database.get('SELECT * from api', (err, quiz) => {
    //   // ieliekam iekšā pirmo autoru
    //   database.run(`
    //       INSERT INTO api (question, options, answers)
    //       VALUES('Kas ir REST API?', 'API veids, kas datu pārsūtīšanai izmanto tikai POST metodi|Ievēro reprezentācijas stāvokļa nodošanas (REST) arhitektūras principus|API veids, kas neizmanto HTTP protokolu datu pārsūtīšanai|API veids, kas paredzēts tikai mobilajām ierīcēm',
    //       'Ievēro reprezentācijas stāvokļa nodošanas (REST) arhitektūras principus');
    //   `)
    //   database.run(`
    //     INSERT INTO api (question, options, answers)
    //     VALUES('Kāda ir API nozīme programmēšanā?', 'Programmatūras funkcija, kas ļauj noteikt lietotāju autorizācijas līmeni un drošības iestatījumus|Valodu izpratnes līmenis, kas nepieciešams, lai programmētājs varētu strādāt ar konkrētu valodu|Datubāzes sistēma, kas izmanto API tehnoloģijas, lai nodrošinātu savienojamību starp datu avotu un lietotņu programmētāju.|Analīzes metode, kas koncentrējas uz uzņēmuma tehnoloģisko attīstību',
    //     'Programmatūras funkcija, kas ļauj noteikt lietotāju autorizācijas līmeni un drošības iestatījumus');
    // `)
    //   database.run(`
    //     INSERT INTO api (question, options, answers)
    //     VALUES('Kas ir API atslēga?', 'Unikāls identifikators, ko izmanto, lai autentificētu un piekļūtu API|Šifrēšanas veids, ko izmanto, lai nodrošinātu ar API pārsūtītos datus|Rīks, ko izmanto API dokumentācijas ģenerēšanai|Programmēšanas valoda, ko izmanto, lai izveidotu API',
    //     'Unikāls identifikators, ko izmanto, lai autentificētu un piekļūtu API');
    //   `)
    // })


    // database.get('SELECT * from problemAnalysis', (err, quiz) => {
    //   // ieliekam iekšā pirmo autoru
    //   database.run(`
    //     INSERT INTO problemAnalysis (question, options, answers)
    //     VALUES('Kas ir koda akceptēšana?', 'Process, kurā programmētājs pārbauda, vai programma ir pilnīgi bez kļūdām|Veids, kā samazināt nepieciešamību pēc papildu atmiņas un procesora resursiem|
    //     Process, kurā programma tiek pārveidota no vienas programmēšanas valodas uz citu programmēšanas valodu|Process, kurā izstrādātais kods tiek pārbaudīts, novērtēts un apstiprināts, lai nodrošinātu tā kvalitāti un pareizu darbību',
    //     'Process, kurā programma tiek pārveidota no vienas programmēšanas valodas uz citu programmēšanas valodu');`)
    //   database.run(`
    //     INSERT INTO problemAnalysis (question, options, answers)
    //     VALUES('Kas ir koda atkļūdošana?', 'Process, kurā programmētājs veic kodu optimizāciju, lai palielinātu programmas veiktspēju|Metode, kas ļauj pārvērst programmēšanas kodu par izpildāmu failu, lai to varētu izpildīt datorā|
    //     Process, kurā programmētājs izvērtē un novērš koda kļūdas, lai nodrošinātu programmas pareizu darbību|Prakse, kas tiek izmantota, lai apvienotu vairākus kodu fragmentus vienā lielākā kodā, uzlabojot programmas izpildes efektivitāti',
    //     'Prakse, kas tiek izmantota, lai apvienotu vairākus kodu fragmentus vienā lielākā kodā, uzlabojot programmas izpildes efektivitāti');`)
    //   database.run(`
    //     INSERT INTO problemAnalysis (question, options, answers)
    //     VALUES('Kas ir SWOT analīze?', 'Analīzes metode, kas koncentrējas uz spēcīgo un vājo pušu noteikšanu|Analīzes metode, kas pēta uzņēmuma darba vides ietekmi|
    //     Analīzes metode, kas pēta uzņēmuma finanšu stāvokli|Analīzes metode, kas koncentrējas uz uzņēmuma tehnoloģisko attīstību',
    //     'Analīzes metode, kas pēta uzņēmuma darba vides ietekmi');`)
    // })

    // database.run(`DELETE FROM quiz`);

    console.log('Database connection Successful')
  } catch (error) {
    throw error
  }
}
