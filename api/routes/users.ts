import express from 'express';
const router = express.Router();

// bringing user model here
const User = require('../models/UserModel')

router.post('/users', (req, res) => {
    res.send('it works!')
});

module.exports = router;