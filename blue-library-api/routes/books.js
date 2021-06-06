const express = require('express')
const
    client = require('../database/client.js')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        var queryResult = await client.query("SELECT * FROM books");
        res.json(queryResult.rows)
    } catch (e) {
        res.json(e)
    }
})

router.get('/:book_id', async (req, res) => {
    try {
        var queryResult = await client.query(`SELECT * FROM books WHERE book_id = ${req.params.book_id}`)

        if (queryResult.rowCount == 1) {
            res.json(queryResult.rows[0])
        } else {
            res.sendStatus(404)
        }
    } catch (e) {
        res.json(e)
    }
})

router.post('/', async (req, res) => {
    try {
        var queryResult = await client.query(`INSERT INTO books (book_name, author) VALUES ('랄랄라', '김말코')`)
        res.json(queryResult)
    } catch (e) {
        res.json(e)
    }
})

module.exports = router