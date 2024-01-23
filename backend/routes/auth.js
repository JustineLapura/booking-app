const express = require('express')

const router = express.Router()

// LOGIN User 
router.get('/login', (req, res) => {
    res.json({mssg: "Login User"})
})

// SIGNUP User 
router.get('/signup', )

module.exports = router