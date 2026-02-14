# Login System with Protected Dashboard

A simple authentication system built with `Node.js`, `Express` and `vanilla` JavaScript.

## Features

- User authentication with hardcoded credentials
- Token-based authentication
- Protected dashboard route with middleware
- LocalStorage for token persistence
- Error handling and validation
- CORS enabled for API requests

## Requirements

- Node.js
- npm (comes with Node.js)

## Quick Start

### 1. Clone the Repository

```bash
git clone 
cd 
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Server

```bash
npm start
```

The server will start on `http://localhost:3000`

### 4. Access the Application

Open the browser and navigate to: `http://localhost:3000`

## Login Credentials

User these credentials to test the login system:

- **Email:** `test@test.com`
- **Password:** `123456`

## API Endpoints

### POST /api/login

Authenticate user and receive token.

**Request Body:**

```json
{
    "email": "test@test.com",
    "password": "123456"
}
```

**Response (Success)**

```json
{
    "success": true,
    "messsage": "Login successful",
    "token": "auth_token_2026_secure_fixed_token"
}
```

**Response (Error)**

```json
{
    "success": false,
    "messsage": "Invalid email or password"
}
```

### GET /api/dashboard

Access protected dashboard (required authentication).

**Headers:**

```txt
Authorization: Bearer <token>
```

**Response (Success)**

```json
{
    "success": true,
    "messsage": "Welcome to Dashboard",
    "data": {
        "user": "test@test.com",
        "timestamp": "<timestamp>",
        "accessGranted": true
    }
}
```

**Response (Error)**

```json
{
    "success": false,
    "messsage": "No token provided. Access denied."
}
```

### GET /api/health

Health check endpoint to verify server is running.

**Response:**

```json
{
    "success": true,
    "message": "Server is running",
    "timestamp": "<timestamp>"
}
```

## Development

For development with auto-reload:

```bash
npm run dev
```

## License

ISC

## Author

[rjoydip](https://github.com/rjoydip)