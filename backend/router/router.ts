//@ts-check

/**
 * * Library imports
 */
// ? https://www.npmjs.com/package/express
import express from 'express'

import { database } from '../db/db'

// Defines a new Router object
export const router = express.Router()

// Route to post the quiz answers
router.post('/quiz', (req, res) => {
  database.run(
    `
        INSERT INTO quiz (title, question, answers)
        VALUES("${req.body.title}", "${req.body.question}", "${req.body.answers}");
      `,
    () => {
      res.json('Answer submitted successfully')
    }
  )
})

// Route to get the quiz data
router.get('/quiz', (req: any, res: any) => {
  database.all('SELECT * FROM quiz', (error: any, quiz: any) => {
    res.json(quiz)
  })
})
