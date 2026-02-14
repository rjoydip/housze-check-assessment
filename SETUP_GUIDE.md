# Quick Setup & Testing Guide

## Installation Steps

### Option 1: Traditional Setup (Node.js)

```bash
# 1. Navigate to project directory
cd housze-check-assessment

# 2. Install dependencies
npm install

# 3. Start the server
npm start
```

### Option 2: Docker Setup (Recommended)

```bash
# 1. Navigate to project directory
cd housze-check-assessment

# 2. Start with Docker Compose
docker compose up -d
```

## Expected Output

### Traditional Setup

```bash
Server running on http://localhost:3000
Login credentials: Email: test@test.com Password: 123456
```

### Docker Setup

```bash
[+] Running 2/2
 ✔ Network app-networkk                Created
 ✔ Container housze-check-assessment   Started
```

## Testing Checklist

### ✅ Backend Tests

1. **Health Check**

   ```bash
   curl http://localhost:3000/api/health
   ```

   Expected: `{"success":true,"message":"Server is running","timestamp":"..."}`

2. **Login - Success**

   ```bash
   curl -X POST http://localhost:3000/api/login \
     -H "Content-Type: application/json" \
     -d '{"email":"test@test.com","password":"123456"}'
   ```

   Expected: `{"success":true,"message":"Login successful","token":"auth_token_2026_secure_fixed_token"}`

3. **Login - Invalid Credentials**

   ```bash
   curl -X POST http://localhost:3000/api/login \
     -H "Content-Type: application/json" \
     -d '{"email":"wrong@test.com","password":"wrong"}'
   ```

   Expected: `{"success":false,"message":"Invalid email or password"}`

4. **Dashboard - No Token**

   ```bash
   curl http://localhost:3000/api/dashboard
   ```

   Expected: `{"success":false,"message":"No token provided. Access denied."}`

5. **Dashboard - Valid Token**

   ```bash
   curl http://localhost:3000/api/dashboard \
     -H "Authorization: Bearer auth_token_2024_secure_random_string"
   ```

   Expected: `{"success":true,"message":"Welcome to Dashboard","data":{...}}`

6. **Dashboard - Invalid Token**

   ```bash
   curl http://localhost:3000/api/dashboard \
     -H "Authorization: Bearer invalid_token"
   ```

   Expected: `{"success":false,"message":"Invalid token. Access denied."}`

### ✅ Frontend Tests

1. **Open Browser**

   - Navigate to `http://localhost:3000`
   - Should see login form with test credentials displayed

2. **Successful Login**

   - Email: `test@test.com`
   - Password: `123456`
   - Click "Sign In"
   - Should redirect to dashboard showing "Welcome to Dashboard"

3. **Failed Login**

   - Enter wrong credentials
   - Should show error message: "Invalid email or password" (**In console**)

4. **Token Persistence**

   - Login successfully
   - Refresh page (F5)
   - Should remain on dashboard (token persists)

5. **Logout**

   - Click "Logout" button
   - Should return to login form
   - Token should be removed from localStorage

6. **Protected Route Access**

   - Open DevTools (F12) → Console
   - Clear localStorage
   - Try to access dashboard by calling the API
   - Should get 401 Unauthorized

## Code Structure Verification

- server.js - Main Express application
- middleware/auth.js - Authentication middleware
- routes/auth.js - Login endpoint
- routes/dashboard.js - Protected dashboard endpoint
- public/index.html - Frontend UI
- package.json - Dependencies and scripts
- README.md - Complete documentation
- .gitignore - Ignore sensitive files
