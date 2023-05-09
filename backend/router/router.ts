//@ts-check

/**
 * * Library imports
 */
// ? https://www.npmjs.com/package/express
import express from 'express'

import { database } from '../db/db'

// Defines a new Router object
export const router = express.Router()

// * HTTP requests for Users table
// Route to post the users answers
router.post('/users', (req, res) => {
  database.run(
    `
        INSERT INTO users (name, date, results)
        VALUES("${req.body.name}", "${req.body.date}", "${req.body.results}");
      `,
    () => {
      res.json('Answer submitted successfully')
    }
  )
})

// * HTTP requests for Computer Systems table
// Route to post the datorsys answers
router.post('/datorsys', (req, res) => {
  database.run(
    `
        INSERT INTO datorsys (question, options, answers)
        VALUES("${req.body.question}", "${req.body.options}", "${req.body.answers}");
      `,
    () => {
      res.json('Answer submitted successfully')
    }
  )
})

// Route to get the datorsys data
router.get('/datorsys', (req: any, res: any) => {
  database.all('SELECT * FROM datorsys', (error: any, quiz: any) => {
    res.json(quiz)
  })
})

// * HTTP requests for Databases table
// Route to post the databases answers
router.post('/databases', (req, res) => {
  database.run(
    `
        INSERT INTO databases (question, options, answers)
        VALUES("${req.body.question}", "${req.body.options}", "${req.body.answers}");
      `,
    () => {
      res.json('Answer submitted successfully')
    }
  )
})

// Route to get the databases data
router.get('/databases', (req: any, res: any) => {
  database.all('SELECT * FROM databases', (error: any, quiz: any) => {
    res.json(quiz)
  })
})

// * HTTP requests for Problem Analysis table
// Route to post the problemAnalysis answers
router.post('/problemAnalysis', (req, res) => {
  database.run(
    `
        INSERT INTO problemAnalysis (question, options, answers)
        VALUES("${req.body.question}", "${req.body.options}", "${req.body.answers}");
      `,
    () => {
      res.json('Answer submitted successfully')
    }
  )
})

// Route to get the problemAnalysis data
router.get('/problemAnalysis', (req: any, res: any) => {
  database.all('SELECT * FROM problemAnalysis', (error: any, quiz: any) => {
    res.json(quiz)
  })
})

// * HTTP requests for OOP table
// Route to post the oop answers
router.post('/oop', (req, res) => {
  database.run(
    `
        INSERT INTO oop (question, options, answers)
        VALUES("${req.body.question}", "${req.body.options}", "${req.body.answers}");
      `,
    () => {
      res.json('Answer submitted successfully')
    }
  )
})

// Route to get the oop data
router.get('/oop', (req: any, res: any) => {
  database.all('SELECT * FROM oop', (error: any, quiz: any) => {
    res.json(quiz)
  })
})

// * HTTP requests for API table
// Route to post the api answers
router.post('/api', (req, res) => {
  database.run(
    `
        INSERT INTO api (question, options, answers)
        VALUES("${req.body.question}", "${req.body.options}", "${req.body.answers}");
      `,
    () => {
      res.json('Answer submitted successfully')
    }
  )
})

// Route to get the api data
router.get('/api', (req: any, res: any) => {
  database.all('SELECT * FROM api', (error: any, quiz: any) => {
    res.json(quiz)
  })
})
