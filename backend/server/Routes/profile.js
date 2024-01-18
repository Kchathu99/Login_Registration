const express = require('express');
const bcrypt = require('bcryptjs');
const { User } = require("../models/user");
const jwt = require('jsonwebtoken');

const router = express.Router();

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.sendStatus(401);
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.sendStatus(401);
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Token verification failed' });
        }
        req.user = user;
        next();
    });
}

router.get("/", authenticateToken, async (req, res) => {
    try {
        // You can perform additional operations using req.user if needed
        res.json({ message: 'Welcome to the User Profile!', user: req.user });
    } catch (error) {
        console.error("Error in profile route:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
