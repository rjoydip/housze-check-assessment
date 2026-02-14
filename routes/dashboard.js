const express = require("express")
const router = express.Router()

const authMiddleware = require("../middleware/auth")

router.get('/dashboard', authMiddleware, (_, res) => {
    return res.status(200).json({
        success: true,
        message: "Welcome to Dashboard",
        data: {
            user: "test@test.com",
            timestamp: new Date().toISOString(),
            accessGranted: true
        }
    })
})

module.exports = router