const express = require("express")
const cors = require("cors")
const path = require("path")

// Initilize app
const app = express()
const PORT = process.env.PORT || 3000

// Import routes
const authRoute = require("./routes/auth")
const dashboardRoute = require("./routes/dashboard")

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Seve static files
app.use(express.static(path.join(__dirname, 'public')))

// API routes
app.use("/api", authRoute)
app.use("/api", dashboardRoute)

// Root route - serve login page
app.get("/", (_, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// Health check endpoint
app.get("/api/health", (_, res) => {
    return res.status(200).json({
        success: true,
        message: "Server is running",
        timestamp: new Date().toISOString()
    })
})

// 404 handler
app.use((_, res) => {
    return res.status(404).json({
        success: false,
        message: "Route not found"
    })
})

app.use((err, _, res) => {
    console.err("Error: ", err)
    res.status(500).json({
        success: false,
        message: "Server error"
    })
})

app.listen(PORT, () => {
    console.log(`Server runing on http://localhost:${PORT}`)
    console.log("Login Credentials: Email: test@test.com | Password: 123456")
})