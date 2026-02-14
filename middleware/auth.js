const { VALID_TOKEN } = require("../constant");

const authMiddleware = (req, res, next) => {
    // Get token from authorization header
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            success: false,
            message: "No token provided. Access denied."
        })
    }

    // Extract token
    const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : authHeader

    // Verify token
    if(token !== VALID_TOKEN){
        return res.status(403).json({
            success: false,
            message: "Invalid token. Access denied."
        })
    }

    next()
}

module.exports = authMiddleware