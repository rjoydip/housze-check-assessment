const express = require("express")
const router = express.Router()

const { VALID_TOKEN, VALID_CREDENTIALS } = require("../constant")

// POST /login endpoint
router.post("/login", (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Email and password required"
        })
    }

    if (email === VALID_CREDENTIALS.email && password === VALID_CREDENTIALS.password) {
        return res.status(200).json({
            success: true,
            message: "Login successful",
            token: VALID_TOKEN
        })
    } else {
        return res.status(401).json({
            success: false,
            message: "Invalid email or password"
        })
    }
})

module.exports = router;